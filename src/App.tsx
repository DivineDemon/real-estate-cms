import { ModeToggle } from "./components/global/mode-toggle";

const App = () => {
  return (
    <div className="w-full flex items-center justify-center p-5">
      <h1 className="w-full text-center text-3xl font-bold">Home</h1>
      <ModeToggle />
    </div>
  );
};

export default App;
