import React, { useEffect, useState } from "react";
import { Label, Select } from "./styles";

const SelectCurrencies = ({ options, onChange }) => {
  const [optionSelected, setoptionSelected] = useState("");
  const { id, label, values } = options;

  const handleChange = (e) => {
    setoptionSelected(e.target.value);
    onChange(id, e.target.value);
  };

  return (
    <>
      <Label>{label}</Label>
      <Select value={optionSelected} onChange={handleChange}>
        <option value="">Seleccione</option>
        {values.length &&
          values.map((value) => (
            <option key={value.id} value={value.id}>
              {value.name}
            </option>
          ))}
      </Select>
    </>
  );
};

export default SelectCurrencies;
