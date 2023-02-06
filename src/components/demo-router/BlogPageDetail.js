import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BlogPageDetail = () => {
  const { slug } = useParams();

  console.log(slug);

  const navigate = useNavigate();
  return (
    <div>
      Chuyen den Blog Page
      <button
        className="p-3 rounded-sm text-white bg-blue-500"
        onClick={() => navigate('/blog')}>
        Chuyen den Blog Page
      </button>
    </div>
  );
};

export default BlogPageDetail;
