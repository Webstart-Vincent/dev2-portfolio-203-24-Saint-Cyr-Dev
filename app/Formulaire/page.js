"use client"

import React from 'react';
import { CldUploadButton } from 'next-cloudinary';
import Header from '@/app/composants/headers';
import BgAnimation from '@/app/composants/BgAnimation';

const Formulaire = () => {
  return (
     
    <>
    <div className='h-screen'>  
      <div className="hidden lg:block absolute inset-0 background w-full h-full object-cover bg-hero-pattern"></div>
      <Header />

      <div className=''>
        <form action="dashboard/new" method="POST" className="mt-8">
            <div className="bg-[#dfdfdf] shadow-md rounded-md p-4">
                <h2 className="text-2xl font-bold mb-4">Créer un nouveau projet</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label for="title" className="block text-sm font-medium text-gray-700">Titre :</label>
                        <input type="text" id="title" name="title" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-5" />
                    </div>
                    <div>
                        <label for="slug" className="block text-sm font-medium text-gray-700">Slug :</label>
                        <input type="text" id="slug" name="slug" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-5" />
                    </div>
                    <div className="sm:col-span-2">
                        <label for="text" className="block text-sm font-medium text-gray-700">Texte :</label>
                        <textarea id="text" name="text" rows="4" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-5"></textarea>
                    </div>
                    <div>
                        <label for="description" className="block text-sm font-medium text-gray-700">Description SEO :</label>
                        <input type="text" id="description" name="description" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-5" />
                    </div>
                    <div>
                        <label for="seo_title" className="block text-sm font-medium text-gray-700">Title SEO :</label>
                        <input type="text" id="seo_title" name="seo_title" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-5" />
                    </div>
                    <div className="w-full bg-blue-500 text-white text-center font-bold py-3 px-2 rounded-md hover:bg-blue-600">
                      <CldUploadButton uploadPreset="<Upload Preset>" />
                    </div>
                </div>

                <div className="mt-4">
                    <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 px-2 rounded-md hover:bg-blue-600">Enregistrer</button>
                </div>

            </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Formulaire;

/*import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewProjectForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    text: '',
    seoDescription: '',
    seoTitle: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoyer les données au backend pour l'enregistrement dans la base de données MongoDB
      // Exemple avec fetch API
      const response = await fetch('mongodb+srv://ballymongodb:<y0HeOyJcc3MeOaCx>@cluster0.w3eapou.mongodb.net/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Rediriger vers la page de tableau de bord ou une autre page appropriée
        history.push('/dashboard');
      } else {
        // Gérer les erreurs
        console.error('Erreur lors de l\'enregistrement du projet');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
    }
  };

  return (
    <div>
      <h2>Créer un nouveau projet</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre :</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Slug :</label>
          <input type="text" name="slug" value={formData.slug} onChange={handleChange} required />
        </div>
        <div>
          <label>Texte :</label>
          <textarea name="text" value={formData.text} onChange={handleChange} required />
        </div>
        <div>
          <label>Description SEO :</label>
          <textarea name="seoDescription" value={formData.seoDescription} onChange={handleChange} />
        </div>
        <div>
          <label>Titre SEO :</label>
          <input type="text" name="seoTitle" value={formData.seoTitle} onChange={handleChange} />
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default NewProjectForm;*/
