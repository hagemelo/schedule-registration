import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLoadAgendaSelecionada } from '../../hook/useLoadAgendaSelecionada.tsx';
import Dropdown from '../dropdow/dropdow.jsx';

const AgendaSelecionadaForm = () => {

    const { t } = useTranslation();
    const { isError,
        formData,
        handleChange,
        handleSubmit,selectedItem,
        handleSelect,
        diasDisponiveis} = useLoadAgendaSelecionada();

    return (
        <div>
            {isError}
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="day">{t("agenda_selecionada_form_dia")}:</label>
                <div>
                    <Dropdown options={diasDisponiveis} onSelect={handleSelect} />
                    {selectedItem && <p>You selected: {selectedItem}</p>}
                </div>
            </div>
            <div>
                <label htmlFor="Hora">{t("agenda_selecionada_form_hora")}:</label>
                <input
                    type="text"
                    id="hora"
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">{t("agenda_selecionada_form_proximo")}</button>
            </form>
            
        </div>
  );
};

export default AgendaSelecionadaForm;