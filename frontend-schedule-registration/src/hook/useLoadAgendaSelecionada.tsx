import { useEffect, useState } from 'react';
import { AgendaSelecionada } from '../data/agendaSelecionada';
import { AgendaSelecionadaService } from '../service/agendaSelecinadaService.tsx';
import { BackendApi } from '../api/backendApi.tsx';

const AgendaSelecionadaForm: AgendaSelecionada = {
    dia: '',
    hora: '',
}

const listDiasDisponiveis: string[] = [''];

export const useLoadAgendaSelecionada = () => {

    
    const [formData, setFormData] = useState(AgendaSelecionadaForm);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isError, setIsError] = useState(Boolean);
    const [diasDisponiveis, setDiasDisponiveis] = useState(listDiasDisponiveis)


    useEffect( () => {
      setIsError(false);
      
      const fetchData = async () => {
        const service = new AgendaSelecionadaService(new BackendApi());
        const dias = await service.diasDisponiveis();
        setDiasDisponiveis(dias);

      };

      fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, such as sending data to a server or performing client-side validation
    console.log(formData);
  };

  const handleSelect = (option) => {
    setSelectedItem(option);
  };


  return {
    isError,
    formData,
    handleChange,
    handleSubmit,
    selectedItem,
    handleSelect,
    diasDisponiveis
  };
};