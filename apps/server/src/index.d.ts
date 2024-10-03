import "dotenv/config";
import "./lib/mongo-driver";
declare const app: import("hono/hono-base").HonoBase<{}, {
    "/api/users/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                success: boolean;
                data: {
                    username: string;
                    email: string;
                    password: string;
                    createdAt: string;
                    updatedAt: string;
                    _id: string;
                } | null;
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
        $delete: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                success: boolean;
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
        $put: {
            input: {
                json: {
                    username?: string | undefined;
                    email?: string | undefined;
                    password?: string | undefined;
                };
            } & {
                param: {
                    id: string;
                };
            };
            output: {
                success: boolean;
                data: null;
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
    "/api/users": {
        $post: {
            input: {
                json: {
                    username: string;
                    email: string;
                    password: string;
                };
            };
            output: {
                success: boolean;
                data: {
                    _id: string;
                };
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
} & {
    "/api/test": {
        $get: {
            input: {};
            output: {
                success: boolean;
                data: string;
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
}, "/api">;
export type HonoApp = typeof app;
export {};
