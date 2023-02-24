import styled from "@emotion/styled";

export const Text = styled.p`
  font-size: 18px;
  color: #fff;
  font-family: "Lato", sans-serif;
  text-align: ${({ align }) => (align ? align : "inherit")};

  span {
    font-weight: 700;
  }
`;

export const Price = styled(Text)`
  font-size: 24px;
`;

export const Container = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

export const CurrencyImage = styled.img`
  width: 120px;
`;
