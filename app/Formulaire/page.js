'use client'

import { useState } from "react"

const Page = () => {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const onSubmit = async (event) => {
        

        try {
          event.preventDefault();
          setIsLoading(true);
          setError(null);
          setSuccess(false);

          const data = {
              fulltitle: title,
              slug: slug,
              description: description
          };
          console.log('donnéees envoyées', data)
            const response = await fetch('/api/form', { // Correction de l'URL de l'API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)   
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();
            console.log('Success:', result);
            setSuccess(true);
            // Optionally reset the form
            setTitle('');
            setSlug('');
            setDescription('');
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Créer un nouveau projet</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">Projet créé avec succès !</p>}
            <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
                <div className="w-full">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Titre
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={title}
                        onChange={({ target: { value } }) => setTitle(value)}
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                        Slug
                    </label>
                    <input
                        type="text"
                        name="slug"
                        id="slug"
                        className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={slug}
                        onChange={({ target: { value } }) => setSlug(value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-32"
                        value={description}
                        onChange={({ target: { value } }) => setDescription(value)}
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white p-3 rounded-md font-bold hover:bg-blue-700"
                    disabled={isLoading}
                >
                    {isLoading ? 'Envoi en cours...' : 'Envoyer'}
                </button>
            </form>
        </div>
    )
}

export default Page
