import React from "react";
import { currencies } from "../../constants/currencies";
import useSelectCurrency from "../../hooks/useSelectCurrency";
import { InputSubmit } from "./styles";

const Form = () => {
  const [currency, SelectCurrency] = useSelectCurrency(
    "Elige tu moneda",
    currencies
  );
  return (
    <form>
      <SelectCurrency />
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Form;
