import { currencies } from "../constants/currencies";

export const getCurrencyInputOptions = (criptoValues) => [
  { id: "currency", label: "Elige tu Moneda", values: currencies },
  {
    id: "criptoCurrency",
    label: "Elige tu Criptomoneda",
    values: criptoValues,
  },
];
