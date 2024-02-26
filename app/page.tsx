import Navbar from "@/components/navbar";
import { DarkModeToggle } from "@/components/toggle-theme";
import Image from "next/image";


export default function Home() {
  return (
    <main className="pb-40">
      <DarkModeToggle />
      <Navbar />

    </main>
  );
}
