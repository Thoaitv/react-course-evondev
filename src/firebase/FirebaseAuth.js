import React, { useEffect, useRef, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth } from './firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase-config';

const FirebaseAuth = () => {
  // const auth = getAuth();

  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  // Đăng nhập đăng xuất
  const [userInfo, setUserInfo] = useState('');
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserInfo(currentUser);
      } else {
        setUserInfo('');
      }
    });
  }, [userInfo]);

  const handleInputChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(value);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const user = await createUserWithEmailAndPassword(
      auth,
      value.email,
      value.password
    );
    await updateProfile(auth.currentUser, {
      displayName: 'Thoai2',
    });
    setUserInfo(user);
    console.log('oke');
    const useRef = collection(db, 'users');
    await addDoc(useRef, {
      email: value.email,
      password: value.password,
      id: user.user.uid,
    });
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const cred = await signInWithEmailAndPassword(
      auth,
      value.email,
      value.password
    );
    setUserInfo(cred);
  };

  return (
    <>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form action="" onSubmit={handleCreateUser}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outli ne-none focus:border-blue-500"
            placeholder="Enter your email"
            name="email"
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your pass"
            name="password"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white text-sm font-medium w-full rounded-lg">
            Đăng ký
          </button>
        </form>
        <div className="mt-10">
          <span>{userInfo?.displayName}</span>
          {/* <span>{auth.currentUser.password}</span> */}
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white text-sm font-medium w-full rounded-lg"
            onClick={handleSignOut}>
            Đăng xuất
          </button>
        </div>
      </div>

      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form action="" onSubmit={handleLogin}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outli ne-none focus:border-blue-500"
            placeholder="Enter your email"
            name="email"
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your pass"
            name="password"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="p-3 bg-pink-500 text-white text-sm font-medium w-full rounded-lg">
            Đăng nhập
          </button>
        </form>
      </div>
    </>
  );
};

export default FirebaseAuth;
