import Clients from "../components/Clients";
import Helps from "../components/Helps";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Quote from "../components/Quote";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Helps />
      <Testimonials />
      <Quote />
    </>
  );
}
