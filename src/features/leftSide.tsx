import { NextPage } from 'next';
import Image from 'next/image';
import { CiShoppingCart, CiTwitter } from 'react-icons/ci';
import { FaAmazon } from 'react-icons/fa';
import { SiVrchat } from 'react-icons/si';

export const LeftSide: NextPage = () => {
  return (
    <div className='bg-white rounded-t-xl md:rounded-l-xl md:rounded-r-none w-full md:w-1/2'>
      <div className='flex justify-center'>
        <Image
          src="/assets/banner.png"
          alt='banner'
          width={0}
          height={0}
          className='rounded-t-xl md:rounded-tl-xl'
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className='flex justify-center -mt-12 md:-mt-24'>
        <Image
          src="/assets/avatar.jpg"
          alt='avatar img'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '50%', maxWidth: '200px', height: 'auto' }}
          className='rounded-full border-4 border-white'
        />
      </div>
      <div className='text-xl text-center my-2'>にる</div>
      <div className='flex flex-row gap-4 justify-center mt-8 md:mt-48 mb-8 md:mb-16 px-4'>
        <div className='rounded-full border p-2 hover:bg-gray-100 transition-colors'>
          <SiVrchat className='w-10 h-10 md:w-12 md:h-12'/>
        </div>
        <div className='rounded-full border p-2 hover:bg-gray-100 transition-colors'>
          <CiTwitter className='w-10 h-10 md:w-12 md:h-12'/>
        </div>
        <div className='rounded-full border p-2 hover:bg-gray-100 transition-colors'>
          <CiShoppingCart className='w-10 h-10 md:w-12 md:h-12'/>
        </div>
        <div className='rounded-full border p-2 hover:bg-gray-100 transition-colors'>
          <FaAmazon className='w-10 h-10 md:w-12 md:h-12'/>
        </div>
      </div>
    </div>
  );
};