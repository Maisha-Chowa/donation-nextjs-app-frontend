import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "irepair",
      name: "Credentials",
      type: "credentials",

      credentials: {
        email: { label: "email", type: "email", placeholder: "Your email..." },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req): Promise<any> {
        try {
          const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const { data } = await res.json();
          console.log(data);

          if (res.ok && data) {
            return {
              ...data,
            };
          }
        } catch (err: any) {
          throw new Error(err.message);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      console.log(token, user);
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }: { session: any; token: any }) {
      console.log(token, session);
      return {
        ...session,
        ...token,
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
