import { NestFactory } from '@nestjs/core';
import { BackendScheduleRegistrationModule } from './backend-schedule-registration.module';
import { initializeTransactionalContext } from 'typeorm-transactional';

async function bootstrap() {
  initializeTransactionalContext();
  const app = await NestFactory.create(BackendScheduleRegistrationModule);
  await app.listen(3000);
}
bootstrap();
