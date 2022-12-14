import { useEffect, useState } from "react";
import ExerciseCard from "./exercise-card";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("./data/fakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));

    return () => {};
  }, []);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
      {exercises.map((el) => (
        <ExerciseCard {...el} key={el.id} />
      ))}
    </div>
  );
};

export default Exercises;
