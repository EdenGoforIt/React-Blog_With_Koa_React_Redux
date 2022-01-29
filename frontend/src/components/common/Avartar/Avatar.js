import styled from 'styled-components';
import AvatarWrapper from './AvatarWrapper';
import React from 'react';
import profile from '../../../assets/profile.jpg';

const AvatarImage = styled.img`
  display: block;
  border-radius: 50%;
  width: 50px;
  height: auto;
`;

const Avatar = ({ size, username }) => {
  return (
    <AvatarWrapper size={size}>
      <AvatarImage src={profile} alt={username} />
    </AvatarWrapper>
  );
};

export default Avatar;
