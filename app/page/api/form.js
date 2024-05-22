// pages/api/form.js

import connectDB from "../../utils/connectDB";
import Formulaire from "../../models/Formulaire";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    const { fulltitle, description, slug } = req.body;

    if (!fulltitle || !description || !slug) {
      return res.status(400).json({ success: false, msg: ["Tous les champs sont requis."] });
    }

    try {
      const newForm = new Formulaire({
        fulltitle,
        description,
        slug,
      });

      await newForm.save();

      res.status(201).json({ success: true, msg: ["Projet ajouté avec succès."] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, msg: ["Une erreur est survenue."] });
    }
  } else {
    res.status(405).json({ success: false, msg: ["Méthode non autorisée."] });
  }
}
