import { Button } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ExerciseTime } from "../App";
import {
  addBreakTimeToLS,
  getBreakTimeFromLS,
} from "../utilities/local-storage";
import About from "./about";
import User from "./user";
const RightSide = () => {
  const [breakTime, setBreakTime] = useState(getBreakTimeFromLS());

  return (
    <div className='lg:col-span-4 sm:col-span-5 xl:col-span-3 col-span-full p-4 lg:p-8 sm:sticky top-0 h-screen text-gray-900 order-first sm:order-1 lg:order-first xl:order-1 '>
      <User />
      <div className='flex justify-evenly  lg:justify-between bg-blue-gray-50 px-5 py-2 rounded-lg my-7'>
        {about.map((el) => (
          <About {...el} key={el.id} />
        ))}
      </div>
      <h1 className='font-semibold'>Add a break</h1>
      <div className='flex  items-center  justify-between px-4 py-3 my-7 bg-blue-gray-50 rounded-lg'>
        {timeout.map((el) => (
          <TimeButton
            clicked={breakTime}
            setClicked={setBreakTime}
            {...el}
            key={el.time}
          />
        ))}
      </div>
      <Details breakTime={breakTime} />
      <Button
        onClick={() =>
          toast.success("Congrats, Your are a Metal Man", {
            position: "top-left",
            hideProgressBar: true,
            closeButton: false,
            icon: "🎉",
          })
        }
        color='blue-gray'
        className='active:scale-x-95  w-full'
      >
        Activity Completed
      </Button>
    </div>
  );
};

export default RightSide;

const timeout = [
  { time: 10 },
  { time: 20 },
  { time: 30 },
  { time: 45 },
  { time: 60 },
];
const about = [
  {
    id: 1,
    value: 62,
    unit: "kg",
    type: "weight",
  },
  {
    id: 2,
    value: 5.4,
    unit: "ft",
    type: "Height",
  },
  {
    id: 3,
    value: 24,
    unit: "yrs",
    type: "Age",
  },
];

function TimeButton({ time, clicked, setClicked }) {
  const handleClick = () => {
    setClicked(time);
    addBreakTimeToLS(time);
  };
  return (
    <button
      onClick={handleClick}
      className={`rounded-full font-semibold text-sm  h-10 w-10 grid place-content-center ${
        clicked === time
          ? "text-white bg-blue-gray-600 hover:bg-blue-gray-600"
          : "text-gray-900 bg-white hover:bg-white"
      }`}
      key={time}
    >
      {time}s
    </button>
  );
}

function Details({ breakTime }) {
  const { exerciseTime } = useContext(ExerciseTime);

  const divStyle =
    "flex justify-between p-3 tracking-wider my-4 bg-blue-gray-50 rounded-md text-sm";
  return (
    <>
      <h1 className='font-semibold'>Exercise Details</h1>
      <div className={divStyle}>
        <p className='font-semibold'>Exercise time</p>
        <span className='text-gray-600'>{exerciseTime || 0} seconds</span>
      </div>
      <div className={divStyle}>
        <p className='font-semibold'>Break time</p>
        <span className='text-gray-600'>{breakTime || 0} seconds</span>
      </div>
    </>
  );
}
