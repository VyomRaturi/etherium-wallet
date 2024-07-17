import Navbar from "../Navbar";
import Footer from "../Footer";
import CryptoJS from "crypto-js";

const DashBoard = () => {
  const encryptedPrivateKey = localStorage.getItem("encryptedPrivateKey");

  const bytes = CryptoJS.AES.decrypt(
    encryptedPrivateKey,
    import.meta.env.VITE_WALLET_CREATION_SECRET
  );

  const decryptedPrivateKey = bytes.toString(CryptoJS.enc.Utf8);

  return (
    <>
      <Navbar />
      <h1>DashBoard</h1>
      {/* public key */}
      <p>Public Key: {localStorage.getItem("publicKey")}</p>
      {/* private key */}
      <p>Decrypted Private Key: {decryptedPrivateKey}</p>
      <Footer />
    </>
  );
};

export default DashBoard;
