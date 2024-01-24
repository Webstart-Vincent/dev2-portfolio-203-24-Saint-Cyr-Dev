import React from 'react';
import Link from 'next/link';

function HomePage() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#631D76]">Hello Cyr</span>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/" className="block py-2 px-3 text-[#631D76] bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Acceuil
                </Link>
              </li>
              <li>
                <Link href="/Experience" className="block py-2 px-3 text-[#631D76] rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Experience
                </Link>
              </li>
              <li>
                <Link href="-Etudes" className="block py-2 px-3 text-[#631D76] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Etudes
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="block py-2 px-3 text-[#631D76] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="p-10 text-center items-center justify-center ">
        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#FFA530] font-bold mb-8 animate-bounce pt-2">Bienvenue Chez Hello Cyr</h1>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold text-[#ff9a4c] pb-10">Graphiste et Étudiant en Deuxième Année de Bachelor</p>
        <p className="text-xl md:text-2xl md:p-4 lg:text-2xl lg:p-4 xl:text-2xl 2xl:text-2xl text-[#FFFFFF] mb-4 font-bold">
          Découvrez l&apos;univers créatif de Hello Cyr à travers <br />une collection diversifiée
          de travaux artistiques et graphiques.
        </p>
      </div>
      <div className="area z-0">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
    </div>
  );
}

export default HomePage;
