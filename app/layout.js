import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";
import StyledComponentsRegistry from "./_lib/registry";
import GlobalStyles from "./_ui/styles/globals";
import Navbar from "./components/Navbar";

// fonts should be in the head

export const metadata = {
  title: "Space Tourism | Sadique",
  description: "Created by Ibrahim Saddik",
};

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bellefair",
});

const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow-condensed",
});

const barlow_regular = Barlow({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barlow",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bellefair.variable} ${barlow_condensed.variable} ${barlow_regular.variable}`}
    >
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
