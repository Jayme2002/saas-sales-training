import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const LandingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: ${props => props.theme.colors.background};
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 40px;
  text-align: center;
  max-width: 600px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const LandingPage = () => {
  return (
    <LandingContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Welcome to SalesIdeKick</Title>
      <Subtitle>
        Boost your sales skills with our gamified training platform.
        Learn, practice, and excel in the art of selling.
      </Subtitle>
      <ButtonContainer>
        <Button as={Link} to="/login">
          Login
        </Button>
        <Button as={Link} to="/register">
          Sign Up
        </Button>
      </ButtonContainer>
    </LandingContainer>
  );
};

export default LandingPage;