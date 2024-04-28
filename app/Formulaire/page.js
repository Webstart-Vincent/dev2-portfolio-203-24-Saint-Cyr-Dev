
/*import React from 'react';
import React, { useRef } from 'react';*/

/*import { CldUploadButton } from 'next-cloudinary';
import Header from '@/app/composants/headers';
import BgAnimation from '@/app/composants/BgAnimation';*/

const Formulaire = () => {

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
