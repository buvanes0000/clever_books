import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/autoplay';
import { EffectCreative, Autoplay } from 'swiper/modules';

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

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
  
`;

const ReviewCard = styled.div`


  border-radius: 10px 10px 20px 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: relative;
  max-width: 400px;
  margin: auto;

  @media (max-width: 768px) {
    min-width: 80%;
    margin: 0 10px;
  }
`;

const ReviewText = styled.p`
  font-size: 1em;
  margin: 20px 0;
  line-height: 1.5;
  color: #fcd4c4;
`;

const Reviewer = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 10px;
 
`;

const Reviews = () => {
  const reviews = [
    {
      text: "This storybook has brought so much joy to our bedtime routine. The tales are enchanting and capture my child's imagination every night.",
      reviewer: "Sarah Thompson, Mother of two"
    },
    {
      text: "The illustrations are vibrant and engaging. My students love the interactive elements and can't wait for story time.",
      reviewer: "Mrs. Johnson, Kindergarten Teacher"
    },
    {
      text: "Highly recommend this book for its wonderful stories and beautiful illustrations. It's a delight for children and parents alike.",
      reviewer: "David Brown, Father of three"
    },
    {
      text: "These stories have become a favorite in our household. They're entertaining and teach valuable lessons.",
      reviewer: "Emily White, Parent"
    },
    {
      text: "Fantastic book! The stories are so creative, and my child loves discovering the hidden surprises on each page.",
      reviewer: "Chris Johnson, Parent"
    },
    {
      text: "The customer support is outstanding. They were very helpful in assisting us with our purchase and answered all our questions.",
      reviewer: "Patricia Lee, Grandmother"
    },
    {
      text: "The book's intuitive design makes it accessible for children of all ages. It's a great addition to our family library.",
      reviewer: "Robert Wilson, Parent"
    }
  ];
  

  return (
    <Section>
      <Title>Customer Reviews</Title>
      <Description>Our customers love Clever Books for its ease of use, powerful features, and excellent customer support. See what they have to say about Clever Books.</Description>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard>
              <ReviewText>{review.text}</ReviewText>
              <Reviewer>{review.reviewer}</Reviewer>
            </ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Reviews;
