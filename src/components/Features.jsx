import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image1 from "../assets/illustation.jpg"
import image2 from "../assets/story.jpg"
import image3 from "../assets/element.jpg"

const slideInAnimation = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const FeaturesSection = styled.section`
  padding: 50px 20px;
  background: linear-gradient(to right, #a4445c, #7f2b44);


  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  animation: ${slideInAnimation} 0.5s ease-in-out;
`;

const FeatureTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
  color: #ff6b6b;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const FeatureDescription = styled.p`
  max-width: 600px;
  font-size: 1.2em;
  line-height: 1.6;
  color: #333;
  text-align: center;
`;

const FeatureImage = styled.img`
  max-width: 300px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.5em;
  color: #ff6b6b;
  margin: 0 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const features = [
  {
    title: 'Colorful Illustrations',
    description:
      'Experience vibrant and captivating illustrations that bring the story to life! Our talented artists have crafted every page with love and care, ensuring a visually stunning journey for your little ones.',
    image: image1,
  },
  {
    title: 'Engaging Stories',
    description:
      'Get ready for exciting adventures and heartwarming tales! Our stories are carefully crafted to capture the imagination of children while imparting valuable lessons and promoting positive values.',
    image: image2,
  },
  {
    title: 'Interactive Elements',
    description:
      "Encourage active participation with interactive elements! Our books include activities, games, and puzzles that make reading even more fun and engaging for your little ones.",
    image: image3,
  },
];

const Features = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const handleNextFeature = () => {
    setCurrentFeature((prevFeature) => (prevFeature + 1) % features.length);
  };

  const handlePrevFeature = () => {
    setCurrentFeature(
      (prevFeature) => (prevFeature - 1 + features.length) % features.length
    );
  };

  return (
    <FeaturesSection>
      <h2 style={{fontSize:"3rem"}}>Features</h2>
      <FeatureContainer>
        <FeatureTitle>{features[currentFeature].title}</FeatureTitle>
        <FeatureImage
          src={features[currentFeature].image}
          alt={features[currentFeature].title}
        />
        <FeatureDescription>{features[currentFeature].description}</FeatureDescription>
      </FeatureContainer>
      <ButtonContainer>
        <Button onClick={handlePrevFeature}>
          <FaArrowLeft />
        </Button>
        <Button onClick={handleNextFeature}>
          <FaArrowRight />
        </Button>
      </ButtonContainer>
    </FeaturesSection>
  );
};

export default Features;