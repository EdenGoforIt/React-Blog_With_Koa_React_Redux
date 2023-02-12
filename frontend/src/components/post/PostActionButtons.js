import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
const PostActionButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;

  border-radius: 4px;
  color: ${palette.gray[7]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${palette.gray[1]};
    color: ${(props) => (props.danger ? palette.danger : palette.cyan[7])};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;
const ActionIcon = styled.div`
  margin-left: 1rem;
  float: right;
  cursor: pointer;
  &:first-child {
    margin-right: 10px;
  }
`;

const PostActionButtons = () => {
  return (
    <PostActionButtonBlock>
      <ActionButton>
        Edit
        <ActionIcon>
          <FontAwesomeIcon icon={faPencil} />
        </ActionIcon>
      </ActionButton>
      <ActionButton danger>
        Delete
        <ActionIcon>
          <FontAwesomeIcon icon={faTrash} />
        </ActionIcon>
      </ActionButton>
    </PostActionButtonBlock>
  );
};

export default PostActionButtons;
