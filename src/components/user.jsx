import { Avatar } from "@material-tailwind/react";
import { ImLocation2 } from "react-icons/im";

function User() {
  return (
    <div className='flex gap-2 items-center '>
      <Avatar
        src='https://github.com/sohanemon/sohanemon/blob/main/images/me.png?raw=true'
        alt='avatar'
        variant='circular'
      />
      <div className='hidden md:block '>
        <p className='w-max font-semibold text-gray-900 text-xl '>Sohan Emon</p>
        <p className='text-gray-700 text-sm w-max flex items-center'>
          <ImLocation2 />
          Jhenaidaha, Bangladesh
        </p>
      </div>
    </div>
  );
}
export default User;
