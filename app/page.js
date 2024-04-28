import React from 'react';
import Header from '@/app/composants/headers';
import BgAnimation from '@/app/composants/BgAnimation';
import Image from 'next/image';



export default function HomePage() {
  return (
    <>
    <div className='bg-[#7F00FF] h-screen		'>  
      <Header />
      
      <div className='sm:flex sm:gap-2'>
        <div className=' sm:w-3/5 lg:w-3/5	 xl:w-3/5	2xl:w-3/5 p-5'>
            <h1 className=" text-[25px] sm:text-4xl lg:text-6xl xl:text-7xl	 text-white font-Irish mb-4">BIENVENUE SUR MON PORTFOLIO</h1>
            <p className=" text-white text-[20px] sm:text-4xl lg:text-6xl xl:text-6xl font-Embed">Graphiste et Étudiant en Deuxième Année de Bachelor.</p>
            <hr className=" h-px my-[10px] bg-gray-200 border-0 dark:bg-gray-700" />
            <p className=" text-white text-[10px] font-Hammersmith sm:text-lg lg:text-xl xl:text-2xl">Explorez une variété de projets captivants, allant de la conception graphique traditionnelle aux créations numériques innovantes. Chaque projet est une démonstration de la passion et de la compétence de Hello Cyr dans le domaine du design.</p>
        </div>
        <div className='w-3/5 sm:w-3/5 base:w-4/6 lg:w-2/5	 xl:w-6/6	2xl:w-3/6'>
            <Image className='w-2/3 sm:w-3/5 base:w-5/6 lg:w-4/7	 xl:w-2/7		2xl:w-2/7' alt="Description de l'image" src="/imgpersonnage1.jpg" width={500} height={500}/>
        </div>


      </div>
    </div>
    </>
  );
};