import React, { useState } from "react";
import { Label, Select } from "../components/Form/styles";

const useSelectCurrency = (label, options) => {
  const [state, setState] = useState("");
  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">Seleccione</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectCurrency];
};

export default useSelectCurrency;
