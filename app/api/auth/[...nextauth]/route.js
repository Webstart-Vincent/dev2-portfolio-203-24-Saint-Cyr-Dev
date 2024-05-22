// Importation des modules nécessaires
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
/*import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";*/

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
      return user.isAdmin === process.env.ADMIN
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + '/dashboard'
    },
    async session({ session }) {
      // Gestion de la session
      return session
    },
  },
}

const authHandler = NextAuth(authOptions)
/*
export async function POST(req) {
  const { fulltitle, description } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fulltitle, description });

    return NextResponse.json({
      msg: ["Description sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].description);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send description."] });
    }
  }
}*/

export { authHandler as GET, authHandler as POST }
