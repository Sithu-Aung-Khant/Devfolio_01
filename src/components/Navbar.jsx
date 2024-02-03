import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Dialog } from "@headlessui/react";
import {
  XMarkIcon,
  Squares2X2Icon,
  UserIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  PaperAirplaneIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import Switch from "./ui/Switch";

const nav_mobile = [
  { name: "Home", to: "intro", icon: HomeIcon },
  { name: "About", to: "about", icon: UserIcon },
  { name: "Skills", to: "skills", icon: CircleStackIcon },
  {
    name: "Projects",
    to: "projects",
    icon: WrenchScrewdriverIcon,
  },
  { name: "Contact", to: "contact", icon: PaperAirplaneIcon },
];
const nav_desktop = [
  { name: "Home", to: "intro" },
  { name: "About", to: "about" },
  {
    name: "Projects",
    to: "projects",
  },
  { name: "Contact", to: "contact" },
];

const Navbar = ({ isDark, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("darkMode", isDark);
  }, [isDark]);

  return (
    <>
      <nav
        className="fixed border-brown bottom-2 right-2 md:top-4 md:bottom-full flex justify-end md:justify-center md:items-center w-full md:py-4 lg:py-6 z-50"
        aria-label="Global"
      >
        <div className="flex items-center">
          <div className="block opacity-0">
            <div className="text-lg mt-1 leading-4 font-semibold">SITHU</div>
            <div className="text-xxs  font-semibold">AUNG KHANT</div>
          </div>
        </div>
        <div className="flex md:hidden items-center">
          <Switch isDark={isDark} onToggle={toggleDarkMode} />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Squares2X2Icon
              className="size-14 dark:text-dim_white"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-6">
          {nav_desktop.map((item) => (
            <Link
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              key={item.name}
              href={item.href}
              className="text-sm uppercase font-semibold leading-6 text-gray-900 dark:text-dim_white hover:underline"
            >
              {item.name}
            </Link>
          ))}
          <Switch isDark={isDark} onToggle={toggleDarkMode} />
        </div>
      </nav>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        {/* MOBILE NAVBAR */}
        <Dialog.Panel className="fixed bottom-0 z-50 w-full h-1/3 overflow-y-auto bg-white dark:bg-black sm:max-w-sm border-t border-brown rounded-t-lg">
          <div className="flex items-end justify-end dark:text-dim_white">
            <button
              type="button"
              className="fixed bottom-0 rounded-md p-4 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="size-14 dark:text-dim_white"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="">
            {/* MOBILE MENU */}
            <div className="grid grid-cols-3 pt-10">
              {nav_mobile.map((item) => (
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-center text-sm font-medium text-gray-900 dark:text-dim_white"
                >
                  <div className="flex flex-col">
                    <div className="mx-auto">
                      {React.createElement(item.icon, {
                        className: "size-7 dark:text-dim_white",
                        "aria-hidden": "true",
                      })}
                    </div>
                    <div className="py-2">{item.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Navbar;
