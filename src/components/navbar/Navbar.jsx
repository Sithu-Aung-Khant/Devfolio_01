import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import Switch from "./Switch";

const navigation = [
  { name: "HOME", href: "#intro" },
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
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
        className="fixed border-brown bottom-0 md:top-4 md:bottom-full flex justify-end md:justify-center md:items-center w-full lg:py-6 lg:px-8"
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
              className="h-8 w-8 dark:text-dim_white"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-dim_white hover:underline"
            >
              {item.name}
            </a>
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black sm:max-w-sm ">
          <div className="flex items-end justify-end dark:text-dim_white">
            <button
              type="button"
              className="fixed bottom-0 rounded-md p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-8 w-8 dark:text-dim_white"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-md px-3 py-2 text-center font-semibold leading-7 text-gray-900 dark:text-dim_white hover:bg-gray-50 dark:hover:bg-zinc-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Navbar;
