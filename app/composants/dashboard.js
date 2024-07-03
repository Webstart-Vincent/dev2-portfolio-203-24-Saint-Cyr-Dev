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
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {formulaires.map((formulaire) => (
                    <div key={formulaire._id} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{formulaire.fulltitle}</h2>
                        <p className="text-gray-600 mb-2">{formulaire.slug}</p>
                        <p className="text-gray-700 mb-4">{formulaire.description}</p>
                        <p className="text-gray-500 text-sm">{new Date(formulaire.createdAt).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
