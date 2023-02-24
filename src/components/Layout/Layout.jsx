import React, { useState } from "react";
import { Container, Heading, CriptoImage } from "./styles";
import image from "../../assets/imagen-criptos.png";
import { Form } from "../";

const Layout = () => {
  const [selectedCurrencies, setSelectedCurrencies] = useState([]);
  console.log({ selectedCurrencies });
  return (
    <Container>
      <CriptoImage src={image} alt="imagenes de criptomonedas" />
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Form onSelectCurrency={setSelectedCurrencies} />
      </div>
    </Container>
  );
};

export default Layout;
