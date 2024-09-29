'use client';

import { useSelector, useDispatch } from 'react-redux';
import { setPosts, setDataIsLoaded } from '@/lib/products/productSlice';
import { useEffect } from 'react';
import Spinner from '@/components/Spinner';
import Card from '@/components/Card';
import Navbar from '@/components/Navbar';

const ProductsClient = ({ products }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.products.posts);
  const dataIsLoaded = useSelector((state) => state.products.dataIsLoaded);

  useEffect(() => {
    dispatch(setPosts(products));
    dispatch(setDataIsLoaded(true))
  }, [dispatch, products]);

  if (!dataIsLoaded) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>No Data Available</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="mt-4 grid grid-cols-1 justify-items-center gap-1 sm:grid-cols-2 sm:gap-y-4 lg:grid-cols-3 2xl:grid-cols-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            category={post.category}
            price={post.price}
            rating={post.rating.rate}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsClient;


