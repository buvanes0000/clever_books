import React from 'react';
import footerImage from "../assets/night_hill.gif"
import styled, { keyframes } from 'styled-components';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const FooterSection = styled.footer`
background: linear-gradient(to right, #a4445c, #7f2b44);


  color: #fff;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const CompanyDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 40px;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;

  &:hover .contact-icon {
    animation: ${bounce} 0.5s infinite;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const ContactIcon = styled.div`
  font-size: 1.5em;
  margin-right: 10px;
  transition: transform 0.3s;
`;

const ContactText = styled.span`
  font-size: 1.1em;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${footerImage});
  background-size: cover;
  background-position: center;
  opacity: 0.3;
  
`;

const Footer = () => {
  return (
    <FooterSection>
      <Background />
      <CompanyDescription>
        At Tiny Tales, we believe in the power of storytelling to spark
        imagination, impart valuable lessons, and foster a love for reading in
        children. Our mission is to create captivating and engaging books that
        not only entertain but also enrich young minds.
      </CompanyDescription>
      <ContactInfo>
        <ContactItem>
          <ContactIcon className="contact-icon">
            <FaMapMarkerAlt />
          </ContactIcon>
          <ContactText>123 Main Street, Garden city, Karnataka</ContactText>
        </ContactItem>
        <ContactItem>
          <ContactIcon className="contact-icon">
            <FaEnvelope />
          </ContactIcon>
          <ContactText>info@CleverBooks.com</ContactText>
        </ContactItem>
        <ContactItem>
          <ContactIcon className="contact-icon">
            <FaPhoneAlt />
          </ContactIcon>
          <ContactText>(+91) 83245 09876</ContactText>
        </ContactItem>
      </ContactInfo>
    </FooterSection>
  );
};

export default Footer;