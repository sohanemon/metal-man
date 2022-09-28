import { useEffect, useState } from "react";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("./data/fakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));

    return () => {};
  }, []);
  return (
    <div>
      {exercises.map((el) => (
        <img src={el.image} alt='' />
      ))}
    </div>
  );
};

export default Exercises;
