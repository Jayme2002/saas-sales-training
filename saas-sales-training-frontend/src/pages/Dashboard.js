import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';


const DashboardContainer = styled(motion.div)`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
`;

const DashboardContent = styled.div`
  padding: 20px;
`;

const DashboardTitle = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.primary};
`;

const Dashboard = () => {
  return (
    <DashboardContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <DashboardContent>
        <DashboardTitle>Welcome to Your Dashboard</DashboardTitle>
        {/* Add more dashboard content here */}
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;