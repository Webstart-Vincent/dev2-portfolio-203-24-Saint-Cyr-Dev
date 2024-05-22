"use client";

import { useState } from "react";

export default function ContactForm() {
  const [fulltitle, setFulltitle] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Titre: ", fulltitle);
    console.log("Description: ", description);
    console.log("Slug: ", slug);

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fulltitle,
          description,
          slug,
        }),
      });

      const data = await res.json();
      setError(data.msg || []);
      setSuccess(data.success || false);

      if (data.success) {
        setFulltitle("");
        setDescription("");
        setSlug("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(["An error occurred while submitting the form."]);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Ajouter un Projet</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label htmlFor="fulltitle" className="block text-sm font-medium text-gray-700">
            Titre
          </label>
          <input
            onChange={(e) => setFulltitle(e.target.value)}
            value={fulltitle}
            type="text"
            id="fulltitle"
            placeholder="Titre du Projet"
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            id="description"
            placeholder="Description du projet..."
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-32"
          ></textarea>
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
            Slug
          </label>
          <input
            onChange={(e) => setSlug(e.target.value)}
            value={slug}
            type="text"
            id="slug"
            placeholder="Slug du Projet"
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {error.length > 0 && (
          <div className="bg-red-100 text-red-800 p-3 rounded-md">
            {error.map((err, index) => (
              <p key={index}>{err}</p>
            ))}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-800 p-3 rounded-md">
            Le projet a été ajouté avec succès !
          </div>
        )}

        <button
          className="bg-blue-600 text-white p-3 rounded-md font-bold hover:bg-blue-700"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
