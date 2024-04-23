import { faker } from '@faker-js/faker';
import { AgendaDisponivelData } from '@domain/agenda-diponivel.data';
import { ApiProperty } from '@nestjs/swagger';

export class AgendaDisponivelDto {
  constructor(data: AgendaDisponivelData) {
    const { id, dia, hora } = data;

    if (id) this.id = id;
    if (dia) this.dia = dia;
    if (hora) this.hora = hora;
  }

  @ApiProperty({
    description: 'Identificador da Agenda Disponivel',
    example: faker.number.int(),
  })
  id: number;

  @ApiProperty({
    description: 'Dia selecionado na agenda',
    example: '22-04-2024, Seg',
  })
  dia: string;

  @ApiProperty({
    description: 'Hora selecionado na agenda',
    example: '08:00',
  })
  hora: string;
}
