import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const port: string = process.env.PORT || '4000';

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  app.setGlobalPrefix('api');

  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}/api`);
    Logger.log(`Listening at http://localhost:${port}/graphql`);
  });
}

bootstrap();
