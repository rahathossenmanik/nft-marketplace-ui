import React from 'react';
import { nft1, nft2, nft3 } from '../assets/images';
import { Icon } from '@iconify/react';
const nfts = [
  {
    image: nft1,
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
    name: 'The Futr Abstr',
    email: 'john@example.com',
  },
  {
    image: nft2,
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    name: 'The Futr Abstr',
    email: 'chridbondi@example.com',
  },
  {
    image: nft3,
    avatar: 'https://randomuser.me/api/portraits/men/88.jpg',
    name: 'The Futr Abstr',
    email: 'yasmine@example.com',
  },
];

const TopNFTSection = () => {
  return (
    <div className='mt-24 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-3 gap-6'>
        <div className='col-span-2 grid grid-cols-2 gap-6'>
          <div>
            <img
              alt='Artwork'
              className='w-full h-auto rounded-lg'
              height='200'
              src={nft1}
              style={{
                aspectRatio: '200/200',
                objectFit: 'cover',
              }}
              width='200'
            />
            <div className='mt-4 flex justify-between items-center'>
              <div>
                <h5 className='text-lg font-semibold'>The Futr Abstr</h5>
                <p className='text-sm text-gray-500'>10 in the stock</p>
              </div>
              <div>
                <p>Highest Bid</p>
                <p className='text-sm font-semibold'>
                  <Icon
                    icon='majesticons:etherium-circle-line'
                    className='inline'
                  />{' '}
                  0.25 ETH
                </p>
              </div>
            </div>
          </div>
          <div className='max-w-2xl mx-auto px-4'>
            <ul className='divide-y'>
              {nfts.map((nft, idx) => (
                <li key={idx} className='py-5 flex items-start justify-between'>
                  <div className='flex gap-3'>
                    <img
                      src={nft.image}
                      alt={'NFT ' + idx}
                      className='flex-none w-24 h-24 rounded-xl'
                    />
                    <div>
                      <span className='block text-md text-gray-700 font-bold'>
                        {nft.name}
                      </span>
                      <div className='mt-2 flex items-center gap-3'>
                        <img
                          src={nft.avatar}
                          alt='Avatar'
                          className='w-6 h-6 rounded-full'
                        />
                        <span className='block text-sm text-gray-600'>
                          <button className='flex items-center text-green-600 font-semibold text-sm border border-green-400 rounded-lg px-2 py-1 duration-150 bg-white hover:bg-green-100'>
                            <Icon
                              icon='majesticons:etherium-circle-line'
                              className='inline me-2'
                            />
                            0.25 ETH
                          </button>
                        </span>
                      </div>
                      <div className='mt-2'>
                        <button className='mt-3 px-3 py-1 text-gray-700 border rounded-full border-indigo-600 duration-150 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
                          Place a Bid
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className='bg-white shadow rounded-lg p-4'>
            <h3 className='text-lg font-bold'>TOP COLLECTIONS OVER</h3>
            <h4 className='text-sm font-semibold text-gray-500 mb-3'>
              Last 7 days
            </h4>
            <ul className='space-y-3'>
              <li className='flex justify-between items-center'>
                <div className='flex items-center space-x-3'>
                  <span className='font-semibold'>1</span>
                  <span className='flex items-center'>
                    <img
                      alt='CryptoFunks'
                      className='h-14 w-14 rounded-full'
                      height='24'
                      src={nft1}
                      style={{
                        aspectRatio: '24/24',
                        objectFit: 'cover',
                      }}
                      width='24'
                    />
                    <div className='ml-2'>
                      <span>CryptoFunks</span>
                      <p className='flex items-center text-xs text-gray-500'>
                        <Icon
                          icon='majesticons:etherium-circle-line'
                          className='inline me-2'
                        />
                        19,000 ETH
                      </p>
                    </div>
                  </span>
                </div>
                <span className='text-green-500 font-semibold'>+26.52%</span>
              </li>
              <li className='flex justify-between items-center'>
                <div className='flex items-center space-x-3'>
                  <span className='font-semibold'>2</span>
                  <span className='flex items-center'>
                    <img
                      alt='Cryptix'
                      className='h-14 w-14 rounded-full'
                      height='24'
                      src={nft2}
                      style={{
                        aspectRatio: '24/24',
                        objectFit: 'cover',
                      }}
                      width='24'
                    />
                    <div className='ml-2'>
                      <span>Cryptix</span>
                      <p className='flex items-center text-xs text-gray-500'>
                        <Icon
                          icon='majesticons:etherium-circle-line'
                          className='inline me-2'
                        />
                        19,000 ETH
                      </p>
                    </div>
                  </span>
                </div>
                <span className='text-green-500 font-semibold'>+10.52%</span>
              </li>
              <li className='flex justify-between items-center'>
                <div className='flex items-center space-x-3'>
                  <span className='font-semibold'>3</span>
                  <span className='flex items-center'>
                    <img
                      alt='Frenswear'
                      className='h-14 w-14 rounded-full'
                      height='24'
                      src={nft3}
                      style={{
                        aspectRatio: '24/24',
                        objectFit: 'cover',
                      }}
                      width='24'
                    />
                    <div className='ml-2'>
                      <span>Frenswear</span>
                      <p className='flex items-center text-xs text-gray-500'>
                        <Icon
                          icon='majesticons:etherium-circle-line'
                          className='inline me-2'
                        />
                        19,000 ETH
                      </p>
                    </div>
                  </span>
                </div>
                <span className='text-green-500 font-semibold'>+2.52%</span>
              </li>
              <li className='flex justify-between items-center'>
                <div className='flex items-center space-x-3'>
                  <span className='font-semibold'>4</span>
                  <span className='flex items-center'>
                    <img
                      alt='PunkArt'
                      className='h-14 w-14 rounded-full'
                      height='24'
                      src={nft2}
                      style={{
                        aspectRatio: '24/24',
                        objectFit: 'cover',
                      }}
                      width='24'
                    />
                    <div className='ml-2'>
                      <span>PunkArt</span>
                      <p className='flex items-center text-xs text-gray-500'>
                        <Icon
                          icon='majesticons:etherium-circle-line'
                          className='inline me-2'
                        />
                        19,000 ETH
                      </p>
                    </div>
                  </span>
                </div>
                <span className='text-green-500 font-semibold'>+1.52%</span>
              </li>
              <li className='flex justify-between items-center'>
                <div className='flex items-center space-x-3'>
                  <span className='font-semibold'>5</span>
                  <span className='flex items-center'>
                    <img
                      alt='Art Crypto'
                      className='h-14 w-14 rounded-full'
                      height='24'
                      src={nft1}
                      style={{
                        aspectRatio: '24/24',
                        objectFit: 'cover',
                      }}
                      width='24'
                    />
                    <div className='ml-2'>
                      <span>Art Crypto</span>
                      <p className='flex items-center text-xs text-gray-500'>
                        <Icon
                          icon='majesticons:etherium-circle-line'
                          className='inline me-2'
                        />
                        19,000 ETH
                      </p>
                    </div>
                  </span>
                </div>
                <span className='text-green-500 font-semibold'>+2.52%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNFTSection;
