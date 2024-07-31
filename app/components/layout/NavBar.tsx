import Link from "next/link";
import ThemeToggler from "../utils/ThemeToggler";
import Logo from "../utils/Logo";
import { navItems } from "@/app/data/personal/navItems";
import { NavType } from "@/app/types/useProps";

function NavBar() {
  return (
    <div className=" w-full flex justify-center items-center dark:bg-[#121212]/95 rounded-b-xl bg-white/95 sticky top-0 z-50">
      <div className="container px-10 flex items-center justify-between m-4">
        <div className="relative">
          <div className="absolute w-12 top-2 bottom-1 bg-[linear-gradient(to_right,#F87BFF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-lg" />
          <Logo />
        </div>

        <nav className="flex">
          <div className=" justify-between items-center gap-6 hidden lg:flex mx-5">
            {navItems.map((navItem: NavType, idx: number) => (
              <Link key={`link=${idx}`} href={navItem.link}>
                <span className="opacity-80 hover:opacity-100 transition !cursor-pointer">
                  {navItem.name}
                </span>
              </Link>
            ))}
            {/* <ColorToggler /> */}
          </div>
          <ThemeToggler />
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
