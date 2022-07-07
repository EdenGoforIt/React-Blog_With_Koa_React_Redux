import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import { Link } from 'react-router-dom';

const TagsBlock = styled.div`
  margin-top: 0;
  .tag {
    display: inline-block;
    color: white;
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.gray[6]};
    }
    border: 1px solid white;
    border-radius: 5%;
    padding: 0.2rem;
    font-size:10px;
    background-color: purple;
  }
`;

const Tags = ({ tags }) => {
  return (
    <TagsBlock>
      {tags.map((tag) => (
        <Link className="tag" to={`/?tag=${tag}`} key={tag}>
          #{tag}
        </Link>
      ))}
    </TagsBlock>
  );
};

export default Tags;
