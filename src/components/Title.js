import React from 'react';
import styled from "styled-components";


const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333333;
`;

const Subtitle = styled.p`
  color: #4F4F4F;
  font-size: 0.875rem;
  font-weight: 500;
`

const Title = () => {
    return (
        <div className='flex justify-between px-9 mb-4 mt-6 items-center'>
            <Heading>Stays in Finland</Heading>
            <Subtitle>12+ stays</Subtitle>
        </div>
    );
};

export default Title;