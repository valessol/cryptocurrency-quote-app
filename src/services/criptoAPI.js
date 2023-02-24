export const getCurrencyData = async () => {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
  const response = await fetch(url);
  const data = await response.json();
  return data.Data;
};

export const getCotization = async ({ currency, criptoCurrency }) => {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrency}&tsyms=${currency}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.DISPLAY[criptoCurrency][currency];
};
