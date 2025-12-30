import React, { useState } from 'react';

const TopNavbar = () => {
  const [menuState, setMenuState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: 'Marketplace', path: '#marketplace' },
    { title: 'Resource', path: '#resource' },
    { title: 'About', path: '#about' },
  ];
  return (
    <nav className='bg-white border-b'>
      <div className='flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8'>
        <div className='flex-none lg:flex-initial'>
          <span className='px-4 py-2 text-indigo-600 text-2xl font-extrabold duration-150 hover:text-indigo-500 active:text-indigo-700'>
            NFTERS
          </span>
        </div>
        <div className='flex-1 flex items-center justify-between'>
          <div
            className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
              menuState ? '' : 'hidden'
            }`}>
            <ul className='mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0'>
              {navigation.map((item) => (
                <li
                  key={item.path}
                  className='text-gray-600 hover:text-gray-900'>
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-1 flex items-center justify-end space-x-2 sm:space-x-6'>
            <form className='flex items-center space-x-2 border rounded-full p-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 flex-none text-gray-300'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
              <input
                className='w-auto outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto'
                type='text'
                placeholder='Search'
              />
            </form>
            <button
              className='outline-none text-gray-400 block lg:hidden'
              onClick={() => setMenuState(!menuState)}>
              {menuState ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`bg-white text-right absolute space-x-2 z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
              menuState ? '' : 'hidden'
            }`}>
            <a
              href='?'
              className='px-4 py-2 text-white bg-indigo-600 rounded-full duration-150 hover:bg-white border border-indigo-600 hover:text-gray-700 active:shadow-lg'>
              Upload
            </a>
            <a
              href='?'
              className='px-4 py-2 text-gray-700 border rounded-full border-indigo-600 duration-150 hover:bg-indigo-600 hover:text-white active:shadow-lg'>
              Connect Wallet
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
