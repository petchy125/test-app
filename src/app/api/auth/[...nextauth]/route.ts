import NextAuth from 'next-auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { auth } from '@/lib/firebase';

type Credential = {
  email: string;
  password: string;
};

export const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          (credentials as unknown as Credential).email || '',
          (credentials as unknown as Credential).password || ''
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch((error) => console.log(error));
      },
    }),
  ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
