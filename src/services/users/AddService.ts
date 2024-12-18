import { app } from "@utils/firebase";
import { addDoc, collection, getFirestore, serverTimestamp, setDoc } from "firebase/firestore"; 


class AddService {
    async execute(data: {name: string, email: string}) {
        const db = getFirestore(app);
        const user = await addDoc(collection(db, "users"), {
            ...data,
            updated_at: serverTimestamp(),
            created_at: serverTimestamp(),
        });
        return user.id;
    }
}

export { AddService };