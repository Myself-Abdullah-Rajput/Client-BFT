import { Cot } from "@/components/Cot";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Testimonials />
      <Cot />
      <Footer />
    </>
  );
}
