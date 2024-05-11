import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const { t } = useTranslation();

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div>
      <select value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
        <option value="">{t("selecione_um_dia")}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;