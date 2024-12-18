import fastify from "fastify";
import cors from "@fastify/cors";
import { config } from "dotenv";
import { routes } from "./routes";

config();

const app = fastify({ logger: true });
const myPort = process.env.APP_PORT || 3333;

async function bootstrap() {
    await app.register(cors);
    await app.register(routes);

    try {
        app.listen({ port: Number(myPort) });
    } catch (error) {
        process.exit(1);
    }
}

bootstrap();