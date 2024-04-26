import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from '@config/database/config';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { DataSource } from 'typeorm';
import { AgendaDisponivelController } from '@interface/agenda-disponivel.controller';
import { AgendaDisponivelRepository } from './infrastructure/repositories/agenda-disponivel.repository';
import { AgendaDisponivelUsecase } from '@application/agenda-disponivel.usecase';
import { AgendaDisponivelEntity } from './infrastructure/entities/agenda-disponivel.entity';
import { CandidatoEntity } from './infrastructure/entities/candidato.entity';
import { CandidatoController } from '@interface/candidato.controller';
import { CandidatoUsecase } from '@application/candidato.usecase';
import { CandidatoRepository } from './infrastructure/repositories/candidato.repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory() {
        return dbConfig.options;
      },
      async dataSourceFactory(options) {
        if (!options) {
          throw new Error('Invalid options passed');
        }

        return addTransactionalDataSource(new DataSource(options));
      },
    }),
    TypeOrmModule.forFeature([AgendaDisponivelEntity, CandidatoEntity]),
  ],
  controllers: [AgendaDisponivelController, CandidatoController],
  providers: [
    AgendaDisponivelRepository,
    AgendaDisponivelUsecase,
    CandidatoUsecase,
    CandidatoRepository,
  ],
})
export class BackendScheduleRegistrationModule {}
