import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
  padding: 14px 32px;
  justify-content: center;
  align-items: center;
`;
const BuyButton = ({ colorScheme }: { colorScheme: string }) => {
  return (
    <Container
      style={{
        backgroundColor: `var(--${colorScheme}-buttonBackground)`,
        color: `var(--${colorScheme}-buttonText)`,
      }}
    >
      Buy Now
    </Container>
  );
};

export default BuyButton;
