import React from 'react';
import { nft1, nft2, nft3 } from '../assets/images';
import { Icon } from '@iconify/react';

const MarketPlace = () => {
  return (
    <div className='mt-24 px-8 py-16 bg-indigo-100' id='marketplace'>
      <div className='mx-auto max-w-screen-xl'>
        <div>
          <h2 className='text-4xl font-bold'>DISCOVER MORE NFTS</h2>
        </div>
        <div className='flex justify-left gap-2 mb-8'>
          <button className='mt-3 px-3 py-1 text-gray-700 rounded-full duration-150 bg-indigo-50 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
            All Categories
          </button>
          <button className='mt-3 px-3 py-1 text-gray-700 rounded-full duration-150 bg-indigo-50 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
            Art
          </button>
          <button className='mt-3 px-3 py-1 text-gray-700 rounded-full duration-150 bg-indigo-50 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
            Celebrities
          </button>
          <button className='mt-3 px-3 py-1 text-gray-700 rounded-full duration-150 bg-indigo-50 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
            Gaming
          </button>
          <button className='mt-3 px-3 py-1 text-gray-700 rounded-full duration-150 bg-indigo-50 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
            Sport
          </button>
          <button className='mt-3 px-3 py-1 text-gray-700 rounded-full duration-150 bg-indigo-50 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
            Music
          </button>
          <button className='mt-3 px-3 py-1 text-gray-700 rounded-full duration-150 bg-indigo-50 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
            Crypto
          </button>
          <button className='mt-3 px-3 py-1 ml-auto text-gray-700 rounded-full duration-150 bg-indigo-50 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
            <span className='flex items-center'>
              <Icon icon='ion:filter' className='inline me-2' />
              All Filters
            </span>
          </button>
        </div>
        <div className='flex justify-between gap-6'>
          <div className='bg-white rounded-xl shadow-sm'>
            <img
              alt='NFT ArtCrypto'
              className='h-[200px] w-full object-cover rounded-t-xl'
              height='200'
              src={nft1}
              style={{
                aspectRatio: '250/200',
                objectFit: 'cover',
              }}
              width='250'
            />
            <div className='p-4'>
              <h3 className='text-lg font-bold my-2'>ArtCrypto</h3>
              <div className='flex items-center justify-between text-sm'>
                <span className='flex items-center text-green-500'>
                  <Icon
                    icon='majesticons:etherium-circle-line'
                    className='inline me-2'
                  />
                  0.25 ETH
                </span>
                <span className='text-gray-500'>1 of 321</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-gray-500 text-sm'>3h 50m 2s left</span>
                <button className='mt-3 px-3 py-1 text-gray-700 border rounded-full border-indigo-600 duration-150 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
                  Place a Bid
                </button>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-sm'>
            <img
              alt='NFT This NFT'
              className='h-[200px] w-full object-cover rounded-t-xl'
              height='200'
              src={nft2}
              style={{
                aspectRatio: '250/200',
                objectFit: 'cover',
              }}
              width='250'
            />
            <div className='p-4'>
              <h3 className='text-lg font-bold my-2'>This NFT</h3>
              <div className='flex items-center justify-between text-sm'>
                <span className='flex items-center text-green-500'>
                  <Icon
                    icon='majesticons:etherium-circle-line'
                    className='inline me-2'
                  />
                  0.25 ETH
                </span>
                <span className='text-gray-500'>1 of 321</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-gray-500 text-sm'>3h 50m 2s left</span>
                <button className='mt-3 px-3 py-1 text-gray-700 border rounded-full border-indigo-600 duration-150 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
                  Place a Bid
                </button>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-sm'>
            <img
              alt='NFT NameCrypto'
              className='h-[200px] w-full object-cover rounded-t-xl'
              height='200'
              src={nft3}
              style={{
                aspectRatio: '250/200',
                objectFit: 'cover',
              }}
              width='250'
            />
            <div className='p-4'>
              <h3 className='text-lg font-bold my-2'>NameCrypto</h3>
              <div className='flex items-center justify-between text-sm'>
                <span className='flex items-center text-green-500'>
                  <Icon
                    icon='majesticons:etherium-circle-line'
                    className='inline me-2'
                  />
                  0.25 ETH
                </span>
                <span className='text-gray-500'>1 of 321</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-gray-500 text-sm'>3h 50m 2s left</span>
                <button className='mt-3 px-3 py-1 text-gray-700 border rounded-full border-indigo-600 duration-150 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
                  Place a Bid
                </button>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-sm'>
            <img
              alt='NFT KingCrypto'
              className='h-[200px] w-full object-cover rounded-t-xl'
              height='200'
              src={nft1}
              style={{
                aspectRatio: '250/200',
                objectFit: 'cover',
              }}
              width='250'
            />
            <div className='p-4'>
              <h3 className='text-lg font-bold my-2'>KingCrypto</h3>
              <div className='flex items-center justify-between text-sm'>
                <span className='flex items-center text-green-500'>
                  <Icon
                    icon='majesticons:etherium-circle-line'
                    className='inline me-2'
                  />
                  0.25 ETH
                </span>
                <span className='text-gray-500'>1 of 321</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-gray-500 text-sm'>3h 50m 2s left</span>
                <button className='mt-3 px-3 py-1 text-gray-700 border rounded-full border-indigo-600 duration-150 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
                  Place a Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
