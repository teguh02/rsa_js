# Package Information
<b>@teguh02/rsa_js</b> is a simple package to handle RSA encryption and decryption algorithm.

<p>
This javascript library are couples from this php library
https://github.com/teguh02/rsa_php
</p>

# Installation
If you want to install this library you can install with this command
<code>npm i @teguh02/rsa_js</code>

# Usage
```javascript

// Import the RSA module
import RSA  from '../src/RSA.mjs';

// Define p and q
const p = 61;
const q = 53;

// Generate the RSA public and private keys
const keys = RSA.generateKeys(p, q);

// Print the public and private keys
// console.log("Public key: ", keys.publicKey);
// console.log("Private key: ", keys.privateKey);

// Define the message
const message = "I LOVE YOU"; 

// Encrypt the message
const encryptedMessage = RSA.encrypt(message, keys.publicKey);
console.log("Encrypted message: ", encryptedMessage.join(","));

// Decrypt the message
const decryptedMessage = RSA.decrypt(encryptedMessage, keys.privateKey);
console.log("Decrypted message: ", decryptedMessage);

// Also you can receive the message in this way from the RSA PHP library:
// const decryptedMessage = RSA.decrypt('286,2774,83,913,1781,155,2774,206,913,2509', keys.privateKey);

```