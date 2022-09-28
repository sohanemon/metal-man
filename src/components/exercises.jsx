import { useEffect, useState } from "react";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("./data/fakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));

    return () => {};
  }, []);
  console.log(exercises);
  return <div></div>;
};

export default Exercises;
