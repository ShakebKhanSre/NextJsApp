import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23lihDVcBnOPu5urEq",
      clientSecret: "0ef684c21270ffc5015384db15776d41e462c1ca",
    }),
  ],
};

export default NextAuth(authOptions);
