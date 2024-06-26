import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className=" dark:bg-gray-900 z-10 text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white"> 
        <Link href="/">
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">Hello Cyr</span>
        </Link>
       
        <div className="hidden w-full md:block md:w-auto" id="navbar-default text-white">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border* rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-black-700 md:p-0  md:dark:text-black-500" aria-current="page">Acceuil</Link>
            </li>
            <li>
              <Link href="/experience" className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0  md:dark:hover:text-black-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projets</Link>
            </li>
            <li>
              <Link href="/Etude" className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0  md:dark:hover:text-black-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profil</Link>
            </li>
            <li>
              <Link href="/Contact" className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0  md:dark:hover:text-black-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
