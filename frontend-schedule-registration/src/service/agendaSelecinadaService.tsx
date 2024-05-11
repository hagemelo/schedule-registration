import { BackendApi } from "../api/backendApi";
import { AgendaSelecionada } from "../data/agendaSelecionada";

export class AgendaSelecionadaService{

    constructor(private api: BackendApi){}

    async diasDisponiveis(): Promise<string[]>{

        const path = '/v1/agenda-disponivel';
        const agendas: AgendaSelecionada[] = await this.api.get(path);
        const dias = agendas.map((agendaSel) => (agendaSel.dia));
        return dias;
    }
    
}
