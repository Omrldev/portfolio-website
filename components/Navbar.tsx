"use client";

import { navLinks } from "@/constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import cslx from "clsx";

const Navbar = () => {
  const [menuOpen, setMenu] = useState(false);

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
              onClick={() => setMenu(true)}
              className="size-5 cursor-pointer hover:text-blue-500"
            />
          </div>
        </div>
        {/* Close icon */}
        <div
          className={cslx(
            "fixed backdrop-blur-md bg-black/50 top-0 right-0 h-full w-screen -translate-x-full",
            menuOpen && "translate-x-0"
          )}
        >
          <div className="bg-white absolute h-screen w-60 flex flex-col gap-16 p-10">
            <XMarkIcon
              onClick={() => setMenu(false)}
              className="size-6 cursor-pointer hover:text-blue-500 mt-10 mx-auto"
            />
            <ul className="flex flex-col gap-10 mx-auto">
              {navLinks.map((link) => (
                <Link
                  href={link.href} key={link.key}
                  className="no-underline text-gray-900 hover:text-blue-500 text-lg text-center"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
