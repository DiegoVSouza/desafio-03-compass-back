import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sign as jwtSign, verify as jwtVerify } from 'jsonwebtoken';
import { Decrypter, Encrypter } from 'src/core/domain/protocols/cryptography/cryptography';

@Injectable()
export class JwtAdapter implements Encrypter, Decrypter {
  private secret: string;
  constructor(private readonly configService: ConfigService) {
    this.secret = configService.get<string>('SECRET_KEY');
  }

  async encrypt(payload: any): Promise<string> {
    return jwtSign(payload, this.secret);
  }

  async decrypt(ciphertext: string): Promise<string> {
    return jwtVerify(ciphertext, this.secret) as any;
  }
}
