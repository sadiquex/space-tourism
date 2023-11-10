"use client";
import styled from "styled-components";
import { H2 } from "./styles/dSystem/textSystem";
import Image from "next/image";

export default function MainContainer({
  desktopImage,
  mobileImage,
  //   tabletImage,
  children,
}) {
  return (
    <Wrapper
      desktopImage={desktopImage}
      mobileImage={mobileImage}
      //   tabletImage={tabletImage}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  /* background: url(image) no-repeat center fixed; */
  background: url(${(props) => props.desktopImage}) no-repeat center fixed;
  background-size: cover;
  position: relative;
  z-index: -1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 480px) {
    /* background: url("/assets/home/background-home-mobile.jpg"); */
    width: 100%;
    height: auto;
    background: url(${(props) => props.mobileImage}) no-repeat center fixed;
    background-size: cover;
    position: relative;
  }


`;
