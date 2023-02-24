import React, { useEffect, useState } from "react";
import { getCurrencyData } from "../../services/criptoAPI";
import { Error, SelectCurrencies } from "../";
import { InputSubmit } from "./styles";
import { getCurrencyInputOptions } from "../../helpers/helpers";

const Form = ({ onSelectCurrency }) => {
  const [selectedValues, setSelectedValues] = useState({
    currency: "",
    criptoCurrency: "",
  });
  const [currencyOptions, setCurrencyOptions] = useState(
    getCurrencyInputOptions([])
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    getCriptos()
      .then((res) => {
        setCurrencyOptions(getCurrencyInputOptions(res));
      })
      .catch((err) => console.log(err));
  }, []);

  const getCriptos = async () => {
    const data = await getCurrencyData();
    const formattedData = data.map((currency) => ({
      id: currency.CoinInfo.Name,
      name: currency.CoinInfo.FullName,
    }));
    return formattedData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { currency, criptoCurrency } = selectedValues;
    const hasSearchValues = ![currency, criptoCurrency].includes("");

    if (!hasSearchValues) {
      setError(true);
      return;
    }
    setError(false);
    onSelectCurrency({ currency, criptoCurrency });
  };

  const handleChangeOption = (id, value) => {
    setSelectedValues({ ...selectedValues, [id]: value });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        {currencyOptions.map((option) => (
          <SelectCurrencies
            key={option.id}
            options={option}
            onChange={handleChangeOption}
          />
        ))}

        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Form;
