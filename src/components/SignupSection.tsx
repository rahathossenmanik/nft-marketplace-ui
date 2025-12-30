import React from 'react';
import { nft1, nft2, nft3 } from '../assets/images';

const SignupSection = () => {
  return (
    <div className='mt-24 max-w-screen-xl flex justify-center items-center bg-white'>
      <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 p-6'>
        <div className='grid grid-cols-2 gap-4'>
          <img
            alt='Abstract art'
            className='col-span-1 row-span-2 rounded-xl'
            height='240'
            src={nft1}
            style={{
              aspectRatio: '240/240',
              objectFit: 'cover',
            }}
            width='240'
          />
          <img
            alt='Abstract art'
            className='rounded-xl'
            height='120'
            src={nft2}
            style={{
              aspectRatio: '120/120',
              objectFit: 'cover',
            }}
            width='120'
          />
          <img
            alt='Abstract art'
            className='rounded-xl'
            height='120'
            src={nft3}
            style={{
              aspectRatio: '120/120',
              objectFit: 'cover',
            }}
            width='120'
          />
        </div>
        <div className='max-w-md space-y-6'>
          <h1 className='text-5xl font-bold'>CREATE AND SELL YOUR NFTS</h1>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </p>
          <div>
            <button className='px-5 py-3 text-white bg-indigo-600 rounded-full duration-150 hover:bg-white border border-indigo-600 hover:text-gray-700 active:shadow-lg'>
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSection;
