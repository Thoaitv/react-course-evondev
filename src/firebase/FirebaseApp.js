import React, { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  where,
  orderBy,
  limit,
  deleteDoc,
  query,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db } from './firebase-config';
import { async } from '@firebase/util';

const FirebaseApp = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [postId, setPostId] = useState('');
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState('');

  const colRef = collection(db, 'posts');
  // console.log(colRef);

  useEffect(() => {
    // colRef
    // 1. Get collection data
    // getDocs(colRef)
    //   .then((snapshot) => {
    //     // console.log(snapshot);
    //     let posts = [];
    //     snapshot.docs.forEach((doc) => {
    //       posts.push({
    //         id: doc.id,
    //         ...doc.data(),
    //       });
    //     });
    //     // console.log(posts);
    //     console.log(posts);
    //     setPosts(posts);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // setPosts(posts);
    // 2. Get document by realtime
    onSnapshot(colRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      // console.log(posts);
      console.log(posts);
      setPosts(posts);
    });

    const docRefSingle = doc(db, 'posts', 'VsnYoMff1oCcPV3LOV13');
    // getDoc(docRefSingle).then((doc) => {
    //   console.log(doc.id, doc.data());
    // });

    onSnapshot(docRefSingle, (doc) => {
      console.log(doc.id, doc.data());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title,
      author,
      createAt: serverTimestamp(),
    })
      .then(() => {
        console.log('success');
        // resetform
      })
      .catch((error) => {
        console.log(error);
        // resetform
      });
  };

  const handleDeletePost = async (e) => {
    e.preventDefault();

    const colRefDelete = doc(db, 'posts', postId);
    await deleteDoc(colRefDelete);
    console.log('delete');
  };

  const handleUpdatePost = async (e) => {
    e.preventDefault();

    const colRefUpdate = doc(db, 'posts', postId);
    await updateDoc(colRefUpdate, {
      title: 'update title',
    });
    console.log('colRefUpdate');
  };
  useEffect(() => {
    // Firestore queries
    const q = query(
      colRef,
      where('author', '==', 'thoai'),
      // orderBy('author'),
      limit(5)
    );
    // console.log(q);
    onSnapshot(q, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log('posts', posts);
    });
  }, []);
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form action="" onSubmit={handleUpdatePost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white text-sm font-medium w-full rounded-lg">
            Add post
          </button>
        </form>
      </div>

      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form action="" onSubmit={handleDeletePost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your id"
            name="postId"
            onChange={(e) => setPostId(e.target.value)}
          />

          <button
            type="submit"
            className="p-3 bg-red-500 text-white text-sm font-medium w-full rounded-lg">
            Delete post
          </button>
        </form>
      </div>

      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        {posts.length > 0 &&
          posts.map((item) => (
            <div key={item.title}>
              <div>
                {item.title} - {item.author}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirebaseApp;
