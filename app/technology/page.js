"use client";
import styled from "styled-components";
import { useContext, useState } from "react";
import {
  GridContainer,
  GridItem,
  Image_Content,
  MainContainer,
  Text_Content,
} from "../_ui/uiContainers";
import data from "./../data.json";
import { Body_Text, H2, H3, H5 } from "../_ui/styles/dSystem/textSystem";
import Image from "next/image";

export default function Technology() {
  const [technology] = useState(data.technology);
  const [value, setValue] = useState(0);

  const { name, images, description } = technology[value];

  return (
    <MainContainer
      // trascient props - notice the $
      $desktopImage="/assets/technology/background-technology-desktop.jpg"
      $mobileImage="/assets/technology/background-technology-mobile.jpg"
      $tabletImage="/assets/technology/background-technology-tablet.jpg"
    >
      <GridContainer>
        <GridItem className="technology-column-layout">
          <Tabs_UL>
            {data.technology.map((_, i) => (
              <Tab_LI
                onClick={() => setValue(i)}
                key={i}
                className={i === value ? "active" : ""}
              >
                {i + 1}
              </Tab_LI>
            ))}
          </Tabs_UL>
          <Text_Content className="technology-text">
            <H5>
              <span>03</span> SPACE LAUNCH 101
            </H5>
            <H3>{name}</H3>
            <Body_Text>{description}</Body_Text>
          </Text_Content>
        </GridItem>
        {/* image */}
        <GridItem>
          <Image_Content className="technology-image">
            <DesktopTechnologyImage
              src={`/${images.portrait}`}
              alt={name}
              width={515}
              height={527}
              priority
            />
          </Image_Content>
        </GridItem>
      </GridContainer>
    </MainContainer>
  );
}

const Tabs_UL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;

  .active {
    color: #000;
    background: #fff;
  }

  @media (max-width: 768px) {
    width: 60%;
    flex-direction: row;
  }
`;

const Tab_LI = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #999;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  &:hover {
    border: 2px solid #fff;
  }
`;

const DesktopTechnologyImage = styled(Image)`
  @media (max-width: 768px) {
    /* display: none; */
  }
`;
const MobileTechnologyImage = styled(Image)`
  display: none;
  @media (max-width: 768px) {
    /* object-fit: contain; */
    position: center;
    display: block;
  }

  @media (max-width: 480px) {
    /* object-fit: contain; */
    display: block;
    width: 100%;
    height: 375px;
  }
`;
