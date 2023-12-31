"use client";
import styled from "styled-components";
import { H1, H5, Body_Text } from "./_ui/styles/dSystem/textSystem";
import {
  GridContainer,
  GridItem,
  Text_Content,
  MainContainer,
} from "./_ui/uiContainers";
import Link from "next/link";

// the home page '/'
export default function Home() {
  return (
    <MainContainer
      $desktopImage="/assets/home/background-home-desktop.jpg"
      $mobileImage="/assets/home/background-home-mobile.jpg"
      $tabletImage="/assets/home/background-home-tablet.jpg"
    >
      <GridContainer className="home">
        <GridItem>
          <Text_Content>
            <H5>SO, YOU WANT TO TRAVEL TO</H5>
            <H1>SPACE</H1>
            <Body_Text>
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </Body_Text>
          </Text_Content>
        </GridItem>

        <GridItem>
          <Text_Content>
            <Link href="/destination">
              <ExploreCircle>EXPLORE</ExploreCircle>
            </Link>
          </Text_Content>
        </GridItem>
      </GridContainer>
    </MainContainer>
  );
}

const ExploreCircle = styled.p`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #fff;
  color: #000;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  box-shadow: 0 0 0 0 rgba(#fff, 1);
  transform: scale(1);
  animation: pulse 2s infinite;

  &:hover {
    animation: pulse 1.5s infinite; /* Animate for 1.5 seconds on hover */
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 60px rgba(255, 255, 255, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
`;
