import { useState } from "react";
import styled from "styled-components";
import NavBar1 from "./presets/NavBar1";
import NavBar2 from "./presets/NavBar2";
import NavBar3 from "./presets/NavBar3";
import NavBar4 from "./presets/NavBar4";
import NavBar5 from "./presets/NavBar5";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const SettingsContainer = styled.div`
  padding: 14px 32px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 8px;
`;

const NavBarContainer = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormRows = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
`;

const StyledSelect = styled.select`
  width: 200px;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
  }
`;

function App() {
  const [preset, setPreset] = useState("NavBar1");
  const [colorScheme, setColorScheme] = useState("color-scheme1");

  const navBars: { [key: string]: JSX.Element } = {
    NavBar1: <NavBar1 colorScheme={colorScheme} />,
    NavBar2: <NavBar2 colorScheme={colorScheme} />,
    NavBar3: <NavBar3 colorScheme={colorScheme} />,
    NavBar4: <NavBar4 colorScheme={colorScheme} />,
    NavBar5: <NavBar5 colorScheme={colorScheme} />,
  };

  return (
    <Wrapper>
      <Container>
        <SettingsContainer>
          <Form>
            <FormRows>
              Preset:
              <StyledSelect onChange={(e) => setPreset(e.target.value)}>
                <option value="NavBar1">Navbar 1</option>
                <option value="NavBar2">Navbar 2</option>
                <option value="NavBar3">Navbar 3</option>
                <option value="NavBar4">Navbar 4</option>
                <option value="NavBar5">Navbar 5</option>
              </StyledSelect>
            </FormRows>
            <FormRows>
              Color Scheme:
              <StyledSelect onChange={(e) => setColorScheme(e.target.value)}>
                <option value="color-scheme1">Color Scheme 1</option>
                <option value="color-scheme2">Color Scheme 2</option>
                <option value="color-scheme3">Color Scheme 3</option>
                <option value="color-scheme4">Color Scheme 4</option>
                <option value="color-scheme5">Color Scheme 5</option>
                <option value="color-scheme6">Color Scheme 6</option>
              </StyledSelect>
            </FormRows>
          </Form>
        </SettingsContainer>
        <NavBarContainer>{navBars[preset]}</NavBarContainer>
      </Container>
    </Wrapper>
  );
}

export default App;
