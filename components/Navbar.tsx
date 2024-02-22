"use client";

import { navLinks } from "@/constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="bg-white sticky top-0">
      <nav className="flex justify-between items-center mx-auto max-w-[1440px] px-8 py-5">
        {/* Logo */}
        <div className="">
          <Link className="no-underline" href={"/"}>
            <h3 className="text-xl text-gray-900 font-bold">Omar.dev</h3>
          </Link>
        </div>

        <div>
          {/* Nav Link */}
          <ul className="hidden md:flex md:gap-8 md:mr-5">
            {navLinks.map((link) => (
              <Link
                href={link.href} key={link.key}
                className="no-underline text-md text-gray-900 hover:text-blue-500"
              >
                {link.label}
              </Link>
            ))}
          </ul>

          {/* Menu icon */}
          <div className="md:hidden">
            <Bars3Icon
              onClick={() => setMenu(!menu)}
              className="size-5 cursor-pointer hover:text-blue-500"
            />
          </div>

          <div className={menu ? "bg-white w-full h-screen fixed top-0 left-0 flex items-center" : "fixed left-[-100%]"}>
            <div className="w-screen h-3/4 flex justify-center">
              <XMarkIcon onClick={() => setMenu(!menu)}
                className="size-8 cursor-pointer hover:text-blue-500"
              />
              <ul className="flex flex-col -ml-12 mt-20 gap-8 text-center">
                {navLinks.map((link) => (
                  <Link href={link.href} key={link.key} onClick={() => setMenu(!menu)}
                    className="hover:text-blue-500 text-xl"
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>              
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
