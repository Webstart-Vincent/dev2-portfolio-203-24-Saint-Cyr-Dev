import dbConnect from '../../lib/mongodb';
import Formulaire from '../../model/Formulaire';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await dbConnect();

  try {
    const json = await req.json();
    const formulaire = new Formulaire(json);
    await formulaire.save();
    console.log('Données enregistrées:', formulaire);
    return NextResponse.json({ success: true, data: formulaire }, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement des données:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function GET(req) {
  await dbConnect();

  try {
    const formulaires = await Formulaire.find({});
    return NextResponse.json({ success: true, data: formulaires }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
