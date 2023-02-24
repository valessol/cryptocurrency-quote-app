import React, { useEffect, useState } from "react";
import { getCurrencyData } from "../../services/criptoAPI";
import { Error } from "../";
import { InputSubmit } from "./styles";
import { getCurrencyInputOptions } from "../../helpers/helpers";
import SelectCurrencies from "../SelectCurrency/SelectCurrency";

const Form = ({ onSelectCurrency }) => {
  const [criptoCurrencies, setCriptoCurrencies] = useState([]);
  const [selectedValues, setSelectedValues] = useState({
    currency: "",
    criptoCurrency: "",
  });
  const [currencyOptions, setCurrencyOptions] = useState(
    getCurrencyInputOptions([])
  );
  const [error, setError] = useState(false);
  //   const [currency, SelectCurrency] = useSelectCurrency(
  //     "Elige tu Moneda",
  //     currencies
  //   );
  //   const [criptoCurrency, SelectCriptoCurrency] = useSelectCurrency(
  //     "Elige tu Criptomoneda",
  //     criptoCurrencies
  //   );

  useEffect(() => {
    getCriptos()
      .then((res) => {
        setCriptoCurrencies(res);
        console.log(res);
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
    console.log(e);
    const { currency, criptoCurrency } = selectedValues;
    const hasSearchValues = ![currency, criptoCurrency].includes("");
    console.log(hasSearchValues);
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
