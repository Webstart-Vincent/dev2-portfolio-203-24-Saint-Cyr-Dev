import React from 'react';
import Header from '@/app/composants/headers';
import BgAnimation from '@/app/composants/BgAnimation';
import Image from 'next/image';
import Link from 'next/link';


const Produit = () => {
  return (
    <>
    <div className=''>  
      <div className="hidden lg:block absolute inset-0 background w-full h-full object-cover bg-hero-pattern justify-center items-center "></div>
      <BgAnimation />
      <Header />
      <div className='flex justify-center items-center m-auto p-5'>
        <div></div>
        <Image className='w-4/7 sm:w-3/8 lg:w-2/8	 xl:w-3/9		2xl:w-1/5 ' src="/imgpersonnage2.png" width={300} height={300} />
        <div></div>
      
      </div>

      
    </div>
    <div className=''>
      <div className=' justify-center items-center p-5 bg-gradient-to-b from-purple-700 to-indigo-800'>
        <div className="w-5/5 lg:max-w-full lg:flex m-5 mx-auto">
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-img-logo" title="Woman holding a mug">
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">Graphiste Créatif avec 3 Ans d&aposExpérience</div>
              <p className="text-gray-700 text-base">Graphiste depuis trois ans, j&aposai acquis une expérience variée dans la création visuelle, allant de la conception de logos percutants à la réalisation de mises en page élégantes pour divers supports de communication</p>
            </div>
          </div>
        </div>

        <div className="w-5/5 lg:max-w-full lg:flex m-5 mx-auto">
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-img-logo" title="Woman holding a mug">
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">Développeur Web Junior avec 1 An d&aposExpérience</div>
              <p className="text-gray-700 text-base">Fort d&aposun an d&aposexpérience, je suis un développeur web junior passionné, spécialisé dans les langages de programmation web tels que HTML, CSS et JavaScript, et désireux de relever de nouveaux défis passionnants dans le domaine.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-b from-indigo-800 to-purple-700'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 pb-12">
            <div>
                <h2 className="text-2xl font-extrabold text-white text-center">Creation Graphique</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
                    <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-logo">
            
                      <div className="absolute inset-0 bg-gray bg-opacity-10 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
                        <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                            <h3 className="text-center">
                                <Link href="https://www.pinterest.fr/HelloCyr/" className="text-white text-2xl font-bold text-center "><span className="absolute inset-0"></span></Link>
                          </h3>
                        </div>
                    </div>
                    <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-cg4">
                      <div className="absolute inset-0 bg-gray bg-opacity-10 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
                        <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                            <h3 className="text-center">
                                <Link href="https://www.pinterest.fr/HelloCyr/affiche-web/" className="text-white text-2xl font-bold text-center "><span className="absolute inset-0"></span></Link>
                          
                          </h3>
                        </div>
                    </div>
                    <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out">
                      <div className="absolute inset-0 bg-gray bg-opacity-10 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
                        <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                            <h3 className="text-center">
                                <Link href="https://www.pinterest.fr/HelloCyr/logo/" className="text-white text-2xl font-bold text-center "><span className="absolute inset-0"></span></Link>
                                <Image className='w-full h-64 bg' src="/logo1.png" width={550} height={550}/>
                          </h3>
                        </div>
                    </div>
                    <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-cg5">
                      <div className="absolute inset-0 bg-gray bg-opacity-10 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
                        <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                            <h3 className="text-center">
                                <Link href="https://www.pinterest.fr/HelloCyr/dessin-personnage/" className="text-white text-2xl font-bold text-center "><span className="absolute inset-0"></span></Link>
                          </h3>
                        </div>
                    </div>
                    <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-cg3">
                      <div className="absolute inset-0 bg-gray bg-opacity-10 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
                        <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                            <h3 className="text-center">
                                <Link href="https://www.pinterest.fr/HelloCyr/joyeux-anniversaire/" className="text-white text-2xl font-bold text-center "><span className="absolute inset-0"></span></Link>
                          </h3>
                        </div>
                    </div>
                    <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-cg6">
                      <div className="absolute inset-0 bg-gray bg-opacity-10 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
                        <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                            <h3 className="text-center">
                                <Link href="https://www.pinterest.fr/HelloCyr/" className="text-white text-2xl font-bold text-center "><span className="absolute inset-0"></span></Link>
                          </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='bg-gradient-to-b from-purple-700 to-indigo-800'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 pb-12">
          <div>
              <h2 className="text-2xl font-extrabold text-center text-white">Projets webs et Mobile</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
                  <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-ab1">
                    <div className="absolute inset-0 bg-gray bg-opacity-10 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
                      <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                          <h3 className="text-center">
                                <Link href="/Produit" className="text-white text-2xl font-bold text-center "><span className="absolute inset-0"></span></Link>
                          </h3>
                      </div>
                  </div>
                  <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-sg2">
                    <div className="absolute inset-0 bg-gray bg-opacity-10 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
                      <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                          <h3 className="text-center">
                                <Link href="/Produit" className="text-white text-2xl font-bold text-center "><span className="absolute inset-0"></span></Link>
                          </h3>
                      </div>
                  </div>
                  <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-sg3">
                    <div className="absolute inset-0 bg-gray bg-opacity-10 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
                      <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                          <h3 className="text-center">
                                <Link href="/Produit" className="text-white text-2xl font-bold text-center "><span className="absolute inset-0"></span></Link>
                          </h3>
                      </div>
                  </div>
                  <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-sg4">
                    <div className="absolute inset-0 bg-gray bg-opacity-10 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
                      <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                          <h3 className="text-center">
                                <Link href="/Produit" className="text-white text-2xl font-bold text-center "><span className="absolute inset-0"></span></Link>
                          </h3>
                      </div>
                  </div>
                  <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-sg5">
                    <div className="absolute inset-0 bg-gray bg-opacity-10 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
                      <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                          <h3 className="text-center">
                                <Link href="/Produit" className="text-white text-2xl font-bold text-center "><span className="absolute inset-0"></span></Link>
                          </h3>
                      </div>
                  </div>
                  <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-sg6">
                    <div className="absolute inset-0 bg-gray bg-opacity-10 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
                      <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                          <h3 className="text-center">
                                <Link href="/Produit" className="text-white text-2xl font-bold text-center "><span className="absolute inset-0"></span></Link>
                          </h3>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>









    
    </>
  );
};

export default Produit;
