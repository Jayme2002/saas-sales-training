import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const HomeContainer = styled.div`
  background-color: #f5f5f5;
`;

const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 2rem;
  background-image: url('/path-to-your-background-image.jpg');
  background-size: cover;
  background-position: center;
`;

const HeroContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #000;
  color: #fff;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
`;

const LearnMore = styled(Link)`
  display: block;
  margin-top: 1rem;
  color: #000;
`;

const InfoSection = styled.div`
  padding: 4rem 2rem;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navigation />
      <HeroSection>
        <HeroContent>
          <Title>Boost your sales skills with AI</Title>
          <Subtitle>Train on our platform with the most advanced AI-powered sales techniques.</Subtitle>
          <CTAButton to="/signup">Start your free trial</CTAButton>
          <LearnMore to="/about">Learn more about our AI-powered training</LearnMore>
        </HeroContent>
      </HeroSection>
      <InfoSection>
        <h2>Sale Sidekick: Your AI-powered sales assistant</h2>
        <p>A platform for managing global sales teams and training, optimized for companies of any size.</p>
      </InfoSection>
    </HomeContainer>
  );
};

export default Home;