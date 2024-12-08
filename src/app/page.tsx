import { LeftSide } from "@/features/leftSide";
import { RightSide } from "@/features/rightSide";

const Home = () => {
  return (
    <div className="bg-[url('/assets/bg_blur.png')] flex flex-col justify-center items-center h-screen">
      <div className="w-1/2 flex shadow-2xl">
        <LeftSide />
        <div className="border"></div>
        <RightSide />
      </div>
    </div>
  )
}


export default Home;