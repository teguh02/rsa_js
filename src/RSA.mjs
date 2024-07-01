class RSA {
    // Key Generation
    static gcd(a, b) {
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }
    
    static modInverse(a, m) {
        let m0 = m;
        let y = 0, x = 1;
        if (m === 1) return 0;
        while (a > 1) {
            let q = Math.floor(a / m);
            let t = m;
            m = a % m;
            a = t;
            t = y;
            y = x - q * y;
            x = t;
        }
        if (x < 0) x += m0;
        return x;
    }
    
    static generateKeys(p, q) {
        let n = p * q;
        let phi = (p - 1) * (q - 1);
        let e = 3;
        while (this.gcd(e, phi) !== 1) {
            e += 2;
        }
        let d = this.modInverse(e, phi);
        return { publicKey: [e, n], privateKey: [d, n] };
    }

    // Encryption and Decryption
    static modExp(base, exp, mod) {
        if (mod === 1) return 0;
        let result = 1;
        base = base % mod;
        while (exp > 0) {
            if (exp % 2 === 1) {
                result = (result * base) % mod;
            }
            exp = exp >> 1;
            base = (base * base) % mod;
        }
        return result;
    }
    
    static decrypt(ciphertext, privateKey) {
        // check if the ciphertext is a string
        if (typeof ciphertext === 'string') {
            // check if the ciphertext is contains commas and spaces
            if (ciphertext.includes(', ')) {
                // split the ciphertext into an array of strings
                ciphertext = ciphertext.split(', ');
            } else {
                // split the ciphertext into an array of strings
                ciphertext = ciphertext.split(',');
            }

            // convert the array of strings to an array of numbers
            ciphertext = ciphertext.map(Number);
        }

        let [d, n] = privateKey;
        let decrypted = "";
        for (let c of ciphertext) {
            let m = this.modExp(c, d, n);
            decrypted += String.fromCharCode(m);
        }
        return decrypted;
    }

    static encrypt(plaintext, publicKey) {
        let [e, n] = publicKey;
        let encrypted = [];
        for (let i = 0; i < plaintext.length; i++) {
            let m = plaintext.charCodeAt(i);
            let c = this.modExp(m, e, n);
            encrypted.push(c);
        }
        return encrypted;
    }
}

export default RSA;