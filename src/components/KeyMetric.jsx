import React from 'react';
import styled from 'styled-components';
import { AiOutlineStar, AiOutlineSmile, AiOutlineRocket, AiOutlineHeart } from 'react-icons/ai';

const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 20px 0;
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #fff;
    transform: translateX(-50%);
  }
  @media (max-width: 768px) {
    &:before {
      left: 20px;
      transform: none;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  position: relative;
  width: 100%;
  &:nth-child(odd) {
    flex-direction: row-reverse;
    text-align: right;
    .content {
      margin-right: 20px;
    }
    .icon {
      margin-left: 20px;
    }
  }
  &:nth-child(even) {
    .content {
      margin-left: 20px;
    }
    .icon {
      margin-right: 20px;
    }
  }
  .icon {
    background: #bb565d;
    border: 2px solid #fff;
    border-radius: 50%;
    padding: 10px;
    font-size: 2em;
    transition: transform 0.3s ease, color 0.3s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
  .content {
    background: #bb565d;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex: 1;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left !important;
    .icon {
      margin: 0 0 10px;
    }
    .content {
      margin: 0 !important;
    }
  }
`;

const MetricTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const MetricDescription = styled.p`
  font-size: 1em;
`;

const KeyMetrics = () => {
  const metrics = [
    {
      title: 'Magical Adventures',
      description: 'Embark on journeys to mystical lands and discover hidden treasures.',
      icon: <AiOutlineStar className="icon" />
    },
    {
      title: 'Smiling Faces',
      description: 'Meet friendly characters who bring joy and laughter.',
      icon: <AiOutlineSmile className="icon" />
    },
    {
      title: 'Rocket Rides',
      description: 'Zoom through space on exciting rocket rides.',
      icon: <AiOutlineRocket className="icon" />
    },
    {
      title: 'Heartwarming Stories',
      description: 'Enjoy tales that warm the heart and inspire kindness.',
      icon: <AiOutlineHeart className="icon" />
    }
  ];

  return (
    <Section>
      <Title>Key Adventures</Title>
      <TimelineContainer>
        {metrics.map((metric, index) => (
          <TimelineItem key={index}>
            <div className="icon">{metric.icon}</div>
            <div className="content">
              <MetricTitle>{metric.title}</MetricTitle>
              <MetricDescription>{metric.description}</MetricDescription>
            </div>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </Section>
  );
};

export default KeyMetrics;
