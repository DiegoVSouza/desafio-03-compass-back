import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtAdapter } from './infra/adapters/jwtAdapter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { setCurrentEnvironment } from './infra/config/environments';
import { Decrypter } from './core/domain/protocols/cryptography/cryptography';
import { CategoryModule } from './infra/ioc/category/category.module';
import { AttributesModule } from './infra/ioc/attributes/attributes.module';
import { ProductModule } from './infra/ioc/product/product.module';
import { TypeOrmDataSource } from './infra/db/database.provider';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: setCurrentEnvironment(),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({}),
      dataSourceFactory: async () => {
        const dataSource = await TypeOrmDataSource.initialize();
        return dataSource;
      },
    }),
    CategoryModule,
    AttributesModule,
    ProductModule
  ],
  providers: [
    {
      provide: Decrypter,
      useClass: JwtAdapter,
    }
  ],
})
export class AppModule {}
