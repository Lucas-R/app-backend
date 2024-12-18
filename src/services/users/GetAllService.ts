import { app } from "@utils/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export type UserProps = {
    id: string
}

class GetAllService {
    async execute() {
        const list: UserProps[] = [];
        const db = getFirestore(app);
        const querySnapshot = await getDocs(collection(db, "users"));

        querySnapshot.forEach((doc) => {
            list.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return list;
    }
}

export { GetAllService };