export abstract class Decrypter {
    abstract decrypt: (ciphertext: string) => Promise<any>;
}

export abstract class Encrypter {
    abstract encrypt(payload: any): Promise<string>;
}

export abstract class HashComparer {
    abstract compare(value: string, hash: string): Promise<boolean>;
}

export abstract class Hasher {
    abstract hash(payload: string): Promise<string>;
}
