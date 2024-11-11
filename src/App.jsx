import Navbar from "./components/Navbar";
import Artikel from "./pages/Article";
import Home from "./pages/Home";
import Program from "./pages/Program";
import Visi from "./pages/Visi";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Visi/>
      <Program/>
      <Artikel/>
    </>
  );
}

export default App;
