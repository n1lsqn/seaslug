import { NextPage } from 'next';

export const RightSide: NextPage = () => {
  return (
    <div className='bg-white rounded-b-xl md:rounded-r-xl md:rounded-l-none w-full md:w-1/2 p-4'>
      <p className='mb-3 text-lg md:text-base text-[#212121]'>2024/9/11 Join, /13 NU, /19 U, 10/7 KU, 11/2 TU</p>
      <p className='mb-3 text-lg md:text-base text-[#212121]'>ゆるーく遊んでます、チルワールド巡ったり、乗り物乗ったり！</p>
      <p className='mb-3 text-lg md:text-base text-[#212121]'>だいたいV睡してます！書き置き来てくれたらうれしー！！</p>
      <p className='mt-4 text-lg md:text-base text-[#212121]'>
        アバターは
        <a 
          href='https://nanka-tsukurouyo.booth.pm/items/5787485' 
          className='text-[#01689A] hover:underline'
          target='_blank' 
          rel='noopener noreferrer'
        >
          むんきちゃん
        </a>
        を使っています！！
      </p>
      <p className='mb-3 text-lg md:text-base text-[#212121]'>むんきちゃんはいいぞ🍩</p>
      <p className='mb-3 text-lg md:text-base text-[#212121]'>好きなもの: アジカン / King Gnu / ボカロ / Fallout Series / Death Stranding / 攻殻機動隊 ...etc</p>
      <p className='mb-3 text-lg md:text-base text-[#212121]'>本業はWeb系のエンジニアをしています、お仕事お待ちしております(大声)</p>
    </div>
  );
};