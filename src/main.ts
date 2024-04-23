import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const setupSwagger = (application: INestApplication) => {
      let swaggerRoute: string;
      if (process.env.NODE_ENV !== 'production') {
        application.use(
          ['/swagger'],
          basicAuth({
            users: {
              [configService.get('SWAGGER_USERNAME')]:
                configService.get('SWAGGER_PASSWORD'),
            },
            challenge: true,
          }),
        );
        swaggerRoute = '/swagger';
      }

      const config = new DocumentBuilder()
        .setTitle(configService.get('SWAGGER_TITLE'))
        .setDescription(configService.get('SWAGGER_DESCRIPTION'))
        .setVersion(configService.get('SWAGGER_VERSION'))
        .addBearerAuth()
        .build();

      const document = SwaggerModule.createDocument(application, config);
      SwaggerModule.setup(swaggerRoute, application, document);
    };

    app.useGlobalPipes(new ValidationPipe());
    setupSwagger(app);

    const port = configService.get('PORT') || 81;
    await app.listen(port);
    console.log(`Running on port:${port} 🚀`);
  } catch (error) {
    console.error(error);
  }
}

bootstrap();
