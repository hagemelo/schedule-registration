import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLoadAgendaSelecionada } from '../../hook/useLoadAgendaSelecionada.tsx';

const AgendaSelecionadaForm = () => {

    const { t } = useTranslation();
    const { isError,
        formData,
        handleChange,
        handleSubmit,} = useLoadAgendaSelecionada();

    return (
        <div>
            {isError}
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="day">{t("agenda_selecionada_form_dia")}:</label>
                <input
                    type="text"
                    id="dia"
                    name="dia"
                    value={formData.dia}
                    onChange={handleChange}
                />
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