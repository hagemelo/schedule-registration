import { CandidatoData } from '@domain/candidate.data';
import { Inject, Injectable } from '@nestjs/common';
import { AgendaDisponivelRepository } from 'src/infrastructure/repositories/agenda-disponivel.repository';
import { CandidatoRepository } from 'src/infrastructure/repositories/candidato.repository';

@Injectable()
export class CandidatoUsecase {
  constructor(
    @Inject(CandidatoRepository)
    private readonly repository: CandidatoRepository,
    private readonly agendaDisponivelRepository: AgendaDisponivelRepository
  ) {}

  async createCandidatoWithAgendaDisponivel(
    data: CandidatoData,
  ): Promise<CandidatoData> {
    const { dia, hora } = data.agendaSelecionada;
    const agendaSelecionada =
      await this.agendaDisponivelRepository.findAgendaDisponivelByDiaAndHora({
        dia,
        hora,
      });
    data.agendaSelecionada = agendaSelecionada;
    const result = await this.repository.persist(data);
    return result;
  }
  async loadCandidatos(): Promise<CandidatoData[]> {
    return this.repository.loadAll();
  }
}
