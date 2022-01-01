import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import aboutImg from "../../assets/coding.svg";
const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={aboutImg} alt="AboutImage"></StyledImage>
      <HeaderContainer>
        <h1>
          About developer <span>Mehmet ESEN</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <p>
          This page has been developed by full-stack development learner Mehmet
          ESEN
        </p>
        <p>Created with React...</p>
        <p>
          <h2>Email</h2> xxx.gmail.com
        </p>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
