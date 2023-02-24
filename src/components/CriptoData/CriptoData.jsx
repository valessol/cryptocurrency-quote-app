import { Container, CurrencyImage, Price, Text } from "./styles";

const CriptoData = ({ data }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    data;

  const config = [
    {
      value: PRICE,
      label: "Precio: ",
      Component: Price,
    },
    {
      value: HIGHDAY,
      label: "Valor más alto hoy: ",
      Component: Text,
    },
    {
      value: LOWDAY,
      label: "Valor más bajo hoy: ",
      Component: Text,
    },
    {
      value: CHANGEPCT24HOUR,
      label: "Variación últimas 24hs: ",
      Component: Text,
    },
    {
      value: LASTUPDATE === "Just now" ? "Justo ahora" : LASTUPDATE,
      label: "Última actualización: ",
      Component: Text,
    },
  ];

  return (
    <Container>
      <CurrencyImage src={`${imageUrl}${IMAGEURL}`} />
      <div>
        {config.map(({ label, value, Component }, index) => (
          <Component key={index}>
            {label}
            <span>{value}</span>
          </Component>
        ))}
      </div>
    </Container>
  );
};

export default CriptoData;
