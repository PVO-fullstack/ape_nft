import { About } from "@/sections/About/About";
import { Arts } from "@/sections/Arts/Arts";
import { ContactUs } from "@/sections/ContactUs/ContactUs";
import { Faq } from "@/sections/Faq/Faq";
import { Hero } from "@/sections/Hero/Hero";
import { MindMap } from "@/sections/MindMap/MindMap";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MindMap />
      <Faq />
      <Arts />
      <ContactUs />
    </>
  );
}
