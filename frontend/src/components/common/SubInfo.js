import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../styles/palette';

const SubInfoBlock = styled.div`
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.gray[6]};
  font-size: 0.5rem !important;
  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  };
  width: ${(props) => props.width + '%'};
`;

const SubInfo = ({ username, publishedDate, hasMarginTop, width }) => {
  console.log(width);

  return (
    <SubInfoBlock hasMarginTop={hasMarginTop} width={width}>
      <span>
        <b>
          By <Link to={`/@${username}`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </SubInfoBlock>
  );
};

export default SubInfo;
