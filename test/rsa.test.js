// Import the RSA module
import RSA from '../src/RSA.mjs';

describe('RSA Encryption and Decryption With P: 101 Q: 103', () => {
    const p = 101;
    const q = 103;
    let keys;
    const message = "HELLO RSA"; 

    beforeAll(() => {
        // Generate the RSA public and private keys
        keys = RSA.generateKeys(p, q);
    });

    test('should generate public and private keys', () => {
        expect(keys.publicKey).toHaveLength(2);
        expect(keys.privateKey).toHaveLength(2);
        expect(typeof keys.publicKey[0]).toBe('number');
        expect(typeof keys.publicKey[1]).toBe('number');
        expect(typeof keys.privateKey[0]).toBe('number');
        expect(typeof keys.privateKey[1]).toBe('number');
    });

    test('should encrypt a message', () => {
        const encryptedMessage = RSA.encrypt(message, keys.publicKey);
        expect(encryptedMessage).toBeInstanceOf(Array);
        encryptedMessage.forEach(c => expect(typeof c).toBe('number'));
    });

    test('should decrypt a message', () => {
        const encryptedMessage = RSA.encrypt(message, keys.publicKey);
        const decryptedMessage = RSA.decrypt(encryptedMessage, keys.privateKey);
        expect(decryptedMessage).toBe(message);
    });
});

describe('RSA Encryption and Decryption With P: 61 Q: 53', () => {
    const p = 61;
    const q = 53;
    let keys;
    const message = "HELLO RSA"; 

    beforeAll(() => {
        // Generate the RSA public and private keys
        keys = RSA.generateKeys(p, q);
    });

    test('should generate public and private keys', () => {
        expect(keys.publicKey).toHaveLength(2);
        expect(keys.privateKey).toHaveLength(2);
        expect(typeof keys.publicKey[0]).toBe('number');
        expect(typeof keys.publicKey[1]).toBe('number');
        expect(typeof keys.privateKey[0]).toBe('number');
        expect(typeof keys.privateKey[1]).toBe('number');
    });

    test('should encrypt a message', () => {
        const encryptedMessage = RSA.encrypt(message, keys.publicKey);
        expect(encryptedMessage).toBeInstanceOf(Array);
        encryptedMessage.forEach(c => expect(typeof c).toBe('number'));
    });

    test('should decrypt a message', () => {
        const encryptedMessage = RSA.encrypt(message, keys.publicKey);
        const decryptedMessage = RSA.decrypt(encryptedMessage, keys.privateKey);
        expect(decryptedMessage).toBe(message);
    });
});

describe('RSA Encryption and Decryption With P: 17 Q: 19', () => {
    const p = 17;
    const q = 19;
    let keys;
    const message = "HELLO RSA"; 

    beforeAll(() => {
        // Generate the RSA public and private keys
        keys = RSA.generateKeys(p, q);
    });

    test('should generate public and private keys', () => {
        expect(keys.publicKey).toHaveLength(2);
        expect(keys.privateKey).toHaveLength(2);
        expect(typeof keys.publicKey[0]).toBe('number');
        expect(typeof keys.publicKey[1]).toBe('number');
        expect(typeof keys.privateKey[0]).toBe('number');
        expect(typeof keys.privateKey[1]).toBe('number');
    });

    test('should encrypt a message', () => {
        const encryptedMessage = RSA.encrypt(message, keys.publicKey);
        expect(encryptedMessage).toBeInstanceOf(Array);
        encryptedMessage.forEach(c => expect(typeof c).toBe('number'));
    });

    test('should decrypt a message', () => {
        const encryptedMessage = RSA.encrypt(message, keys.publicKey);
        const decryptedMessage = RSA.decrypt(encryptedMessage, keys.privateKey);
        expect(decryptedMessage).toBe(message);
    });
});

describe('RSA Encryption and Decryption With P: 11 Q: 13', () => {
    const p = 11;
    const q = 13;
    let keys;
    const message = "HELLO RSA"; 

    beforeAll(() => {
        // Generate the RSA public and private keys
        keys = RSA.generateKeys(p, q);
    });

    test('should generate public and private keys', () => {
        expect(keys.publicKey).toHaveLength(2);
        expect(keys.privateKey).toHaveLength(2);
        expect(typeof keys.publicKey[0]).toBe('number');
        expect(typeof keys.publicKey[1]).toBe('number');
        expect(typeof keys.privateKey[0]).toBe('number');
        expect(typeof keys.privateKey[1]).toBe('number');
    });

    test('should encrypt a message', () => {
        const encryptedMessage = RSA.encrypt(message, keys.publicKey);
        expect(encryptedMessage).toBeInstanceOf(Array);
        encryptedMessage.forEach(c => expect(typeof c).toBe('number'));
    });

    test('should decrypt a message', () => {
        const encryptedMessage = RSA.encrypt(message, keys.publicKey);
        const decryptedMessage = RSA.decrypt(encryptedMessage, keys.privateKey);
        expect(decryptedMessage).toBe(message);
    });
});

// test decryption with a defined concatenated string (without spaces)
// the string is : 286,2774,83,913,1781,155,2774,206,913,2509
describe('RSA Decryption With Concatenated String Without Spaces', () => {
    const p = 61;
    const q = 53;
    let keys;
    const message = "I LOVE YOU"; 

    beforeAll(() => {
        // Generate the RSA public and private keys
        keys = RSA.generateKeys(p, q);
    });

    test('should decrypt a message', () => {
        const decryptedMessage = RSA.decrypt('286,2774,83,913,1781,155,2774,206,913,2509', keys.privateKey);
        expect(decryptedMessage).toBe(message);
    });
});

// test decryption with a defined concatenated string (with spaces)
// the string is : 286, 2774, 83, 913, 1781, 155, 2774, 206, 913, 2509
describe('RSA Decryption With Concatenated String With Spaces', () => {
    const p = 61;
    const q = 53;
    let keys;
    const message = "I LOVE YOU"; 

    beforeAll(() => {
        // Generate the RSA public and private keys
        keys = RSA.generateKeys(p, q);
    });

    test('should decrypt a message', () => {
        const decryptedMessage = RSA.decrypt('286, 2774, 83, 913, 1781, 155, 2774, 206, 913, 2509', keys.privateKey);
        expect(decryptedMessage).toBe(message);
    });
});