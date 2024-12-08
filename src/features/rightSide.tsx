import { NextPage } from 'next';

export const RightSide: NextPage = () => {
  return (
    <div className='bg-white rounded-b-xl md:rounded-r-xl md:rounded-l-none w-full md:w-1/2 p-4 text-sm md:text-base'>
      <p className='mb-2'>2024/9/11 Join, /13 NU, /19 U, 10/7 KU, 11/2 TU</p>
      <p className='mb-2'>ゆるーく遊んでます、チルワールド巡ったり、銃撃つのが好き。</p>
      <p className='mb-2'>だいたいV睡してます！書き置き来てくれたらうれしー！！</p>
      <p className='mt-4'>
        アバターは
        <a 
          href='https://nanka-tsukurouyo.booth.pm/items/5787485' 
          className='text-blue-600 hover:underline'
          target='_blank' 
          rel='noopener noreferrer'
        >
          むんきちゃん
        </a>
        を使っています！！
      </p>
    </div>
  );
};