export class AgendaDisponivelModel {
  id?: string;
  dia: string;
  hora: string;

  constructor(params: Partial<AgendaDisponivelModel>) {
    if (params.id) this.id = params.id;
    if (params.dia) this.dia = params.dia;
    if (params.hora) this.hora = params.hora;
  }
}
