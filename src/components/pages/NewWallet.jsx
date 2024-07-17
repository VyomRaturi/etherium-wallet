import { useState, useEffect } from "react";
import bcrypt from "bcryptjs";
import CryptoJS from "crypto-js";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { generateMnemonic, generateWallet } from "../../wallet";

export default function NewWallet() {
  const [currentStep, setCurrentStep] = useState(1);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phrase, setPhrase] = useState([]);
  const [confirmedPhrase, setConfirmedPhrase] = useState(Array(12).fill(""));

  const generatePhrase = () => {
    const word = generateMnemonic().split(" ");
    setPhrase(word);
  };

  const hashSeedPhrase = (seedPhrase) => {
    return CryptoJS.SHA256(seedPhrase).toString(CryptoJS.enc.Hex);
  };

  const handleDashboardRedirect = () => {
    window.location.href = "/dashboard";
  };

  useEffect(() => {
    generatePhrase();
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePhraseChange = (index, value) => {
    const words = value.split(" ");
    const newPhrase = [...confirmedPhrase];

    words.forEach((word, i) => {
      if (index + i < newPhrase.length) {
        newPhrase[index + i] = word;
      }
    });

    setConfirmedPhrase(newPhrase);
  };

  const handleContinue = async () => {
    if (currentStep === 1) {
      if (password === "") {
        alert("Password cannot be empty");
        return;
      } else if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (JSON.stringify(phrase) !== JSON.stringify(confirmedPhrase)) {
        alert("Phrases do not match");
        return;
      }

      // create wallet and store in local storage
      const { publicKey, privateKey } = generateWallet(phrase);
      localStorage.setItem("publicKey", publicKey);
      const encryptedPrivateKey = CryptoJS.AES.encrypt(
        privateKey,
        import.meta.env.VITE_WALLET_CREATION_SECRET
      ).toString();
      localStorage.setItem("encryptedPrivateKey", encryptedPrivateKey);

      // encrypt the password and store it in local storage
      const hashedPassword = bcrypt.hashSync(password, 10);
      localStorage.setItem("password", hashedPassword);

      // Hash the seed phrase and store it in local storage
      const hashedSeedPhrase = hashSeedPhrase(confirmedPhrase);
      localStorage.setItem("seedPhrase", hashedSeedPhrase);

      setCurrentStep(4);
    }
  };

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
            <div
              className={`flex-1 h-1 ${
                currentStep >= 2 ? "bg-primary" : "bg-muted"
              }`}
            />
            <div
              className={`w-8 h-8 rounded-full ${
                currentStep >= 3
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              } flex items-center justify-center`}
            >
              3
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
                    className="block text-black w-full px-3 py-2 border border-input rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
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

          {/* Step 2: Generate 12-Word Phrase */}
          {currentStep === 2 && (
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Your 12-Word Phrase</h2>
              <div className="grid grid-cols-4 gap-2">
                {phrase.map((word, index) => (
                  <div
                    key={index}
                    className="bg-muted text-muted-foreground py-2 px-4 rounded-md text-center"
                  >
                    {word}
                  </div>
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

          {/* Step 3: Confirm 12-Word Phrase */}
          {currentStep === 3 && (
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Confirm Your 12-Word Phrase
              </h2>
              <div className="grid grid-cols-4 gap-2">
                {confirmedPhrase.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    value={value}
                    onChange={(e) => handlePhraseChange(index, e.target.value)}
                    className="bg-muted text-muted-foreground py-2 px-4 rounded-md text-center"
                  />
                ))}
              </div>
              <button
                onClick={handleContinue}
                className="mt-4 w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
              >
                Confirm
              </button>
            </div>
          )}

          {/* Step 4: Completion */}
          {currentStep === 4 && (
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
              <p className="text-muted-foreground mb-4">
                You have successfully completed the wallet setup process.
              </p>
              <button
                onClick={handleDashboardRedirect}
                className="mt-4 w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
              >
                Confirm
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
