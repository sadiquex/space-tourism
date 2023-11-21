"use client";
import styled from "styled-components";
import Image from "next/image";
import {
  MainContainer,
  GridContainer,
  GridItem,
  Text_Content,
  Image_Content,
} from "../_ui/uiContainers";
import { AnimatePresence } from "framer-motion";
import {
  Body_Text,
  H1,
  H2,
  H5,
  Nav_Text,
  SubHeading_1,
  SubHeading_2,
} from "../_ui/styles/dSystem/textSystem";
import data from "./../data.json";
import { useState } from "react";

export default function Destination() {
  const [places] = useState(data.destinations);
  const [value, setValue] = useState(0);

  // use the current index to determine the data for the destination
  const { name, images, description, distance, travel } = places[value];

  const gridItemVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <AnimatePresence>
      <MainContainer
        // trascient props - notice the $
        $desktopImage="/assets/destination/background-destination-desktop.jpg"
        $mobileImage="/assets/destination/background-destination-mobile.jpg"
        $tabletImage="/assets/destination/background-destination-tablet.jpg"
      >
        <GridContainer>
          <GridItem
          // variants={gridItemVariants}
          // initial="hidden"
          // animate="visible"
          // exit="hidden"
          >
            <Image_Content>
              <H5>
                <span>01</span> CHOOSE YOUR DESTINATION
              </H5>
              <PlanetImage
                src={`${images.webp}`}
                alt={name}
                width={445}
                height={445}
                priority
              />
            </Image_Content>
          </GridItem>
          <GridItem
          // variants={gridItemVariants}
          // initial="hidden"
          // animate="visible"
          // exit="hidden"
          >
            <Text_Content>
              <Tabs_UL>
                {data.destinations.map((destination, i) => (
                  <TabTitle_LI
                    // the index of places is responsible for changing the state
                    onClick={() => setValue(i)}
                    key={i}
                    className={destination.name === name ? "active" : ""}
                  >
                    <Nav_Text>{destination.name}</Nav_Text>
                  </TabTitle_LI>
                ))}
              </Tabs_UL>
              <H2>{name}</H2>
              <Body_Text
                initial={{
                  opacity: 0,
                  y: 1000,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  delay: "0.5",
                }}
              >
                {description}
              </Body_Text>
              <Line />
              <Distance_Time>
                <Distance>
                  <SubHeading_2>AVG. DISTANCE</SubHeading_2>
                  <SubHeading_1>{distance}</SubHeading_1>
                </Distance>
                <Distance>
                  <SubHeading_2>EST. TRAVEL TIME</SubHeading_2>
                  <SubHeading_1>{travel}</SubHeading_1>
                </Distance>
              </Distance_Time>
            </Text_Content>
          </GridItem>
        </GridContainer>
      </MainContainer>
    </AnimatePresence>
  );
}

const PlanetImage = styled(Image)`
  /* desktop height specified in props */
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 480px) {
    width: 170px;
    height: 170px;
  }
`;

const Tabs_UL = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 80%;

  .active {
    border-bottom: 4px solid #fff;
  }

  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const TabTitle_LI = styled.li`
  padding-bottom: 10px;
  cursor: pointer;

  &:hover {
    /* put on active item */
    border-bottom: 3px solid #8a8b90;
  }
`;

const Line = styled.hr`
  width: 100%;
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: #484b54;
`;
const Distance_Time = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 768px) {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }
`;

const Distance = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
