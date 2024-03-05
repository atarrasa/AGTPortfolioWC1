import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Mail, Phone } from "lucide-react";
import Image from "next/image"

//Intro component
const Intro = () => {
  return (
<div className="px-12 py-0 md:px-40 md:py-28 max-w-3xl mx-auto">
  <div className="text-center" id="intro">
    <h1 className="text-5xl font-bold mb-2">
      Dynamics 365 Freelance
    </h1>
    <h2 className="text-3xl mt-10 mb-2">Up2202205</h2>
    <h3 className="text-3xl mt-10 mb-2">
      Looking for the{" "}
    </h3>
    <h3 className="text-3xl mt-2 mb-2">
      <strong className="font-bold ">right solution</strong>
    </h3>
    <h3 className="text-3xl mb-4">for your bussines or client?</h3>
    <h3 className="text-4xl font-bold"> Don&apos;t look further.</h3>
    <div className="flex items-center">
      <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
        <Link className={buttonVariants({})} href="#contact">
          <Mail className="mr-2"/> Contact me
        </Link>
        <Link className={buttonVariants({})} href="https://calendly.com/agtarrasa/1-1-introduction" target="_blank">
        <Phone className="mr-2"/> Book a call
        </Link>
      </div>
      
    </div>
    <div className="mt-5 flex justify-center">
    <Image className="rounded-full" src="/img/profile.png" alt="Picture of the author" width={100} height={1} />
    </div>



  </div>
</div>
  );
};

export default Intro;
