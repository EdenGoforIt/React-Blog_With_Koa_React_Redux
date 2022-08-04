import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import React from 'react';

const fontAwesomeStyle = css`
  color: white;
`;

const StyledFontAwesome = styled(Link)`
  ${fontAwesomeStyle}
`;
const FontAwesomeIcon = (props) => {
  console.log('fontawesome icons props', props);

  return <StyledFontAwesome {...props} />;
};

export default FontAwesomeIcon;
