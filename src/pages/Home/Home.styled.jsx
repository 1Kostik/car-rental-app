import styled from "styled-components";
import bgImg from "../../images/backgraund/rentalfoto.jpg";

export const SectionHero = styled.section`
  max-width: 100%;
  height: 400px;
  padding: 60px 20px;

  margin-left: auto;
  margin-right: auto;
  text-align: left;

  background-color: rgba(18, 20, 23, 0.05);
   background-image:  linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 480px) {
    max-width: 480px;
    padding: 70px 35px;
    background-image:linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(${bgImg});
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 100px 60px;
    background-image: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(${bgImg});
  }

  @media screen and (min-width: 1200px) {
    max-width: 1600px;
    height: 600px;
    padding: 180px 200px;
  }
`;

export const Title = styled.h1`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  color:  #ffffff;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 38px;
  }
`;

export const Description = styled.p`
  max-width: 450px;
  margin-bottom: 25px;
  color:  #ffffff;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
    width: 270px;
    height: 44px;

    border-radius: 12px;
    background-color:#3470ff;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    cursor: pointer;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color:  #0b44cd;
`;