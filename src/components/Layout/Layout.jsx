import React, { useEffect, useState } from "react";
import { Container, Heading, CriptoImage } from "./styles";
import image from "../../assets/imagen-criptos.png";
import { CriptoData, Form, Spinner } from "../";
import { getCotization } from "../../services/criptoAPI";

const Layout = () => {
  const [selectedCurrencies, setSelectedCurrencies] = useState({});
  const [cotization, setCotization] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasCurrenciesSelected = Boolean(
      Object.keys(selectedCurrencies).length
    );
    if (hasCurrenciesSelected) {
      setLoading(true);
      setCotization({});
      getCotizationData()
        .then((res) => setCotization(res))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [selectedCurrencies]);

  const getCotizationData = async () => await getCotization(selectedCurrencies);

  return (
    <Container>
      <CriptoImage src={image} alt="imagenes de criptomonedas" />
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Form onSelectCurrency={setSelectedCurrencies} />
        {loading && <Spinner />}
        {!!Object.keys(cotization).length && <CriptoData data={cotization} />}
      </div>
    </Container>
  );
};

export default Layout;
