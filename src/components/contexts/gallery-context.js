import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const GalleryContext = createContext();

const fakePhotos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1645040643524-8971366b4f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
    isFavorite: false,
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1645088520336-62d94324e869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=800',
    isFavorite: false,
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1645104787913-aeb889b0e190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    isFavorite: false,
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1645069258059-6f5a71256c4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    isFavorite: false,
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1645105263866-ed2be8e07981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1853&q=80',
    isFavorite: false,
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    isFavorite: false,
  },
];

function GalleryProvider(props) {
  const [photos, setPhotos] = useState(fakePhotos);

  const [cartItems, setCartItems] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  function toogleFavorite(photoId) {
    const updatedArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });

    setPhotos(updatedArray);
  }
  // 1. Viết function addToCart
  // 2. Function addToCart truyền params là photo
  function addToCart(newPhoto) {
    // 3. Cập nhật lại state giỏ hàng (cartItems)
    setCartItems((prevItems) => {
      const isExited = prevItems.some((item) => item.id === newPhoto.id);

      if (isExited) return [...prevItems];
      return [...prevItems, newPhoto];
    });
    // 4. Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
  }

  function deleteFromCart(photoId) {
    setCartItems((prevItems) => {
      console.log('prevItems', prevItems);
      return prevItems.filter((item) => item.id !== photoId);
    });
  }

  const value = {
    photos,
    cartItems,
    favoriteList,
    setPhotos,
    setCartItems,
    setFavoriteList,
    toogleFavorite,
    addToCart,
    deleteFromCart,
  };

  return <GalleryContext.Provider value={value} {...props} />;
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === 'undefined') throw new Error('Can context');
  return context;
}

export { useGallery, GalleryProvider };
