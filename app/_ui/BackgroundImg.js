"use client";
import styled from "styled-components";

export const BackgroundImg = styled.div`
  height: 100vh;
  width: 100%;
  // trascient props
  background: url(${({ $desktopImage }) => $desktopImage}) no-repeat center
    fixed;
  /* background-size: cover; */
  z-index: -1;

  @media (max-width: 768px) {
    width: auto;
    // trascient props - notice the $
    background: url(${(props) => props.$tabletImage}) no-repeat center fixed;
    background-size: cover;
    height: 100vh;
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
    // trascient props - notice the $
    background: url(${(props) => props.$mobileImage}) no-repeat center fixed;
    background-size: cover;
    position: relative;
    border: 2px solid red;
  }
`;
