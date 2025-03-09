import { Cot } from "@/components/Cot";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Head from "next/head"; // Import Head

export default function Home() {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16861373148"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16861373148');
          `}
        </script>
      </Head>
      <Header />
      <Hero />
      <Testimonials />
      <Cot />
      <Footer />
    </>
  );
}