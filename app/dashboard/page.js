import React from 'react';
import Link from 'next/link';
import Header from '@/app/composants/headers';
import BgAnimation from '@/app/composants/BgAnimation';


const dashboard = () => {
  return (
     
    <>
    <body classNameName="bg-[#ddbcff] font-sans">
        <div className='bg-[#7F00FF]'>
            <Header />
        </div>
        <div className='bg-[#7F00FF]'>
            <BgAnimation />
        </div>
        <div className=" m-11">
            <h1 className="text-3xl text-white font-bold mb-6">Liste de mes projets</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
                <div className="grid grid-cols-1 gap-4 m-4">
                    <div className="bg-white shadow-md rounded-md p-4">
                        <h2 className="text-xl font-bold mb-2">Projet 1</h2>
                        <p className="text-gray-700 mb-4">Description du projet 1</p>
                        <button  href="/Formulaire" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Decouvrir</button >
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 m-4">
                    <div className="bg-white shadow-md rounded-md p-4">
                        <h2 className="text-xl font-bold mb-2">Projet 2</h2>
                        <p className="text-gray-700 mb-4">Description du projet 1</p>
                        <button  href="/Formulaire" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Decouvrir</button >
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 m-4">
                    <div className="bg-white shadow-md rounded-md p-4">
                        <h2 className="text-xl font-bold mb-2">Projet 3</h2>
                        <p className="text-gray-700 mb-4">Description du projet 1</p>
                        <button  href="/Formulaire" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Decouvrir</button >
                    </div>
                </div>
                <button  href="/Formulaire" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-7">Créer un nouveau projet</button >
            </div>
        </div>
        
    </body>
    </>
  );
};

export default dashboard;
