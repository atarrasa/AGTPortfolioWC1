import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {Linkedin, MailQuestion} from "lucide-react";



const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto">
      <Separator className="my-4" />
      <div className="flex justify-center items-center">
        <div className="flex md:gap-4 space-x-4  ">
        <p>Based in the Netherlands</p>
          <Link aria-label="email-me" href="mailto:agtarrasa@gmail.com">
          <MailQuestion />
          </Link>
          <Link aria-label="linkedin" href="https://www.linkedin.com/in/agtarrasa/" >
          <Linkedin />
          </Link>
        </div>
      </div>
      <div className="text-center md:mt-10">
        <Separator className="my-5 md:hidden" />
        <p>&copy; 2024 Dynamics 365 Freelance Up2202205</p>
      </div>
    </footer>
  );
};

export default Footer;
