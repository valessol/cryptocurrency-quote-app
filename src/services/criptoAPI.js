export const getCurrencyData = async () => {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
  const response = await fetch(url);
  const data = await response.json();
  return data.Data;
};
