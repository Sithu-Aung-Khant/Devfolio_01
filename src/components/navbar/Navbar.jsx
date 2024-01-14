import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Toggle from './Toggle';

const navigation = [
  { name: 'HOME', href: '#' },
  { name: 'ABOUT', href: '#' },
  { name: 'PROJECTS', href: '#' },
  { name: 'CONTACT', href: '#' },
];

const Navbar = ({ isDark, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('darkMode', isDark);
  }, [isDark]);

  return (
    <header className="bg-white dark:bg-black dark:text-dim_white">
      <nav
        className="flex items-center justify-between py-4 px-4 lg:py-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center">
          <a href="#">
            <img
              src="./svgs/9.svg"
              alt=""
              className="h-10 w-auto pe-1 pt-1 dark:text-dim_white"
            />
          </a>
          <div className="block">
            <div className="text-lg mt-1 leading-4 font-semibold">SITHU</div>
            <div className="text-xxs  font-semibold">AUNG KHANT</div>
          </div>
        </div>
        <div className="flex md:hidden items-center">
          <Toggle isDark={isDark} onToggle={toggleDarkMode} />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
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
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-dim_white"
            >
              {item.name}
            </a>
          ))}
          <Toggle isDark={isDark} onToggle={toggleDarkMode} />
        </div>
      </nav>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black p-4 sm:max-w-sm ">
          <div className="flex items-center justify-between dark:text-dim_white">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">S Logo</span>
                {isDark ? (
                  <img src="./1-1.png" alt="" className="h-8 w-auto pe-1" />
                ) : (
                  <img src="./2-1.png" alt="" className="h-8 w-auto pe-1" />
                )}
              </a>
              <div className="block text-start">
                <div className="text-xl mt-1 leading-5 font-semibold">
                  SITHU
                </div>
                <div className="text-xs  font-semibold">AUNG KHANT</div>
              </div>
            </div>
            <button
              type="button"
              className="rounded-md p-2.5 text-gray-700"
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
    </header>
  );
};

export default Navbar;
