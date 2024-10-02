import "dotenv/config";
import "./lib/mongo-driver";
declare const app: import("hono/hono-base").HonoBase<{}, {
    "/api/test": {
        $get: {
            input: {};
            output: "ok";
            outputFormat: "text";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
}, "/api">;
export type HonoApp = typeof app;
export {};
