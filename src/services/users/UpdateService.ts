import { app } from "@utils/firebase";
import { doc, getDoc, getFirestore, serverTimestamp, updateDoc } from "firebase/firestore"; 


class UpdateService {
    async execute(id: string, data: {name: string, email: string}) {
        const db = getFirestore(app);
        const userRef = doc(db, "users", id)
        const user = await getDoc(userRef);
        if(user.exists()) {
            await updateDoc(userRef, {
                ...data,
                updated_at: serverTimestamp(),
            });

            return { 
                code: 200,
                message: `${id} updated` 
            }
        } else {
            return { 
                code: 404,
                message: "No such document!"
            }
        }
    }
}

export { UpdateService };