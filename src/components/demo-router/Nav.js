import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const ListLink = [
  {
    id: 1,
    to: '/',
    title: 'Home',
  },
  {
    id: 2,
    to: '/profile',
    title: 'Profile',
  },
  {
    id: 3,
    to: '/blog',
    title: 'Blog',
  },
];

const Nav = () => {
  return (
    <>
      <div className="p-5 bg-white shadow-md flex items-center justify-center gap-x-5">
        {ListLink.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive }) => (isActive ? 'text-green-400' : '')}>
            {item.title}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
