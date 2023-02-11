import React from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';
import Pagination from '../../components/posts/Pagination';
import { useParams, useLocation } from 'react-router-dom';

const PaginationContainer = () => {
  const { username } = useParams();
  const location = useLocation();
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));
 
  if (!posts || loading) return null;

  const { tag, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default PaginationContainer;
