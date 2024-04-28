import React from 'react';
import Header from '@/app/composants/headers';
import BgAnimation from '@/app/composants/BgAnimation';
import Image from 'next/image';
import Link from 'next/link';


const Produit = () => {
  return (
    <>
    <div className=''>  
      <Header />
      <div className='flex justify-center items-center m-auto p-5'>
        <div>
          <div className="DevItems">
          <Image className='w-1/12 m-5 animate-ping img-left' alt="Description de l'image" src="/I8.png" width={300} height={300} />
            <Image className='w-1/6 m-5 animate-bounce' alt="Description de l'image" src="/I5.png" width={300} height={300} />
            <Image className='w-2/6 m-5 animate-bounce img-left' alt="Description de l'image" src="/I1.png" width={300} height={300} />
            <Image className='w-1/5 m-5 animate-ping  ' alt="Description de l'image" src="/I2.png" width={300} height={300} />
          </div>
        </div>
        <Image className='w-4/12' alt="Description de l'image" src="/imgpersonnage2.png" width={300} height={300} />
        <div>
          <div className="DevItems">
            <Image className='w-1/6 m-5 animate-bounce img-left' alt="Description de l'image" src="/I3.png" width={300} height={300} />
            <Image className='w-1/5 m-5 animate-ping  ' alt="Description de l'image" src="/I6.png" width={300} height={300} />
            <Image className='w-2/6 m-5 animate-bounce img-left' alt="Description de l'image" src="/I4.png" width={300} height={300} />
            <Image className='w-2/12 m-5 animate-bounce' alt="Description de l'image" src="/I7.png" width={300} height={300} />
          </div>
        </div>
      </div>


      
    </div>
    <div className=''>
      <div className=' justify-center items-center px-5 py-2 sm:px-32 xl:px-60 bg-gradient-to-b from-purple-700 to-indigo-800'>
        <div className='p-5 bg-white rounded-2xl m-5'>
          <div className="lg:flex m-5">
              <Image className=' rounded-2xl' alt="Logo Conception Graphique" src="/Logo.png" width={300} height={300} />
            <div className="p-2 px-5 leading-normal">
                  <h2 className="text-gray-900 font-Irish text-2xl sm:text-3xl lg:text-4xl mb-2">Graphiste Créatif avec 3 Ans d&aposExpérience</h2>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-Hammersmith">Graphiste depuis trois ans, j&aposai acquis une expérience variée dans la création visuelle, allant de la conception de logos percutants à la réalisation de mises en page élégantes pour divers supports de communication</p>
            </div>
          </div>
        </div>

        <div className='p-5 bg-white rounded-2xl m-5'>
          <div className="lg:flex m-5">
              <Image className=' rounded-2xl' alt="Logo Conception Graphique" src="/Logo.png" width={300} height={300} />
            <div className="p-2 px-5 leading-normal">
                  <h2 className="text-gray-900 font-Irish text-2xl sm:text-3xl lg:text-4xl mb-2">Graphiste Créatif avec 3 Ans d&aposExpérience</h2>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-Hammersmith">Graphiste depuis trois ans, j&aposai acquis une expérience variée dans la création visuelle, allant de la conception de logos percutants à la réalisation de mises en page élégantes pour divers supports de communication</p>
            </div>
          </div>
        </div>

      </div>
      <div className='bg-gradient-to-b from-indigo-800 to-purple-700'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 pb-12">
            <div>
                <h2 className="font-Irish text-3xl lg:text-4xl text-white text-center">Conception Graphique</h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mx-10">

                    <div className="shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-logo">
                      <a href="https://www.pinterest.fr/HelloCyr/">
                        <Image className=' rounded-2xl w-full ' alt="Logo Conception Graphique" src="/Logo.png" width={300} height={300} />
                      </a>
                    </div>
                    
                    <div className="shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-logo">
                      <a href="https://www.pinterest.fr/HelloCyr/affiche-web/">
                        <Image className=' rounded-2xl w-full ' alt="Logo Conception Graphique" src="/CG2.jpeg" width={300} height={300} />
                      </a>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-logo">
                      <a href="https://www.pinterest.fr/HelloCyr/hello-cyr/">
                        <Image className=' rounded-2xl w-full ' alt="Logo Conception Graphique" src="/CG3.jpeg" width={300} height={300} />
                      </a>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-logo">
                      <a href="https://www.pinterest.fr/HelloCyr/bonne-f%C3%AAte-des-p%C3%A8res//">
                        <Image className=' rounded-2xl w-full ' alt="Logo Conception Graphique" src="/CG4.jpeg" width={300} height={300} />
                      </a>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-logo">
                      <a href="https://www.pinterest.fr/HelloCyr/joyeux-anniversaire/">
                        <Image className=' rounded-2xl w-full ' alt="Logo Conception Graphique" src="/CG5.jpeg" width={300} height={300} />
                      </a>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-logo">
                      <a href="https://www.pinterest.fr/HelloCyr/flyer/">
                        <Image className=' rounded-2xl w-full ' alt="Logo Conception Graphique" src="/CG6.jpeg" width={300} height={300} />
                      </a>
                    </div>

                </div>
            </div>
        </div>
      </div>
      <div className='bg-gradient-to-b from-purple-700 to-indigo-800'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 pb-12">
          <div>
              <h2 className="font-Irish text-3xl lg:text-4xl text-white text-center">Projets webs et Mobile</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
                    <div className="shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-logo">
                      <a href="https://github.com/Saint-Cyr-Dev">
                        <Image className=' rounded-2xl w-full ' alt="Logo Conception Graphique" src="/GithLogo.png" width={300} height={300} />
                      </a>
                    </div>
                    
                    <div className="shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-logo">
                      <a href="/Produit">
                        <Image className=' rounded-2xl w-full ' alt="Logo Conception Graphique" src="/FarLogo.png" width={300} height={300} />
                      </a>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-logo">
                      <a href=" ">
                        <Image className=' rounded-2xl w-full ' alt="Logo Conception Graphique" src="/Logo.png" width={300} height={300} />
                      </a>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-logo">
                      <a href=" ">
                        <Image className=' rounded-2xl w-full ' alt="Logo Conception Graphique" src="/Logo.png" width={300} height={300} />
                      </a>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-logo">
                      <a href=" ">
                        <Image className=' rounded-2xl w-full ' alt="Logo Conception Graphique" src="/Logo.png" width={300} height={300} />
                      </a>
                    </div>

                    <div className="shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-img-logo">
                      <a href=" ">
                        <Image className=' rounded-2xl w-full ' alt="Logo Conception Graphique" src="/Logo.png" width={300} height={300} />
                      </a>
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
