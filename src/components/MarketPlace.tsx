import { Icon } from '@iconify/react';
import { nfts } from '../constants/json/nfts';
import DeadlineCountdown from './DeadlineCountdown';

const MarketPlace = () => {
  return (
    <div className='mt-24 px-8 py-16 bg-indigo-100' id='marketplace'>
      <div className='mx-auto max-w-screen-xl'>
        <div>
          <h2 className='text-4xl font-bold'>DISCOVER MORE NFTS</h2>
        </div>
        <div className='flex justify-left gap-2 mb-8'>
          {categories.map((category) => (
            <button
              key={category}
              className='mt-3 px-3 py-1 text-gray-700 rounded-full duration-150 bg-indigo-50 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
              {category}
            </button>
          ))}
          <button className='mt-3 px-3 py-1 ml-auto text-gray-700 rounded-full duration-150 bg-indigo-50 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
            <span className='flex items-center'>
              <Icon icon='ion:filter' className='inline me-2' />
              All Filters
            </span>
          </button>
        </div>
        <div className='flex justify-between flex-wrap gap-2'>
          {nfts.map((nft) => (
            <div key={nft.id} className='bg-white rounded-xl shadow-sm'>
              <img
                alt={nft.name}
                className='h-[200px] w-full object-cover rounded-t-xl'
                height='200'
                src={nft.image}
                style={{
                  aspectRatio: '250/200',
                  objectFit: 'cover',
                }}
                width='250'
              />
              <div className='p-4'>
                <h3 className='text-lg font-bold my-2'>{nft.name}</h3>
                <div className='flex items-center justify-between text-sm'>
                  <span className='flex items-center text-green-500'>
                    <Icon
                      icon='majesticons:etherium-circle-line'
                      className='inline me-2'
                    />
                    {nft.price}
                  </span>
                  <span className='text-gray-500'>
                    Current Bid: {nft.currentBid}
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-500 text-sm'>
                    <DeadlineCountdown deadlineDate={nft.auctionDeadline} />
                  </span>
                  <button className='mt-3 px-3 py-1 text-gray-700 border rounded-full border-indigo-600 duration-150 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
                    Place a Bid
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;

const categories = [
  'All Categories',
  'Art',
  'Celebrities',
  'Gaming',
  'Sport',
  'Music',
  'Crypto',
];
