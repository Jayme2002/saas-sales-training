import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { getCurrentUser } from '../services/auth';

const ProfileContainer = styled(motion.div)`
  padding: 20px;
`;

const ProfileInfo = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
`;

const ProfileTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
`;

const ProfileField = styled.p`
  margin-bottom: 10px;
`;

const Profile = () => {
  const user = getCurrentUser();

  return (
    <>
      <Navigation />
      <ProfileContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProfileInfo>
          <ProfileTitle>User Profile</ProfileTitle>
          <ProfileField><strong>Username:</strong> {user.user.username}</ProfileField>
          <ProfileField><strong>Email:</strong> {user.user.email}</ProfileField>
        </ProfileInfo>
      </ProfileContainer>
    </>
  );
};

export default Profile;