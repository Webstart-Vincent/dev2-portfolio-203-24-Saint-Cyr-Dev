'use client';

import React, { useState } from 'react';
import Header from '@/app/composants/headers';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        alert('Message envoyé avec succès!');
      } else {
        alert('Erreur lors de l\'envoi du message.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'envoi du message.');
    }
  };

  return (
    <div className='h-screen'>
      <Header />

      <div className='bg-white'>
        <div className='pt-12'>
          <h2 className="text-[#3F0777] font-Irish text-2xl sm:text-3xl lg:text-5xl text-center">Contactez Moi</h2>
        </div>
        <div className='md:flex sm:gap-2'>
          <div className="w-full py-8 lg:py-16 sm:px-16 mx-auto">
            <form onSubmit={handleSubmit} className="w-full mx-auto">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="votre Mail" required onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Objet</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Ajoutez l'objet de votre message" required onChange={handleChange} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre message</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Votre Message..." required onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="bg-[#3F0777] py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Envoyer votre message</button>
            </form>
          </div>

          <div className='w-10/12 p-8 md:pr-11 justify-center'>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Pour obtenir plus de détails sur mes services, mes missions ou obtenir un devis, n hésitez pas à me contacter afin que je puisse répondre à toutes vos questions et vous fournir lassistance dont vous avez besoin.</p>
            <div className='my-3 sm:my-9'>
              <hr className="h-px my-[10px] bg-gray-200 border-0 dark:bg-gray-700" />
              <p className="mb-2 lg:mb-2 font-normal text-gray-500 dark:text-gray-400 sm:text-xl">Tel. : 07 89 80 00 64</p>
              <p className="mb-2 lg:mb-2 font-normal text-gray-500 dark:text-gray-400 sm:text-xl">Mail. : Bjunior7802@gmail.com</p>
              <p className="mb-2 lg:mb-2 font-normal text-gray-500 dark:text-gray-400 sm:text-xl">Adresse. : 78620 lÉtang-la-Ville 3 Allée de la Niche</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
