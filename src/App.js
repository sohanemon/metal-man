import LeftSide from "./components/left-side";
import RightSide from "./components/right-side";

function App() {
  return (
    <div className='grid grid-cols-12'>
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
