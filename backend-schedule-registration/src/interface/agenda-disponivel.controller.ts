import { Body, Controller, Get, HttpCode, Inject, Post } from '@nestjs/common';
import { AgendaDisponivelDto } from './dto/agenda-disponivel.dto';
import { Transactional } from 'typeorm-transactional';
import { AgendaDisponivelUsecase } from '@application/agenda-disponivel.usecase';

@Controller({
  path: 'agenda-disponivel',
  version: '1',
})
export class AgendaDisponivelController {
  constructor(
    @Inject(AgendaDisponivelUsecase)
    private readonly usecase: AgendaDisponivelUsecase,
  ) {}
  @Post('create')
  @HttpCode(200)
  @Transactional()
  async createAgendaDisponivel(
    @Body() agendadisponivel: AgendaDisponivelDto,
  ): Promise<AgendaDisponivelDto> {
    const { id, dia, hora } = await this.usecase.createAgendaDisponivel({
      ...agendadisponivel,
    });
    return { id, dia, hora };
  }

  @Get()
  @HttpCode(200)
  async loadAgendaDisponivel(): Promise<AgendaDisponivelDto[]>{

    const agendas = await this.usecase.loadAgendasDisponiveis();
    const result = agendas.map((agenda) => {
      const { id, dia, hora } = agenda;
      return { id, dia, hora };
    });
    return result;
  }
}
