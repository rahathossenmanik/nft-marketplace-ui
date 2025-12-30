import React from 'react';
import { nft3, nft5, nft6 } from '../assets/images';

const HeroSection = () => {
  return (
    <section className='mt-24 mx-auto relative max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8'>
      <div className='space-y-4 flex-1 sm:text-center lg:text-left'>
        <h1 className='text-gray-800 font-bold text-4xl xl:text-5xl'>
          <span>DISCOVER, AND COLLECT DIGITAL ART </span>
          <span className='text-indigo-600'>NFT</span>S
        </h1>
        <p className='text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0'>
          Digital marketplace for crypto collectibles and non-fungible tokens
          (NFTs). Buy, sell, and discover exclusive digital assets.
        </p>
        <div className='pt-3'>
          <button className='px-5 py-3 text-white bg-indigo-600 rounded-full duration-150 hover:bg-white border border-indigo-600 hover:text-gray-700 active:shadow-lg'>
            Explore Now
          </button>
        </div>
        <div className='pt-3 flex items-center justify-center lg:justify-start space-x-4 md:space-x-8'>
          <div className='flex items-center flex-col'>
            <div className='text-3xl font-bold'>98K+</div>
            <span className='text-gray-500'>Artwork</span>
          </div>
          <div className='flex items-center flex-col'>
            <div className='text-3xl font-bold'>1.2K+</div>
            <span className='text-gray-500'>Auction</span>
          </div>
          <div className='flex items-center flex-col'>
            <div className='text-3xl font-bold'>3.5K+</div>
            <span className='text-gray-500'>Artist</span>
          </div>
        </div>
      </div>
      <div className='flex-1 relative top-0 right-0 text-center mt-4 lg:mt-0 lg:ml-3 hidden lg:block'>
        <img
          src={nft5}
          alt='NFT 2'
          className='w-3/6 absolute left-20 -top-56 z-30 shadow-xl border rounded-xl my-auto'
        />
        <img
          src={nft6}
          alt='NFT 3'
          className='w-3/6 absolute left-40 -top-44 z-20 shadow-xl border rounded-xl my-auto'
        />
        <img
          src={nft3}
          alt='NFT 1'
          className='w-3/6 absolute left-60 -top-32 z-10 shadow-xl border rounded-xl my-auto'
        />
      </div>
    </section>
  );
};

export default HeroSection;
