import styled from 'styled-components';
import AvatarWrapper from './AvatarWrapper';
import React from 'react';
import profile from '../../../assets/profile.jpg';
import { useNavigate } from 'react-router-dom';

const AvatarImage = styled.img`
  display: block;
  border-radius: 50%;
  width: 50px;
  height: auto;
`;

const Avatar = ({ size, username, to, ...rest }) => {
  const navigate = useNavigate();

  const onClick = (e) => {
    if (to) {
      navigate(to);
    }

    // FIXME: test and fix it
    if (rest.onClick) {
      rest.onClick(e);
    }
  };
  return (
    <AvatarWrapper size={size} onClick={onClick}>
      <AvatarImage src={profile} alt={username} />
    </AvatarWrapper>
  );
};

export default Avatar;
