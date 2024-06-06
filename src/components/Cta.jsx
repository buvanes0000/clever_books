import React from 'react';
import styled from 'styled-components';
import { FaRocket } from 'react-icons/fa';

const CTASection = styled.section`
  background: linear-gradient(135deg, #ff6b6b, #ffa500);
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: linear-gradient(to right, #a4445c, #c26d80);


  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const CTATitle = styled.h2`
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const CTAButton = styled.a`
  background: #fff;
  color: #ff6b6b;
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 30px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background: #ff6b6b;
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 12px 25px;
  }
`;

const RocketIcon = styled(FaRocket)`
  margin-right: 10px;
`;

const CTAContainer = () => {
  return (
    <CTASection>
      <CTATitle>Grow Faster Than You Think</CTATitle>
      <CTADescription>
        Embark on an unforgettable adventure with our captivating children's books!
        Unlock your child's imagination and foster a lifelong love for reading.
        Get ready for an exciting journey filled with colorful illustrations,
        engaging stories, and interactive elements that will spark their curiosity
        and creativity.
      </CTADescription>
      <CTAButton href="#" target="_blank" rel="noopener noreferrer">
        <RocketIcon />
        Explore Now
      </CTAButton>
    </CTASection>
  );
};

export default CTAContainer;