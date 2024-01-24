import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    jwt: true, // Correction : Utilisez 'jwt: true' au lieu de 'strategy: 'jwt''
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

//export default handler // Correction : Utilisez 'export default handler' au lieu de 'export { handler as GET, handler as POST, authOptions }'
export const GET = handler.handlers.GET;
export const POST = handler.handlers.POST; 

//.......................................................................................
/*import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

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
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }*/

