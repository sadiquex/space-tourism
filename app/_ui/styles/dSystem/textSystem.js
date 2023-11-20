"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

/* 
This file defines all the text styles
*/

// titles
export const H1 = styled.h1`
  font-family: var(--font-bellefair), sans-serif;
  font-size: 150px;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 56px;
  }
`;

export const H2 = styled.h2`
  font-family: var(--font-bellefair), sans-serif;
  font-size: 100px;
  color: #fff;
  text-transform: uppercase;
  @media (max-width: 480px) {
    font-size: 56px;
  }
`;

export const H3 = styled.h3`
  font-family: var(--font-bellefair), sans-serif;
  font-size: 56px;
  text-transform: uppercase;
  color: #fff;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const H4 = styled.h4`
  font-family: var(--font-bellefair), sans-serif;
  font-size: 32px;
  color: #4f525a;
  text-transform: uppercase;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const H5 = styled.h5`
  font-family: var(--font-barlow-condensed), sans-serif;
  font-size: 28px;
  letter-spacing: 4.75;
  white-space: nowrap;
  color: #fff;

  span {
    color: #4f525a;
    font-weight: bolder;
  }
`;

export const SubHeading_1 = styled.p`
  font-family: var(--font-bellefair);
  font-size: 28px;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const SubHeading_2 = styled.p`
  font-family: var(--font-barlow-condensed), sans-serif;
  font-size: 14px;
  letter-spacing: 2.35;
  color: #d0d6f9;
`;

export const Nav_Text = styled.p`
  font-family: var(--font-barlow-condensed), sans-serif;
  font-size: 24px;
  letter-spacing: 2.7;
  white-space: nowrap;
  color: #fff;
  text-transform: uppercase;
`;

export const Heading_Text = styled.p`
  font-family: var(--font-barlow-condensed), sans-serif;
  font-size: 16px;
  letter-spacing: 2.7;
  color: #fff;
`;

export const Body_Text = styled(motion.p)`
  font-family: var(--font-barlow), sans-serif;
  font-size: 16px;
  letter-spacing: 2.7;
  line-height: 1.8;
  color: #d0d6f9;
  /* font-weight: bolder; */

  @media (max-width: 768px) {
    text-align: center;
  }
`;
