import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
