import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ToTopButton from "./components/ToUp";
import About from "./pages/About";
import Artikel from "./pages/Article";
import Calendar from "./pages/Calender";
import EventsSection from "./pages/Event";
import Home from "./pages/Home";
import Program from "./pages/Program";
import Testimonial from "./pages/Testimonial";
import Visi from "./pages/Visi";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    once: false,
  });

  return (
    <>
      <ToTopButton />
      <Navbar />
      <Home />
      <About />
      <Visi />
      <Program />
      <EventsSection />
      <Calendar />
      <Artikel />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
