"use client";
import styled from "styled-components";
import { H2 } from "./styles/dSystem/textSystem";

export const MainContainer = styled.main`
  // trascient props - notice the $
  position: relative;
  background-image: url(${(props) => props.$desktopImage});
  min-height: 100vh;
  background-size: cover;
  background-position: center;

  /* content on the home page */
  .home {
    padding-top: 300px;

    @media (max-width: 768px) {
      padding-top: 200px;
    }

    @media (max-width: 480px) {
      padding-top: 100px;
    }
  }

  @media (max-width: 768px) {
    background-image: url(${(props) => props.$tabletImage});
  }
  @media (max-width: 480px) {
    background-image: url(${(props) => props.$mobileImage});
  }
`;

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  padding-top: 300px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 40px;
    padding-bottom: 30px;
    padding-top: 200px;
  }

  @media (max-width: 480px) {
    padding-top: 100px;
  }
`;

export const GridItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 2px solid blue;

  @media (max-width: 480px) {
    /* align-items: flex-start; */
  }
`;

export const Image_Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  padding-left: 40px;

  @media (max-width: 480px) {
    align-items: center;
    padding-left: 0;
  }
`;

export const Text_Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 60%;
  border: 1px solid red;
  color: #fff;

  @media (max-width: 768px) {
    width: 90%;
    justify-content: center;
    align-items: center;
  }
`;
