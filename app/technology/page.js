import MainContainer from "../_ui/uiContainers";

export default function Technology() {
  return (
    <MainContainer
      // trascient props - notice the $
      $desktopImage="/assets/technology/background-technology-desktop.jpg"
      $mobileImage="/assets/technology/background-technology-mobile.jpg"
      $tabletImage="/assets/technology/background-technology-tablet.jpg"
    >
      technology page
    </MainContainer>
  );
}
