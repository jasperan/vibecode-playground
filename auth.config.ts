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

// Fail closed in production: when AUTH_SECRET is unset the secret stays undefined and
// Auth.js refuses to sign or verify sessions. The public fallback is development-only.
const secret =
    process.env.AUTH_SECRET ||
    (process.env.NODE_ENV !== "production" ? "local-development-secret" : undefined);

export default {
    providers,
    secret,
} satisfies NextAuthConfig;