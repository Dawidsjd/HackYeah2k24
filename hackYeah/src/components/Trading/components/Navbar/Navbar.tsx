import React from 'react';
import { FloatingNav } from './FloatingNav'; // Popraw ścieżkę do komponentu FloatingNav


const Navbar = () => {
  const navItems = [
    {
      name: 'Trades',
      link: '/',
    },
    {
      name: 'P&L',
      link: '/',
    },
    {
      name: 'Positions',
      link: '/',
    },
  ];

  return (
    <div className="flex justify-between items-center ">
      

      
      <FloatingNav navItems={navItems} className="top-4 z-50 ml-[33em]" />

      
      {/* <IconUserFilled className="text-neutral-500 dark:text-white absolute right-8 top-8 cursor-pointer hover:text-yellow-300" /> */}
    </div>
  );
};

export default Navbar;