import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { generateMnemonic, generateWallet } from "./wallet";

function App() {
  const phrase = generateMnemonic();

  // generate wallet
  const { publicKey, privateKey } = generateWallet(phrase);

  return (
    <>
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <img src={viteLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Vite
        </a>
        <p>Generated mnemonic: {phrase}</p>
        <p>Public key: {publicKey}</p>
        <p>Private key: {privateKey}</p>
      </header>
    </>
  );
}

export default App;
