import dbConnect from '../../lib/mongodb';
import Formulaire from '../../model/Formulaire';

export async function POST(req, res) {
  await dbConnect();

  try {
    console.log('Données reçues:', req.body);
    const formulaire = new Formulaire(req.body);
    await formulaire.save();
    console.log('Données enregistrées:', formulaire);
    res.status(201).json({ success: true, data: formulaire });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement des données:', error);
    res.status(400).json({ success: false, error: error.toString() });
  }
}

export async function GET(req, res) {
  await dbConnect();

  try {
    const formulaires = await Formulaire.find({});
    res.status(200).json({ success: true, data: formulaires });
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    res.status(400).json({ success: false, error: error.toString() }); 
  }
}
