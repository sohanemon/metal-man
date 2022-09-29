import { Typography } from "@material-tailwind/react";
import Exercises from "./exercises";

function LeftSide() {
  return (
    <div className='col-span-9 bg-blue-gray-50 p-10'>
      <header className=' font-semibold p-4'>
        <Typography variant='h1' color='blue-gray' textGradient>
          Metal Man Club
        </Typography>
        <Typography color='gray' variant='h4'>
          Select todays exercises
        </Typography>
      </header>
      <Exercises />
    </div>
  );
}
export default LeftSide;
