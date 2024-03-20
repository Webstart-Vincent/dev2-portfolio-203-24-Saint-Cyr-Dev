import React from 'react';
import Link from 'next/link';
import Header from '@/app/composants/headers';

const dashboard = () => {
  return (
     
    <>
    <body classNameName=" bg-[#d7aeff] font-sans">
        <div className='bg-[#7F00FF]'>
            <Header />
        </div>
        <div className="bg-white m-11">
            <h1 className="text-3xl font-bold mb-6">Liste de mes projets</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <li className="bg-white shadow-md rounded-md p-4">
                    <h2 className="text-xl font-bold mb-2">Projet 1</h2>
                    <p className="text-gray-700 mb-4">Description du projet 1</p>
                </li>
            </ul>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <li className="bg-white shadow-md rounded-md p-4">
                    <h2 className="text-xl font-bold mb-2">Projet 2</h2>
                    <p className="text-gray-700 mb-4">Description du projet 1</p>
                </li>
            </ul>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <li className="bg-white shadow-md rounded-md p-4">
                    <h2 className="text-xl font-bold mb-2">Projet 3</h2>
                    <p className="text-gray-700 mb-4">Description du projet 1</p>
                </li>
            </ul>
            <Link href="/Formulaire" className="block bg-blue-500 text-white font-bold rounded-md py-3 px-2 mt-6 hover:bg-blue-600">Créer un nouveau projet</Link>
        </div>
    </body>
    </>
  );
};

export default dashboard;
