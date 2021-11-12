import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var timeout = require('connect-timeout');
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(timeout('20s'));
  app.use(haltOnTimedout);
  app.use(helmet());
  app.enableCors();
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 1000, // limit each IP to 1000 requests per windowMs
    }),
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

function haltOnTimedout (req, res, next) {
  if (!req.timedout) next()
}
