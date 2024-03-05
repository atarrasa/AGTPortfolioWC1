import { navBarElements } from "@/data";
import Link from "next/link";
///Navbar component
const Navbar = () => {
  return (
    <nav
      className="fixed z-20 flex flex-col items-center w-full 
        mt-auto justify-center h-max bottom-16"
    >
      <div
        className="flex items-center gap-2 justify-center
            px-4 py-1 dark:bg-white/10 bg-slate-800/10 background-blur-sm rounded-full"
      >
        {/*Array mapping over items in navBarElements Array of data component*/}
        {navBarElements.map((element) => (
          <div
            key={element.id}
            className="cursor-pointer hover:dark:bg-slate-800 hover:bg-slate-400 px-3 py-2 rounded-full transition duration-500"
          >
            <Link aria-label={element.arialabel} href={element.link}> {element.icon} </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
