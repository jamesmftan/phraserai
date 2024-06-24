import connectMongoDB from "@/libs/mongodb";
import NextAuth from "next-auth/next";
import Users from "@/models/login";
import GoogleUsers from "@/models/google_account";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectMongoDB();
          const user = await Users.findOne({ email });
          if (!user) {
            throw new Error("Your account does not exist.");
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) {
            throw new Error("You have entered a wrong password.");
          }
          return {
            name: user.first_name + " " + user.last_name,
            email: user.email,
          };
        } catch (error) {
          throw new Error(error.message || "Something went wrong.");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLECLIENT_ID,
      clientSecret: process.env.GOOGLECLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { image, name, email } = user;
        try {
          await connectMongoDB();
          const googleUser = await GoogleUsers.findOne({ email });
          if (!googleUser) {
            const response = await fetch(process.env.GOOGLEACCOUNT_URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                image,
                name,
                email,
              }),
            });
            if (!response.ok) {
              throw new Error("Failed to create a new Google user account.");
            }
          }
          return user;
        } catch (error) {
          throw new Error(error.message || "Something went wrong.");
        }
      }
      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
