import React from 'react';
import Header from '@/app/composants/headers';
import BgAnimation from '@/app/composants/BgAnimation';
import Image from 'next/image';



export default function HomePage() {
  return (
    <>
    <div className='h-screen'>  
      <div className="hidden lg:block absolute inset-0 background w-full h-full object-cover bg-hero-pattern"></div>

      <BgAnimation />

      <Header />
      <div className=" h-5/4 bg-cover bg-center flex items-center justify-center p-11">

        <div className="container mx-auto flex flex-col lg:flex-row relative h-auto">

          <div className="lg:w-1/2 lg:pl-8">
            <h1 className="text-2xl text-white font-bold mb-4">BIENVENUE SUR MON PORTFOLIO</h1>
            <p className="text-white">Graphiste et Étudiant en Deuxième Année de Bachelor.</p>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className="text-white">Explorez une variété de projets captivants, allant de la conception graphique traditionnelle aux créations numériques innovantes. Chaque projet est une démonstration de la passion et de la compétence de Hello Cyr dans le domaine du design.</p>
          </div>

          <div className="lg:w-1/2 lg:h-2s/2 lg:pl-8 w-100 h-100 mb-4 lg:mb-0 bg-imgpersonnage1">
            <Image className='w-2/5' src="/imgpersonnage1.jpg" width={280} height={380} />

          </div>
            </div>

      </div>
    </div>
    </>
  );
};