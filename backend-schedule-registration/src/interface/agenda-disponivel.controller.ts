import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AgendaDisponivelDto } from './dto/agenda-disponivel.dto';
import { Transactional } from 'typeorm-transactional';

@Controller({
  path: 'agenda-disponivel',
  version: '1',
})
export class AgendaDisponivelController {
  @Post('new')
  @HttpCode(200)
  @Transactional()
  async createAgendaDisponivel(
    @Body() agendadisponivel: AgendaDisponivelDto,
  ): Promise<AgendaDisponivelDto> {
    console.dir(agendadisponivel);
    return agendadisponivel;
  }
}
