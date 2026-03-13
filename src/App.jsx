import "./App.css";
import Home from "./HOME/Home";
import Customcursor from "./COMPONENTS/CUSTOM CURSOR/Customcursor";
import Navbar from "./HOME/NAVBAR/Navbar";
function App() {
  return (
    <>
      <Customcursor />
      <div className="navBarMain">
        <Navbar />
      </div>
      <Home />
    </>
  );
}

export default App;
