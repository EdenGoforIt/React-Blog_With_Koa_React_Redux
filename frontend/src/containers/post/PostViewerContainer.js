import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostViewer from '../../components/post/PostViewer';
import { readPost, unloadPost } from '../../modules/post';
import { useNavigate, useParams } from 'react-router-dom';
import PostActionButtons from '../../components/post/PostActionButtons';
import { setOriginalPost } from '../../modules/write';

const PostViewerContainer = () => {
  const { postId } = useParams();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(readPost(postId));

    //when unmounting remove all posts
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigation('/write');
  };
  const onRemove = () => {};

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={
        <PostActionButtons
          onEdit={onEdit}
          onRemove={onRemove}
          ownPost={user && user.id === post && post.id}
        />
      }
    />
  );
};

export default PostViewerContainer;
