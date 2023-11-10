import {
  H1,
  H2,
  H3,
  H4,
  H5,
  SubHeading_2,
  Nav_Text,
} from "./_ui/styles/dSystem/textSystem";
import MainContainer from "./_ui/uiContainers";

export default function Home() {
  return (
    <MainContainer
      desktopImage="/assets/home/background-home-desktop.jpg"
      mobileImage="/assets/home/background-home-mobile.jpg"
      tabletImage="/assets/home/background-home-tablet.jpg"
    >
      <H5>this is the h2</H5>
      <SubHeading_2>some italic text</SubHeading_2>
    </MainContainer>
  );
}
