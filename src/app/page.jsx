import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Portofolio from "@/components/home/Portofolio";
import AOSInit from "@/config/Aos";
import 'aos/dist/aos.css';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portofolio />
      <AOSInit/>
    </>
  );
}
