import { NestFactory } from '@nestjs/core';
import { BackendScheduleRegistrationModule } from './backend-schedule-registration.module';
import { initializeTransactionalContext } from 'typeorm-transactional';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  initializeTransactionalContext();
  const app = await NestFactory.create(BackendScheduleRegistrationModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(process.env.SERVICE_PORT || 8080);
}
bootstrap();
