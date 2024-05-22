// next-auth.d.ts

import "next-auth";

declare module "next-auth" {
    interface Session {
        access_token: string;
        refresh_token: string;
        user: {
            name: string;
            email: string;
            username: string;
            role: string;
        };
    }

    interface User {
        name: string;
        email: string;
        username: string;
        role: string;
    }

    interface JWT {
        access_token: string;
        refresh_token: string;
        user: {
            name: string;
            email: string;
            username: string;
            role: string;
        };
    }

    interface SignInResponse {
        error: string | null;
        status: number;
        ok: boolean;
        url: string | null;
        user: User;
    }
}
