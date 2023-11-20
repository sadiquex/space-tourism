"use client";
import { useContext } from "react";
import styled from "styled-components";
import { NavContext } from "../context/Context";

export default function HamburgerIcon() {
  const { handleToggle } = useContext(NavContext);

  return (
    <Hamburger onClick={handleToggle}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
        <g fill="#D0D6F9" fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
        </g>
      </svg>
    </Hamburger>
  );
}

const Hamburger = styled.div`
  display: none;
  padding-right: 30px;

  @media (max-width: 480px) {
    display: block;
  }
`;
