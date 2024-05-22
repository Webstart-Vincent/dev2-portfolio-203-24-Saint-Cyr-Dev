"use client";

import { useState } from "react";

export default function ContactForm() {
  const [fulltitle, setFulltitle] = useState("");
  const [description, setdescription] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Titre: ", fulltitle);
    console.log("description: ", description);

    const res = await fetch("app\api\auth\[...nextauth]\route.js", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fulltitle,
        description,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFulltitle("");
      setdescription("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="fulltitle">Titre</label>
          <input
            onChange={(e) => setFulltitle(e.target.value)}
            value={fulltitle}
            type="text"
            id="fulltitle"
            placeholder="Titre du Projets"
          />
        </div>


        <div>
          <label htmlFor="description">Description</label>
          <textarea
            onChange={(e) => setdescription(e.target.value)}
            value={description}
            className="h-32"
            id="description"
            placeholder="Description du projets..."
          ></textarea>
        </div>

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Send
        </button>
      </form>

      
    </>
  );
}