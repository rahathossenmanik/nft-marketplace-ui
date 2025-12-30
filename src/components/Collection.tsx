import React from 'react';
import { nft1, nft2, nft3 } from '../assets/images';

const Collection = () => {
  return (
    <div className='mt-24 bg-indigo-100 p-8' id='resource'>
      <div className='mx-auto max-w-screen-xl'>
        <h2 className='text-3xl font-bold mb-6'>COLLECTION FEATURED NFTS</h2>
        <div className='grid grid-cols-3 gap-4'>
          <div className='space-y-4'>
            <div className='grid grid-cols-4 gap-4'>
              <div className='col-span-3'>
                <img
                  alt='NFT'
                  className='rounded-lg w-full h-auto'
                  src={nft1}
                  style={{
                    aspectRatio: '200/200',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className='col-span-1'>
                <div className='flex flex-col gap-3'>
                  <img
                    alt='NFT'
                    className='rounded-lg w-full h-auto'
                    src={nft1}
                    style={{
                      aspectRatio: '200/200',
                      objectFit: 'cover',
                    }}
                  />
                  <img
                    alt='NFT'
                    className='rounded-lg w-full h-auto'
                    src={nft2}
                    style={{
                      aspectRatio: '200/200',
                      objectFit: 'cover',
                    }}
                  />
                  <img
                    alt='NFT'
                    className='rounded-lg w-full h-auto'
                    src={nft3}
                    style={{
                      aspectRatio: '200/200',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <h3 className='text-xl font-semibold'>Amazing Collection</h3>
                <p className='text-gray-500'>by Arkhan</p>
              </div>
              <div className='flex items-center'>
                <button className='px-5 py-3 text-white bg-indigo-600 rounded-full duration-150 hover:bg-white border border-indigo-600 hover:text-gray-700 active:shadow-lg'>
                  Total 54 items
                </button>
              </div>
            </div>
          </div>
          <div className='space-y-4'>
            <div className='grid grid-cols-4 gap-4'>
              <div className='col-span-3'>
                <img
                  alt='NFT'
                  className='rounded-lg w-full h-auto'
                  src={nft2}
                  style={{
                    aspectRatio: '200/200',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className='col-span-1'>
                <div className='flex flex-col gap-3'>
                  <img
                    alt='NFT'
                    className='rounded-lg w-full h-auto'
                    src={nft1}
                    style={{
                      aspectRatio: '200/200',
                      objectFit: 'cover',
                    }}
                  />
                  <img
                    alt='NFT'
                    className='rounded-lg w-full h-auto'
                    src={nft2}
                    style={{
                      aspectRatio: '200/200',
                      objectFit: 'cover',
                    }}
                  />
                  <img
                    alt='NFT'
                    className='rounded-lg w-full h-auto'
                    src={nft3}
                    style={{
                      aspectRatio: '200/200',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <h3 className='text-xl font-semibold'>Amazing Collection</h3>
                <p className='text-gray-500'>by Arkhan</p>
              </div>
              <div className='flex items-center'>
                <button className='px-5 py-3 text-white bg-indigo-600 rounded-full duration-150 hover:bg-white border border-indigo-600 hover:text-gray-700 active:shadow-lg'>
                  Total 54 items
                </button>
              </div>
            </div>
          </div>
          <div className='space-y-4'>
            <div className='grid grid-cols-4 gap-4'>
              <div className='col-span-3'>
                <img
                  alt='NFT'
                  className='rounded-lg w-full h-auto'
                  src={nft3}
                  style={{
                    aspectRatio: '200/200',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className='col-span-1'>
                <div className='flex flex-col gap-3'>
                  <img
                    alt='NFT'
                    className='rounded-lg w-full h-auto'
                    src={nft1}
                    style={{
                      aspectRatio: '200/200',
                      objectFit: 'cover',
                    }}
                  />
                  <img
                    alt='NFT'
                    className='rounded-lg w-full h-auto'
                    src={nft2}
                    style={{
                      aspectRatio: '200/200',
                      objectFit: 'cover',
                    }}
                  />
                  <img
                    alt='NFT'
                    className='rounded-lg w-full h-auto'
                    src={nft3}
                    style={{
                      aspectRatio: '200/200',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <h3 className='text-xl font-semibold'>Amazing Collection</h3>
                <p className='text-gray-500'>by Arkhan</p>
              </div>
              <div className='flex items-center'>
                <button className='px-5 py-3 text-white bg-indigo-600 rounded-full duration-150 hover:bg-white border border-indigo-600 hover:text-gray-700 active:shadow-lg'>
                  Total 54 items
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
