import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteService } from "@services/users/DeleteService";

class DeleteController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        const { id } = req.params as { id: string };
        const deleted = new DeleteService().execute(id);
        res.code(200).send(await deleted);
    }
}

export { DeleteController }