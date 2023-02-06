import React from 'react';
import { useGallery } from '../contexts/gallery-context';

const CartList = () => {
  const { cartItems, deleteFromCart } = useGallery();
  console.log('CartList ~ cartItem', cartItems);

  return (
    <div className="flex flex-col items-start gap-5 px-5 py-10">
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div
            className="inline-flex items-center justify-between gap-x-5"
            key={item.id}>
            <img
              src={item.url}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <button
              className="p-3 rounded-lg bg-red-400 text-white font-semibold text-sm"
              onClick={() => deleteFromCart(item.id)}>
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default CartList;
