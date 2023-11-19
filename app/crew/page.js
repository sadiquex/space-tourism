import { GridContainer, GridItem, MainContainer } from "../_ui/uiContainers";

// import crewImage from "/assets/crew/background-crew-desktop.jpg";

export default function Crew() {
  return (
    <MainContainer
      // trascient props - notice the $
      $desktopImage="/assets/crew/background-crew-desktop.jpg"
      $mobileImage="/assets/crew/background-crew-mobile.jpg"
      $tabletImage="/assets/crew/background-crew-tablet.jpg"
    >
      <GridContainer>
        <GridItem>text here</GridItem>
        <GridItem>commander here</GridItem>
      </GridContainer>
    </MainContainer>
  );
}
