"use client"
import React, { useState, useEffect } from 'react';

export default function GalleryPage() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/formdata");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Galerie</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formData.map((item, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-2">{item.fulltitle}</h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
