"use client";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import { navLinks } from "./navbarData";
import { NavContextProvider, NavContext } from "../context/Context";
import { useContext } from "react";

import { Nav_Text } from "../_ui/styles/dSystem/textSystem";
import Link from "next/link";
import MobileNav from "./MobileNav";
import HamburgerIcon from "./HamburgerIcon";
export default function Navbar() {
  const pathname = usePathname();

  return (
    <Wrapper>
      <LineXLogo>
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </Link>
        {/* the line in between */}
        <Line />
      </LineXLogo>
      <NavContextProvider>
        <HamburgerIcon />
        {/* mobile nav */}
        <MobileNav />
      </NavContextProvider>

      <Nav_UL>
        {navLinks.map((link, i) => (
          <Nav_LI
            key={i}
            // if our pathname is the same as link.link, add active class
            className={pathname === link.link ? "active" : ""}
          >
            {/* each nav link */}
            <Link href={link.link}>
              <Nav_Text>
                <Number_Li>{link.number}</Number_Li>
                {" " + link.name}
              </Nav_Text>
            </Link>
          </Nav_LI>
        ))}
      </Nav_UL>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: absolute;
  height: 96px;
  width: 100%;
  top: 20px;
  display: flex;
  align-items: center;
  z-index: 5;

  @media (max-width: 768px) {
    top: 0;
    /* border: 1px solid rebeccapurple; */
  }
`;

const LineXLogo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

const Line = styled.hr`
  width: 40%;
  position: absolute;
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: #484b54;
  z-index: 2;
  transform: translateX(20%);

  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav_UL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 96px;
  background: rgba(
    255,
    255,
    255,
    0.2
  ); // Make sure this color has an opacity of less than 1
  backdrop-filter: blur(8px); // This be the blur
  /* background: pink; */
  gap: 30px;

  /* active LI elements */
  .active {
    border-bottom: 3px solid #fff;
  }

  @media (max-width: 768px) {
    max-width: 768px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const Nav_LI = styled.li`
  display: flex;
  align-items: center;
  height: 100%;

  &:hover {
    /* put on active item */
    border-bottom: 3px solid #8a8b90;
  }

  a {
    text-decoration: none;
  }

  span {
    font-weight: bolder;
  }
`;

const Number_Li = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;
