import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { FiHeart, FiEye, FiActivity, FiUsers, FiDollarSign } from 'react-icons/fi'; // Import icons from React Icons

const Section = styled.section`
  padding: 60px 20px;
  background: linear-gradient(to right, #a4445c, #7f2b44);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #fcd4c4;
`;

const IssuesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const IssueCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #bb565d;
  border-radius: 10px;
  padding: 20px;
  height: 300px;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .icon {
    font-size: 2em;
    margin-bottom: 10px;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  .icon:hover {
    color: #fff;
  }

  .icon-heart:hover {
    transform: rotate(360deg);
  }

  .icon-eye:hover {
    transform: scale(1.2);
  }

  .icon-activity:hover {
    transform: rotate(-360deg);
  }

  .icon-users:hover {
    box-shadow: 0 0 50px 0px #fff;
  }

  .icon-dollar:hover {
    transform: translateY(-10px);
  }
`;

const IssueTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const IssueDescription = styled.p`
  font-size: 1em;
`;

const Problems = () => {
  const issues = [
    {
      title: 'Engaging Educational Content',
      description: 'Providing interactive and engaging content to make learning enjoyable and effective for students.',
      icon: <FiHeart className="icon icon-heart" />
    },
    {
      title: 'Accessibility',
      description: 'Ensuring educational materials are accessible to all students, including those with special needs.',
      icon: <FiEye className="icon icon-eye" />
    },
    {
      title: 'Keeping Up with Technology',
      description: 'Integrating modern technology like AR and VR to enhance traditional learning methods.',
      icon: <FiActivity className="icon icon-activity" />
    },
    {
      title: 'Parental Involvement',
      description: 'Creating tools and resources that encourage and facilitate parental involvement in children’s education.',
      icon: <FiUsers className="icon icon-users" />
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'Offering affordable educational resources without compromising on quality.',
      icon: <FiDollarSign className="icon icon-dollar" />
    }
  ];

  return (
    <Section>
      <Title>Problems We Solve</Title>
      <IssuesContainer>
        {issues.map((issue, index) => (
          <Fade bottom key={index}>
            <IssueCard>
              <div>{issue.icon}</div>
              <IssueTitle>{issue.title}</IssueTitle>
              <IssueDescription>{issue.description}</IssueDescription>
            </IssueCard>
          </Fade>
        ))}
      </IssuesContainer>
    </Section>
  );
};

export default Problems;
