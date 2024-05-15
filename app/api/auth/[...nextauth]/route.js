// Importation des modules nécessaires
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Configuration des options d'authentification
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      // Votre logique de vérification de l'utilisateur
      return user.isAdmin === process.env.ADMIN
    },
    async redirect({ url, baseUrl }) {
      // Redirection après l'authentification
      return baseUrl + '/dashboard'
    },
    async session({ session }) {
      // Gestion de la session
      return session
    },
  },
}

// Initialisation de NextAuth avec les options d'authentification
const authHandler = NextAuth(authOptions)

// Handler pour la requête POST
export async function POST(req) {
  // Extraction des données du corps de la requête
  const { fulltitle, description } = await req.json();

  try {
    // Connexion à la base de données
    await connectDB();
    // Création d'un nouvel objet Contact avec les données reçues
    await Contact.create({ fulltitle, description });

    // Réponse JSON en cas de succès
    return NextResponse.json({
      msg: ["Description sent successfully"],
      success: true,
    });
  } catch (error) {
    // Gestion des erreurs
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      // Construction d'une liste d'erreurs
      for (let e in error.errors) {
        errorList.push(error.errors[e].description);
      }
      console.log(errorList);
      // Réponse JSON en cas d'erreur de validation
      return NextResponse.json({ msg: errorList });
    } else {
      // Réponse JSON en cas d'erreur générale
      return NextResponse.json({ msg: ["Unable to send description."] });
    }
  }
}

// Exportation des handlers GET et POST pour NextAuth
export { authHandler as GET, authHandler as POST }
