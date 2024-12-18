import { FastifyReply, FastifyRequest } from "fastify";
import { AddService } from "@services/users/AddService";

class AddController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        const data = req.body as { name: string, email: string }
        const list = new AddService().execute(data);
        return await list;
    }
}

export { AddController }