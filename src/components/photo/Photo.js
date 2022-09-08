import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Photo = () => {
  //   useEffect(callback, [dependencies]);

  const [photos, setPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  console.log(photos);

  const handleLoadMore = () => {
    getPhotos(nextPage).then((img) => {
      const newPhoto = [...photos, ...img];

      console.log('ThoaiTV: handleLoadMore -> newPhoto', newPhoto);
      setPhotos(newPhoto);
      setNextPage(nextPage + 1);
    });
  };

  useEffect(() => {
    handleLoadMore();
  }, []);

  return (
    <div>
      <div>
        <div className="grid grid-cols-4 gap-5 p-5">
          {photos.length > 0 &&
            photos.map((item, index) => (
              <div
                key={item.id}
                className="p-3 bg-white showdown-md rounded-lg h-[200px] w-[200px]"
              >
                <img
                  src={item.download_url}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* <h1>{item.id}</h1> */}
              </div>
            ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleLoadMore}
            className="inline-block px-8 py-4 bg-purple-600 text-white"
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};
export default Photo;
