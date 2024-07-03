import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const TrainingContainer = styled.div`
  // Add your training modules styling here
`;

const TrainingModules = () => {
  return (
    <>
      <Navigation />
      <TrainingContainer>
        <h1>Training Modules</h1>
        <section>
          <h2>Available Courses</h2>
          {/* List of courses or modules */}
        </section>
        <section>
          <h2>Your Progress</h2>
          {/* Progress tracking component */}
        </section>
      </TrainingContainer>
    </>
  );
};

export default TrainingModules;