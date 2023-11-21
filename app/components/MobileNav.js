"use client";
import styled from "styled-components";
import { navLinks } from "./navbarData";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Nav_Text } from "../_ui/styles/dSystem/textSystem";
import { useContext } from "react";
import { NavContext } from "../context/Context";

export default function MobileNav() {
  const pathname = usePathname();

  // destructure context values we're using
  const { toggleMenu, handleToggle } = useContext(NavContext);

  return (
    <>
      {toggleMenu && (
        <Wrapper_NAV>
          <Close onClick={handleToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          </Close>

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
        </Wrapper_NAV>
      )}
    </>
  );
}

const Wrapper_NAV = styled.nav`
  display: none;

  @media (max-width: 480px) {
    display: flex;
  }
`;

const Nav_UL = styled.ul`
  padding-top: 90px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(16px);
  gap: 30px;

  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;
`;
const Nav_LI = styled.li`
  display: flex;
  align-items: center;
  width: 100%;

  .active {
    border-right: 6px solid #fff;
  }

  a {
    text-decoration: none;
  }

  span {
    font-weight: bolder;
  }
`;

const Number_Li = styled.span`
  font-weight: bolder;
`;

const Close = styled.span`
  z-index: 3;
  padding-right: 30px;
`;
