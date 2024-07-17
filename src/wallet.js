import * as bip39 from 'bip39'
import EthereumWallet from 'ethereumjs-wallet';
import CryptoJS from 'crypto-js'
import { Buffer } from 'buffer';


// Generate a 12-word seed phrase in a function
export function generateMnemonic() {
  return bip39.generateMnemonic()
}

export function generateWallet(seedPhrase) {
  // Generate private key from seed phrase
  const privateKey = CryptoJS.SHA256(seedPhrase).toString(CryptoJS.enc.Hex);
  console.log("private key :", privateKey);
  // Generate wallet from private key
  const wallet = EthereumWallet.fromPrivateKey(Buffer.from(privateKey, 'hex'));
  // Get public key
  const publicKey = wallet.getPublicKeyString();

  // return wallet and privateKey
  return { publicKey, privateKey };
}