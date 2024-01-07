import styled from "styled-components";
import NavLinksComponent from "../components/NavLinks";
import SearchBox from "../components/SearchBox";
import Logo from "../components/Logo";
import BuyButton from "../components/BuyButton";

const Wrapper = styled.div`
  width: 1440px;
  height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 200px;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 44px;
`;

const NavBar4 = ({ colorScheme }: { colorScheme: string }) => {
  return (
    <Wrapper>
      <Container
        style={{
          backgroundColor: `var(--${colorScheme}-background)`,
          color: `var(--${colorScheme}-text)`,
          fill: `var(--${colorScheme}-fill)`,
        }}
      >
        <NavLeft>
          <Logo colorScheme={colorScheme} />
          <SearchBox colorScheme={colorScheme} />
        </NavLeft>
        <NavRight>
          <NavLinksComponent colorScheme={colorScheme} />
          <BuyButton colorScheme={colorScheme} />
        </NavRight>
      </Container>
    </Wrapper>
  );
};

export default NavBar4;
