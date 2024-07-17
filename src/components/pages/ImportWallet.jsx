import { useState } from "react";
import { generateWallet } from "../../wallet";
import CryptoJS from "crypto-js";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function ImportWallet() {
  const [currentStep, setCurrentStep] = useState(1);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phrase, setPhrase] = useState(Array(12).fill(""));

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePhraseChange = (index, value) => {
    const words = value.split(" ");
    const newPhrase = [...phrase];

    words.forEach((word, i) => {
      if (index + i < newPhrase.length) {
        newPhrase[index + i] = word;
      }
    });

    setPhrase(newPhrase);
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      if (password === "" || password !== confirmPassword) {
        alert("Passwords do not match or are empty");
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      const seedPhrase = phrase.join(" ");

      if (!seedPhrase || seedPhrase.split(" ").length !== 12) {
        alert("Please enter a valid 12-word seed phrase");
        return;
      }

      console.log("seed phrase :", seedPhrase);
      const { publicKey, privateKey } = generateWallet(seedPhrase);

      console.log("public key :", publicKey);
      console.log("private key :", privateKey);

      // Store public key and private key in local storage
      localStorage.setItem("publicKey", publicKey);

      // Encrypt the private key and store it in local storage
      const encryptedPrivateKey = CryptoJS.AES.encrypt(
        privateKey,
        import.meta.env.VITE_WALLET_CREATION_SECRET
      ).toString();
      localStorage.setItem("encryptedPrivateKey", encryptedPrivateKey);

      setCurrentStep(3);
    }
  };

  const handleRedirectToDashboard = () => {
    window.location.href = "/dashboard"; // Redirect to dashboard
  };

  if (localStorage.getItem("encryptedPrivateKey")) {
    window.location.href = "/dashboard";
  } else {
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center h-screen bg-background">
          <div className="w-full max-w-md">
            <div className="flex items-center justify-center mb-4">
              {/* Steps Indicators */}
              <div
                className={`w-8 h-8 rounded-full ${
                  currentStep >= 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                } flex items-center justify-center mr-4`}
              >
                1
              </div>
              <div
                className={`flex-1 h-1 ${
                  currentStep >= 1 ? "bg-primary" : "bg-muted"
                }`}
              />
              <div
                className={`w-8 h-8 rounded-full ${
                  currentStep >= 2
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                } flex items-center justify-center mr-4`}
              >
                2
              </div>
            </div>

            {/* Step 1: Create Password */}
            {currentStep === 1 && (
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Create Password</h2>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-card-foreground"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      className="block w-full text-black px-3 py-2 border border-input rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-card-foreground"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      className="block w-full text-black px-3 py-2 border border-input rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                <button
                  onClick={handleContinue}
                  className="mt-4 w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Enter 12-Word Phrase */}
            {currentStep === 2 && (
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Enter Your 12-Word Phrase
                </h2>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {phrase.map((value, index) => (
                    <input
                      key={index}
                      type="text"
                      value={value}
                      onChange={(e) =>
                        handlePhraseChange(index, e.target.value)
                      }
                      className="bg-muted text-muted-foreground py-2 px-4 rounded-md text-center"
                    />
                  ))}
                </div>
                <button
                  onClick={handleContinue}
                  className="mt-4 w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 3: Completion */}
            {currentStep === 3 && (
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                <p className="text-muted-foreground mb-4">
                  You have successfully imported your wallet.
                </p>
                <button
                  onClick={handleRedirectToDashboard}
                  className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
                >
                  Go to Dashboard
                </button>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
