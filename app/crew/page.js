"use client";
import styled from "styled-components";
import { Body_Text, H3, H4, H5 } from "../_ui/styles/dSystem/textSystem";
import {
  GridContainer,
  GridItem,
  Image_Content,
  MainContainer,
  Text_Content,
} from "../_ui/uiContainers";
import Image from "next/image";
import { useState } from "react";
import data from "./../data.json";

export default function Crew() {
  const [crew] = useState(data.crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = crew[value];

  return (
    <MainContainer
      // trascient props - notice the $
      $desktopImage="/assets/crew/background-crew-desktop.jpg"
      $mobileImage="/assets/crew/background-crew-mobile.jpg"
      $tabletImage="/assets/crew/background-crew-tablet.jpg"
    >
      <GridContainer className="crew">
        {/* text */}
        <GridItem>
          <Text_Content className="crew-text">
            <H5>
              <span>02</span> MEET THE CREW
            </H5>
            <Role_x_Name>
              <H4>{role}</H4>
              <H3>{name}</H3>
              <Body_Text>{bio}</Body_Text>
            </Role_x_Name>
            <Tabs_UL>
              {data.crew.map((_, i) => (
                <Dot
                  onClick={() => setValue(i)}
                  key={i}
                  className={i === value ? "active" : ""}
                />
              ))}
            </Tabs_UL>
          </Text_Content>
        </GridItem>
        {/* image */}
        <GridItem>
          <Image_Content>
            <CrewImage
              src={`${images.webp}`}
              alt=""
              width={568}
              height={712}
              priority
            />
          </Image_Content>
        </GridItem>
      </GridContainer>
    </MainContainer>
  );
}

const CrewImage = styled(Image)`
  /* desktop height specified in props */
  margin: 0 auto;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 456px;
    height: 572px;
  }
  @media (max-width: 480px) {
    width: 327px;
    height: 223px;
  }
`;

const Role_x_Name = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const Tabs_UL = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 50%;

  .active {
    background: #fff;
  }
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #fff;
  &:hover {
    background: #8a8b90;
    border: 0;
  }
`;
