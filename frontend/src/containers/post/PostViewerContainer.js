import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostViewer from '../../components/post/PostViewer';
import { readPost, unloadPost } from '../../modules/post';
import { useNavigate, useParams } from 'react-router-dom';
import PostActionButtons from '../../components/post/PostActionButtons';

const PostViewerContainer = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
  }));

  useEffect(() => {
    dispatch(readPost(postId));

    //when unmounting remove all posts
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {};
  const onRemove = () => {};

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={<PostActionButtons onEdit={onEdit} onRemove={onRemove} />}
    />
  );
};

export default PostViewerContainer;
