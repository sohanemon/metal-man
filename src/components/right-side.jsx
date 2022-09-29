import { useState } from "react";
import About from "./about";
import User from "./user";
const RightSide = () => {
  const [clicked, setClicked] = useState(45);
  return (
    <div className='col-span-3 p-8 text-gray-900'>
      <User />
      <div className='flex justify-between bg-blue-gray-50 px-5 py-2 rounded-lg my-7'>
        {about.map((el) => (
          <About {...el} key={el.id} />
        ))}
      </div>
      <h1 className='font-semibold'>Add a break</h1>
      <div className='flex justify-between px-4 py-3 my-7 bg-blue-gray-50 rounded-lg'>
        {timeout.map((el) => (
          <TimeButton
            clicked={clicked}
            setClicked={setClicked}
            {...el}
            key={el.time}
          />
        ))}
      </div>
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
    value: 75,
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
  return (
    <button
      onClick={() => setClicked(time)}
      className={`rounded-full font-semibold text-sm hover:bg-blue-gray-50  h-10 w-10 grid place-content-center ${
        clicked === time
          ? "text-white bg-blue-gray-600 hover:bg-blue-gray-600"
          : null
      }`}
      key={time}
    >
      {time}s
    </button>
  );
}
