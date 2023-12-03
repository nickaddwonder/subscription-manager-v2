import ContentList from "@customTypes/firestore/contentList";
import FirestoreReturn from "@customTypes/firestore/FirestoreReturn";
import { addDoc, collection } from "firebase/firestore";
import { database } from "@/firebase/firebase";

const addContentList = async (
  content_list: ContentList,
): Promise<FirestoreReturn> => {
  try {
    const docRef = await addDoc(
      collection(database, "content_lists"),
      content_list,
    );
    return { success: true, docRef };
  } catch (error) {
    console.error("Error adding document:", error);
    return { success: false, error: error as Error };
  }
};

export default addContentList;
