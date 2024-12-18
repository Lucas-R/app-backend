import { app } from "@utils/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";

class GetService {
    async execute(id: string) {
        const db = getFirestore(app);
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);

        return docSnap.exists() 
        ? { id, ...docSnap.data() } 
        : { message: "No such document!"};
    }
}

export { GetService };