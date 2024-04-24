import { AgendaDisponivelData } from '@domain/agenda-diponivel.data';
import { Inject, Injectable } from '@nestjs/common';
import { AgendaDisponivelRepository } from 'src/infrastructure/repositories/agenda-disponivel.repository';

@Injectable()
export class AgendaDisponivelUsecase {
  constructor(
    @Inject(AgendaDisponivelRepository)
    private readonly repository: AgendaDisponivelRepository,
  ) {}

  public async createAgendaDisponivel(
    data: AgendaDisponivelData,
  ): Promise<AgendaDisponivelData> {
    const result = await this.repository.persist(data);
    return result;
  }
}
