'use client'

import { useEffect, useState } from "react";

const Dashboard = () => {
    const [formulaires, setFormulaires] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/form');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const result = await response.json();
                setFormulaires(result.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Chargement...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Titre</th>
                        <th className="py-2 px-4 border-b">Slug</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Date de création</th>
                    </tr>
                </thead>
                <tbody>
                    {formulaires.map((formulaire) => (
                        <tr key={formulaire._id}>
                            <td className="py-2 px-4 border-b">{formulaire.fulltitle}</td>
                            <td className="py-2 px-4 border-b">{formulaire.slug}</td>
                            <td className="py-2 px-4 border-b">{formulaire.description}</td>
                            <td className="py-2 px-4 border-b">{new Date(formulaire.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
