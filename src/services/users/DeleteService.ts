import { app } from "@utils/firebase";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

class DeleteService {
    async execute(id: string) {
        const db = getFirestore(app);

        await deleteDoc(doc(db, "users", id));

        return { message: `${id} deleted!` }
    }
}

export { DeleteService };