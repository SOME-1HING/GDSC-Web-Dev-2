import { useState } from "react";

import styled from "styled-components";
const Wrapper = styled.div`
  max-width: 336px;
`;

const NavLinks = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 32px;
`;
const DropdownContainer = styled.div`
  position: relative;
`;
const NavLink = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  cursor: pointer;
`;

const Menu = styled.ul`
  position: absolute;
  list-style-type: none;
  margin: 0;
  top: 100%;
  left: 0;
  width: 150px;
  color: black;

  li {
    margin: 0;
    background-color: white;
  }

  li:hover {
    background-color: lightgray;
  }

  li > button {
    width: 100%;
    height: 100%;
    text-align: left;
    background: none;
    color: inherit;
    border: none;
    padding: 5px;
    margin: 0;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    cursor: pointer;
  }
`;

const NavLinksComponent = ({ colorScheme }: { colorScheme: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper>
      <NavLinks>
        <NavLink>Home</NavLink>
        <DropdownContainer
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <NavLink>
            Products{" "}
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L6 9L10 5"
                stroke={`var(--${colorScheme}-text)`}
                stroke-width="1.15"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </NavLink>
          <Menu
            style={{
              display: isHovered ? "block" : "none",
            }}
          >
            <li>
              <button>Product 1</button>
            </li>
            <li>
              <button>Product 2</button>
            </li>
            <li>
              <button>Product 3</button>
            </li>
          </Menu>
        </DropdownContainer>
        <NavLink>About</NavLink>
        <NavLink>Pricing</NavLink>
      </NavLinks>
    </Wrapper>
  );
};

export default NavLinksComponent;
