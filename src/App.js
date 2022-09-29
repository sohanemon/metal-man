import { createContext, useState } from "react";
import LeftSide from "./components/left-side";
import RightSide from "./components/right-side";
import { ToastContainer } from "react-toastify";

const ExerciseTime = createContext();
function App() {
  const [exerciseTime, setExerciseTime] = useState(0);
  return (
    <ExerciseTime.Provider value={{ exerciseTime, setExerciseTime }}>
      <div className='grid grid-cols-12'>
        <LeftSide />
        <RightSide />
      </div>
      <ToastContainer />
    </ExerciseTime.Provider>
  );
}

export default App;
export { ExerciseTime };
