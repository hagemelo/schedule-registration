import { CandidatoUsecase } from '@application/candidato.usecase';
import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { Transactional } from 'typeorm-transactional';
import { CandidatoDto } from './dto/candidato.dto';

@Controller({
  path: 'candidato',
  version: '1',
})
export class CandidatoController {
  constructor(
    @Inject(CandidatoUsecase)
    private readonly usecase: CandidatoUsecase,
  ) {}

  @Post('create')
  @HttpCode(200)
  @Transactional()
  async createAgendaDisponivel(
    @Body() candidato: CandidatoDto,
  ): Promise<CandidatoDto> {
    const result = await this.usecase.createCandidatoWithAgendaDisponivel({
      ...candidato,
    });

    const { id, dia, hora } = result.agendaSelecionada;

    return {
      ...result,
      agendaSelecionada: { id, dia, hora },
    };
  }
}
