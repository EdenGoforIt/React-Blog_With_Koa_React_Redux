import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex-inline;
`;

const EditIcon = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${palette.postBackground};
  border-radius: 20px;
  margin: 15px;
  padding: 10px 20px;
  color: white;
  $:first-child {
    padding-top: 0;
  }
  $ + $ {
    border-top: 1px solid ${palette.gray[2]};
  }
  h3 {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 1rem;
  }
`;

const PostBody = styled.div`
  font-size: 1rem;
`;
const PostItem = ({ post }) => {
  // const navigate = useNavigate();
  const { publishedDate, user, tags, title, body, _id } = post;

  return (
    <PostItemBlock>
      {tags && <Tags tags={tags} />}
      <Title>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </Title>
      <SubInfo
        width={100}
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <PostBody dangerouslySetInnerHTML={{ __html: body }}></PostBody>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return <PostListBlock>Error Occurred</PostListBlock>;
  }
  return (
    <PostListBlock>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
