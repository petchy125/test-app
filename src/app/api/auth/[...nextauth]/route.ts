import NextAuth from 'next-auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { auth } from '@/lib/firebase';

type Credential = {
  email: string;
  password: string;
};

export const authOptions = {
  pages: {
    signIn: '/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials): Promise<any> {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            (credentials as unknown as Credential).email || '',
            (credentials as unknown as Credential).password || ''
          );

          if (userCredential.user) {
            return userCredential.user;
          }
        } catch (error) {
          console.error(error);
        }

        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
