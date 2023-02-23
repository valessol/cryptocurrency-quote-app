import React from "react";
import { Container, Heading, CriptoImage } from "./styles";
import image from "../../assets/imagen-criptos.png";
import { Form } from "../";

const Layout = () => {
  return (
    <Container>
      <CriptoImage src={image} alt="imagenes de criptomonedas" />
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Form />
      </div>
    </Container>
  );
};

export default Layout;
