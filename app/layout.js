import { Bellefair, Barlow_Condensed } from "next/font/google";
import StyledComponentsRegistry from "./_lib/registry";
import GlobalStyles from "./_ui/styles/globals";
import Navbar from "./components/Navbar";

// fonts should be in the head

export const metadata = {
  title: "Space Tourism",
  description: "Created by Ibrahim Saddik",
};

export const bellefair = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bellefair",
  display: "swap",
});

export const barlow = Barlow_Condensed({
  weight: ["400", "700"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bellefair.variable} ${barlow.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {/* <Navbar /> */}
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
