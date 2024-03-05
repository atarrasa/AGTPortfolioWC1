import About from "@/components/about";
import ContactMe from "@/components/contact";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import { DarkModeToggle } from "@/components/theme-toggler";

//Home page component, containing all the components
export default function Home() {
  return (
    <main className="pb-10">
      <DarkModeToggle />
      <Navbar />
      <Intro />
      <About/>
      <Services/>
      <ContactMe/>
      <Footer/>
    </main>
  );
}
