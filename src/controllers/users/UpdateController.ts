import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateService } from "@services/users/UpdateService";

class UpdateController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        const { id } = req.params as { id: string }
        const data = req.body as { name: string, email: string }
        const  updateUser = new UpdateService().execute(id, data)
        res.code((await updateUser).code).send((await updateUser).message)
    }
}

export { UpdateController }