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
    <div className="app">
      <HeaderContainer />
      <Routes>
        <Route element={<PostListPage />} path="/" exact />
        <Route element={<PostPage />} path="/:username/:postId" />
        <Route element={<PostListPage />} path="/:username" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<WritePage />} path="/write" />
      </Routes>
    </div>
  );
};
export default App;
