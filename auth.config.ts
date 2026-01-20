import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

const providers = [];

if (process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET) {
    providers.push(
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        })
    );
}

if (process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET) {
    providers.push(
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        })
    );
}

// Fallback provider if no external providers are configured (Local Mode)
if (providers.length === 0) {
    providers.push(
        Credentials({
            id: "local",
            name: "Local Mode",
            credentials: {},
            async authorize(credentials) {
                // Return a mock user for local development
                return {
                    id: "local-user",
                    name: "Local Developer",
                    email: "dev@local.host",
                    image: "",
                };
            },
        })
    );
}

export default {
    providers,
} satisfies NextAuthConfig;