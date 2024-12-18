import { FastifyReply, FastifyRequest } from "fastify";
import { GetService } from "@services/users/GetService";

class GetController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        const { id } = req.params as { id: string };
        const user = new GetService().execute(id);
        return await user;
    }
}

export { GetController }