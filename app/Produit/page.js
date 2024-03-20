import React from 'react';
import Header from '@/app/composants/headers';
import BgAnimation from '@/app/composants/BgAnimation';
import Image from 'next/image';
import Link from 'next/link';


const Produit = () => {
  return (
    <>
    <body className="bg-gray-100 font-sans">
        <div className='bg-[#7F00FF]'>
            <Header />
        </div>
        <div className='bg-white '>
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-2">
                    <h1 className="text-2xl font-bold text-gray-800">Location de Voiture</h1>
                </div>
            </header>

            <main className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 flex">
                        <div className=""> 
                            <Image src="/About.png" alt="Description de l'image" width={500} height={500} />
                            <Image src="/Slider1.png" alt="Description de l'image" width={500} height={500} />
                            <Image src="/Slider2.png" alt="Description de l'image" width={500} height={500} /> </div>               </div>
                    <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
                        <h2 className="text-xl font-bold text-gray-800"> Création du Site Vitrine pour Farina Logistique </h2>
                        <p className="text-gray-600 mt-2"> Le projet de création d&aposun site vitrine pour Farina Logistique vise à offrir une plateforme en ligne attrayante et fonctionnelle pour promouvoir les services de location de véhicules de l&aposentreprise. L&aposobjectif principal est de fournir aux visiteurs toutes les informations essentielles sur les types de véhicules disponibles, les tarifs de location et les zones de service, tout en offrant une expérience utilisateur fluide et intuitive. Le site comprendra une page d&aposaccueil dynamique mettant en avant les services principaux, un catalogue détaillé des véhicules disponibles, un formulaire de demande de devis pour des besoins spécifiques, ainsi que des sections informatives sur les tarifs, les conditions générales et les contacts. Des éléments visuels de qualité, tels que des images et des vidéos, seront intégrés pour illustrer les services offerts et renforcer la crédibilité de l&aposentreprise.</p>
                    <div className="mt-8">
                        <h2 className="text-xl font-bold text-gray-800">Objectifs du Site :</h2>
                        <ul className="mt-2">
                            <li className="text-gray-600">Présenter de manière attrayante les services de location de véhicules offerts par Farina Logistique.</li>
                            <li className="text-gray-600">Fournir aux visiteurs des informations détaillées sur les types de véhicules disponibles, les tarifs de location, les zones de service, etc.</li>
                            <li className="text-gray-600">Offrir une expérience utilisateur fluide et intuitive pour faciliter la recherche d&aposinformations et la prise de contact.</li>
                            <li className="text-gray-600">Optimiser le référencement du site afin d&aposaméliorer sa visibilité dans les moteurs de recherche et attirer un trafic qualifié.</li>
                        </ul>
                    </div>
                        <div className="mt-4">
                            <Link href="https://farinalogistique.com/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Aller au Site</Link>
                        </div>
                    </div>
                </div>

                
            </main>
        </div>


    </body>









    
    </>
  );
};

export default Produit;
