import { GetAllService } from "@services/users/GetAllService"

class GetAllController {
    async handle() {
        const list = new GetAllService().execute();
        return await list;
    }
}

export { GetAllController }