import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Artikel from "./pages/Article";
import Calendar from "./pages/Calender";
import EventsSection from "./pages/Event";
import Home from "./pages/Home";
import Program from "./pages/Program";
import Testimonial from "./pages/Testimonial";
import Visi from "./pages/Visi";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Visi/>
      <Program/>
      <Artikel/>
      <Calendar/>
      <EventsSection/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default App;
