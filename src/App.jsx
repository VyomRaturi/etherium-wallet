import { generateMnemonic, generateWallet } from "./wallet";
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import GetStarted from "./components/pages/GetStarted";

function App() {
  const phrase = generateMnemonic();
  console.log("phrase :", phrase);

  // generate wallet
  const { publicKey, privateKey } = generateWallet(phrase);
  console.log("public key :", publicKey);
  console.log("private key :", privateKey);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/get-started" element={<GetStarted />} />
      {/* <Route path="/new-wallet" element={<NewWallet />} /> */}
      {/* <Route path="/dashboard" element={<DashBoard />} /> */}
    </Routes>
  );
}

export default App;
