import { 
    FastifyInstance, 
    FastifyPluginOptions, 
    FastifyRequest, 
    FastifyReply 
} from "fastify";
import { AddController } from "@controllers/users/AddController";
import { GetAllController } from "@controllers/users/GetAllController";
import { GetController } from "@controllers/users/GetController";
import { DeleteController } from "@controllers/users/DeleteController";
import { UpdateController } from "@controllers/users/UpdateController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post("/users", async (req: FastifyRequest, res: FastifyReply) => {
        return new AddController().handle(req, res);
    });

    fastify.get("/users", async () => {
        return new GetAllController().handle();
    });

    fastify.get("/users/:id", async (req: FastifyRequest, res: FastifyReply) => {
        return new GetController().handle(req, res);
    });

    fastify.put("/users/:id", async (req: FastifyRequest, res: FastifyReply) => {
        return new UpdateController().handle(req, res);
    });

    fastify.delete("/users/:id", async (req: FastifyRequest, res: FastifyReply) => {
        return new DeleteController().handle(req, res);
    });
}