import React from 'react';
import Header from '@/app/composants/headers';
import BgAnimation from '@/app/composants/BgAnimation';
import Image from 'next/image';



export default function HomePage() {
  return (
    <>
    <BgAnimation />
    <div className='h-auto'>  
      <Header />
      <div className='sm:flex sm:gap-2'>
        <div className=' sm:w-3/5 lg:w-3/5	 xl:w-3/5	2xl:w-3/5 p-5 text-s sm:text-base	 lg:text-lg	 xl:text-xl		2xl:text-2xl'>
            <h1 className=" text-s xl:text-xl text-white font-bold mb-4">BIENVENUE SUR MON PORTFOLIO</h1>
            <p className=" text-white text-s">Graphiste et Étudiant en Deuxième Année de Bachelor.</p>
            <hr className=" h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className=" text-white text-s">Explorez une variété de projets captivants, allant de la conception graphique traditionnelle aux créations numériques innovantes. Chaque projet est une démonstration de la passion et de la compétence de Hello Cyr dans le domaine du design.</p>
        </div>
        <div className='w-4/5 sm:w-2/5 lg:w-2/5	 xl:w-2/6	2xl:w-2/6'>
            <Image className='w-2/3 sm:w-3/5 lg:w-4/7	 xl:w-2/7		2xl:w-2/7' src="/imgpersonnage1.jpg" width={500} height={500}/>
        </div>


      </div>
    </div>
    </>
  );
};