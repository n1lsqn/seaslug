import { NextPage } from 'next';
import Image from 'next/image';
import { CiShoppingCart, CiTwitter } from 'react-icons/ci';
import { FaAmazon } from 'react-icons/fa';
import { SiVrchat } from 'react-icons/si';

export const LeftSide: NextPage = () => {
  return (
    <div className='bg-white rounded-l-xl w-1/2'>
      <div className='flex justify-center'>
        <Image
          src="/assets/banner.png"
          alt='banner'
          width={0}
          height={0}
          className='rounded-tl-xl'
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className='flex justify-center -mt-24'>
        <Image
          src="/assets/avatar.jpg"
          alt='avatar img'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '50%', height: 'auto' }}
          className='rounded-full'
        />
      </div>
      <div className='text-xl text-center my-2'>にる</div>
      <div className='flex flex-row gap-4 justify-center mt-48 mb-16'>
        <div className='rounded-full border p-2'>
          <SiVrchat size="3.5vw"/>
        </div>
        <div className='rounded-full border p-2'>
          <CiTwitter size="3.5vw" />
        </div>
        <div className='rounded-full border p-2'>
          <CiShoppingCart size="3.5vw" />
        </div>
        <div className='rounded-full border p-2'>
          <FaAmazon size="3.5vw" />
        </div>
      </div>
    </div>
  );
};