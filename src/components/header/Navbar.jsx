import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'HOME', href: '#' },
  { name: 'ABOUT', href: '#' },
  { name: 'PROJECTS', href: '#' },
  { name: 'CONTACT', href: '#' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="">
        <nav>Hi</nav>
        <h1>I AM SITHU AUNG KHANT</h1>
      </header>
    </>
  );
};

export default Navbar;
