import { LeftSide } from "@/features/leftSide";
import { RightSide } from "@/features/rightSide";
import { NextPage } from "next";

const Home = () => {
  return (
    <div className="bg-[url('/assets/bg_blur.png')] flex flex-col justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row shadow-2xl">
        <LeftSide />
        <div className="border-t md:border-t-0 md:border-l"></div>
        <RightSide />
      </div>
    </div>
  )
}

export default Home;
