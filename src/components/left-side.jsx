import { TbBarbell } from "react-icons/tb";
import { Typography } from "@material-tailwind/react";
import Exercises from "./exercises";
import MyAccordion from "./accordion";

function LeftSide() {
  return (
    <div className='lg:col-span-9 col-span-full bg-blue-gray-50 p-10'>
      <header className=' font-semibold p-4'>
        <div className='flex items-center relative w-max'>
          <Typography variant='h1' color='blue-gray' textGradient>
            Metal Man Club
          </Typography>
          <TbBarbell className='text-6xl  absolute left-[8rem] -top-10 text-blue-gray-500' />
        </div>
        <Typography color='gray' variant='h4'>
          Select todays exercises
        </Typography>
      </header>
      <Exercises />
      <h1 className='text-center text-4xl my-10 font-semibold text-blue-gray-600'>
        Q/A Section
      </h1>
      <MyAccordion />
    </div>
  );
}
export default LeftSide;
