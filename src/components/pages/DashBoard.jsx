import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CryptoJS from "crypto-js";

const DashBoard = () => {
  const [balance, setBalance] = useState(null);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (!localStorage.getItem("encryptedPrivateKey")) {
    window.location.href = "/";
  }

  const encryptedPrivateKey = localStorage.getItem("encryptedPrivateKey");

  // Decrypt the private key
  const bytes = CryptoJS.AES.decrypt(
    encryptedPrivateKey,
    import.meta.env.VITE_WALLET_CREATION_SECRET
  );
  const decryptedPrivateKey = bytes.toString(CryptoJS.enc.Utf8);

  const provider = new ethers.JsonRpcProvider(
    "https://rpc.ankr.com/eth_sepolia"
  );

  const wallet = new ethers.Wallet(decryptedPrivateKey, provider);
  const address = wallet.address;

  // Save the derived address in localStorage
  useEffect(() => {
    localStorage.setItem("address", address);
  }, [address]);

  // Function to get balance
  const getBalance = async () => {
    try {
      const balance = await provider.getBalance(address);
      setBalance(ethers.formatEther(balance));
    } catch (error) {
      setErrorMessage("Failed to fetch balance");
      console.error("Balance Error:", error);
    }
  };

  // Function to send transaction
  const sendTransaction = async () => {
    try {
      const tx = await wallet.sendTransaction({
        to: recipient,
        value: ethers.parseEther(amount),
      });
      setTransactionHash(tx.hash);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Transaction failed");
      console.error("Transaction Error:", error);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container min-h-screen mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <p className="text-red-600">
          The wallet supports only sepolia blockchain as of now*
        </p>
        <div className="flex items-center">
          <p className="break-all">Address: {address}</p>
          <button
            onClick={() => copyToClipboard(address)}
            className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-xl"
          >
            Copy
          </button>
        </div>
        <div className="flex items-center mt-2">
          <p className="break-all">Private Key: {decryptedPrivateKey}</p>
          <button
            onClick={() => copyToClipboard(decryptedPrivateKey)}
            className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-xl"
          >
            Copy
          </button>
        </div>
        <p>Balance: {balance} ETH</p>

        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Send Transaction</h2>
          <input
            type="text"
            placeholder="Recipient Address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="block w-full px-3 text-black py-2 mb-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Amount in ETH"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="block w-full px-3 py-2 mb-2 text-black border rounded-md"
          />
          <button
            onClick={sendTransaction}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Send
          </button>
          {transactionHash && (
            <p className="mt-2">Transaction Hash: {transactionHash}</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashBoard;
