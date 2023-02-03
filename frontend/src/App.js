import React from 'react';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import HeaderContainer from './containers/common/HeaderContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <HeaderContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<PostListPage />} path={['/@:username', '/']} exact />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<WritePage />} path="/write" />
          <Route element={<PostPage />} path="/@:username/:postId" />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
