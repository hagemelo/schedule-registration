import { useEffect, useState } from 'react';
import { AgendaSelecionada } from '../data/agendaSelecionada';


const AgendaSelecionadaForm: AgendaSelecionada = {
    dia: '',
    hora: '',
}

export const useLoadAgendaSelecionada = () => {

    const [formData, setFormData] = useState(AgendaSelecionadaForm);
    const [isError, setIsError] = useState(Boolean);

    useEffect(() => {
        setIsError(false);
      
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


  return {
    isError,
    formData,
    handleChange,
    handleSubmit,
  };
};