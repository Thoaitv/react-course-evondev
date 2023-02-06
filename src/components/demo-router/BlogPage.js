import React from 'react';
import { useSearchParams } from 'react-router-dom';

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('BlogPage ~ searchParams', searchParams.get('search'));
  return <div>BlogPage</div>;
};

export default BlogPage;
