import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogPage from './BlogPage';
import BlogPageDetail from './BlogPageDetail';
import Nav from './Nav';
import NotFound from './NotFound';
import ProfilePage from './ProfilePage';

const DemoRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<>Home</>} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPageDetail />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default DemoRouter;
