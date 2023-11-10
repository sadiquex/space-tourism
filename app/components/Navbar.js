"use client";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Wrapper>
      <Nav_UL>
        the Wrapper
        <hr />
      </Nav_UL>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: absolute;
  background: pink;
  height: 96px;
  width: 100%;
  filter: blur(8px);
`;

const Nav_UL = styled.ul``;
