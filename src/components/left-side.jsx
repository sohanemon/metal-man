import { TbBarbell } from "react-icons/tb";
import { Typography } from "@material-tailwind/react";
import Exercises from "./exercises";
import MyAccordion from "./accordion";
import Footer from "./footer";
import { useEffect, useState } from "react";

function LeftSide() {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className='lg:col-span-8 xl:col-span-9 col-span-full sm:col-span-7 bg-blue-gray-50 p-10'>
      <header className=' font-semibold p-4'>
        <div className='flex items-center relative w-max'>
          <Typography
            variant={`${width > 500 ? "h1" : "h5"}`}
            color='blue-gray'
            textGradient
          >
            Metal Man Club
          </Typography>
          <TbBarbell
            className={`${
              width > 500
                ? "text-6xl left-[8rem] -top-10"
                : "text-3xl left-[50px] -top-[20px] "
            }  absolute  text-blue-gray-500`}
          />
        </div>
        <Typography variant={`${width > 500 ? "h4" : "h6"}`} color='gray'>
          Select todays exercises
        </Typography>
      </header>
      <Exercises />
      <h1 className='text-center text-4xl my-10 font-semibold text-blue-gray-600'>
        Q/A Section
      </h1>
      <MyAccordion />
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default LeftSide;
