import React from 'react';
import Header from '@/app/composants/headers';
import BgAnimation from '@/app/composants/BgAnimation';
import Image from 'next/image';


const EtudePage = () => {
  return (
     
    <>
    <div className=''>  
      <Header />

      <div className='sm:flex sm:gap-2'>
        <div className=' w-full p-5 xl:mt-14'>
            <h1 className=" text-[40px] sm:text-5xl lg:text-6xl xl:text-7xl	 text-white font-Irish mb-4 sm:mb-0 lg:mb-4">Bally Niouproust Saint Cyr Junior</h1>
            <hr className=" h-px my-[10px] bg-gray-200 border-0 dark:bg-gray-700 sm:my-16" />
            <p className=" text-white text-[15px] font-Hammersmith sm:text-xl xl:text-2xl">Je suis un developpeur web plein d enthousiasme qui excelle dans lexploration de diverses technologies et styles de developpement. Actuellement en deuxieme
                annee de bachelor, j allie une solide comprehension des principes fondamentaux du developpement web a une creativite debordante.</p>
        </div>
        <div className='w-full sm:w-10/12 p-5'>
          <Image className='w-full m-2' alt="Description de l'image" src="/imgpersonnage4.png" width={300} height={300}/>
        </div>
      </div>

      <div className=' justify-center items-center px-5 py-2 sm:px-32 xl:px-60 bg-gradient-to-b from-purple-700 to-indigo-800'>
        <div className='p-5 bg-white rounded-2xl m-5'>
          <div><h2 className="text-[#3F0777] font-Irish text-2xl sm:text-3xl lg:text-5xl m-6 text-center">EXPERIENCE PROFESSIONNEL</h2></div>
          <div className="lg:flex m-5">
              <Image className=' rounded-2xl' alt="Logo Conception Graphique" src="/EX1.png" width={300} height={300} />
            <div className="p-2 sm:px-6 leading-normal">
                  <h2 className="text-[#3F0777] font-Irish text-2xl sm:text-3xl lg:text-4xl mb-2">Agent Recenseurs</h2>
                  <p className="text-gray-700 text-sm sm:text-base font-Hammersmith"><strong>Au compte du BTPR (septembre 2021  – decembre 2021)</strong></p>
                  <p className="text-gray-700 text-sm sm:text-base font-Hammersmith">L agent recenseur a pour mission de collecter differentes donnees aupres de la population.
                      <br />- Sensibilisee les populations sur l importance du denombrement et des donnees recolter.
                      <br />- Collecter les donnees demographiques sur la population.
                      <br />- Visiter les menages assignes pour mener des entretiens.
                      <br />- Verifier et enregistrer des informations avec precision.
                      <br />- Signaler tout probleme ou obstacle rencontre pendant le recensement.
                      <br />- Assurer un compte rendu precis des resultats</p>
            </div>
          </div>
          <hr></hr>
          <div className="lg:flex m-5">
              <Image className=' rounded-2xl' alt="Logo Conception Graphique" src="/EX2.png" width={300} height={300} />
            <div className="sm:p-2 sm:px-6 leading-normal">
                  <h2 className="text-[#3F0777] font-Irish text-2xl sm:text-3xl lg:text-4xl mb-2">Graphiste</h2>
                  <p className="text-gray-700 text-sm sm:text-base font-Hammersmith"><strong>Au compte de Frantaye Service, Imprimerie et Agence de communication. (Mars 2022 – Juillet 2022)</strong></p>
                  <p className="text-gray-700 text-sm sm:text-base font-Hammersmith"><br />- creation et la realisation de supports de communication.
                    <br />- Gerer la bibliotheque image et conception graphique.
                    <br />- Suivre et contrôler les etapes de la chaîne graphique (interne ou externe)
                    <br />- Creation et gestion de page Facebook
                    <br />- Creation de contenu pour les medias sociaux
                    <br />- Creation d identite visuelle et Retouche d images
                    <br />- Conception de sites web
                    <br />- Preparation de supports de communication imprimes
                    <br />- Impression des supports de communication</p>
            </div>
          </div>
          <hr></hr>
          <div className="lg:flex m-5">
              <Image className=' rounded-2xl' alt="Logo Conception Graphique" src="/EX3.png" width={300} height={300} />
            <div className="p-2 sm:px-6 leading-normal">
                  <h2 className="text-[#3F0777] font-Irish text-2xl sm:text-3xl lg:text-4xl mb-2">Graphiste</h2>
                  <p className="text-gray-700 text-sm sm:text-base font-Hammersmith"><strong>Au compte de EKF Service, Imprimerie et Agence de communication. (Août 2022 – Septembre 2023)</strong></p>
                  <p className="text-gray-700 text-sm sm:text-base font-Hammersmith"><br />- creation et la realisation de supports de communication.
                    <br />- Gerer la bibliotheque image et conception graphique.
                    <br />- Suivre et contrôler les etapes de la chaîne graphique (interne ou externe)
                    <br />- Creation et gestion de page Facebook
                    <br />- Creation de contenu pour les medias sociaux
                    <br />- Creation d identite visuelle et Retouche d images
                    <br />- Conception de sites web
                    <br />- Preparation de supports de communication imprimes
                    <br />- Impression des supports de communication</p>
            </div>
          </div>
        </div>

      </div>

      <div className=' bg-gradient-to-b from-indigo-800 to-purple-700 sm:pt-8'>
        <h2 className='text-[#fff] font-Irish text-2xl sm:text-3xl lg:text-5xl text-center'>PARCOURS SCOLAIRE</h2>
        <div className='md:flex sm:gap-2'>
          <div className='w-6/12 p-5'>
            <Image className='img-left w-full m-2' alt="Description de l'image" src="/imgpersonnage5.png" width={300} height={300}/>
          </div>
          <div className=' w-10/12 p-8 md:pr-11 justify-center	'>
            <div className='my-3 sm:my-9'>
              <h3 className=" text-[15px] sm:text-2xl lg:text-3xl	 text-white font-Irish  mb-4 sm:mb-0 lg:mb-4">2024 (En Cours) </h3>
              <hr className=" h-px my-[10px] bg-gray-200 border-0 dark:bg-gray-700" />
              <p className=" text-white text-[20px] font-Hammersmith sm:text-2xl">Bachelor en developpement web et mobile full-stack - WEBSTART.</p>
            </div>
            <div className='my-3 sm:my-9'>
              <h3 className=" text-[15px] sm:text-2xl lg:text-3xl	 text-white font-Irish  mb-4 sm:mb-0 lg:mb-4">2022 </h3>
              <hr className=" h-px my-[10px] bg-gray-200 border-0 dark:bg-gray-700" />
              <p className=" text-white text-[20px] font-Hammersmith sm:text-2xl">Licence en reseaux et securite informatique - Universite Virtuelle de Côte D ivoire.</p>
            </div>
            <div className='my-3 sm:my-9'>
              <h3 className=" text-[15px] sm:text-2xl lg:text-3xl	 text-white font-Irish  mb-4 sm:mb-0 lg:mb-4">2018 </h3>
              <hr className=" h-px my-[10px] bg-gray-200 border-0 dark:bg-gray-700" />
              <p className=" text-white text-[20px] font-Hammersmith sm:text-2xl">BAC D (Scientifique) - Groupe Scolaire Larousse</p>
            </div>
            <div className='my-3 sm:my-9'>
              <h3 className=" text-[15px] sm:text-2xl lg:text-3xl	 text-white font-Irish  mb-4 sm:mb-0 lg:mb-4">2015</h3>
              <hr className=" h-px my-[10px] bg-gray-200 border-0 dark:bg-gray-700" />
              <p className=" text-white text-[20px] font-Hammersmith sm:text-2xl">BEPC - College Louis Lumiere</p>
            </div>
          </div>
        </div>
        
      </div>

      

    </div>
    </>
  );
};

export default EtudePage;
