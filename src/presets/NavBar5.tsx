import styled from "styled-components";
import NavLinksComponent from "../components/NavLinks";
import SearchBox from "../components/SearchBox";
import Logo from "../components/Logo";

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
`;

const NavRight = styled.div``;

const NavBar5 = ({ colorScheme }: { colorScheme: string }) => {
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
          <NavLinksComponent colorScheme={colorScheme} />
        </NavLeft>
        <Logo colorScheme={colorScheme} />
        <NavRight>
          <SearchBox colorScheme={colorScheme} />
        </NavRight>
      </Container>
    </Wrapper>
  );
};

export default NavBar5;
