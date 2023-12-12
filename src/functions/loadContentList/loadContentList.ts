import { Dispatch, SetStateAction } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import authenticateUser from "@functions/authenticateUser/authenticateUser";
import { database } from "@/firebase/firebase";
import { UserResource } from "@clerk/types";
import addContentList from "@functions/addContentList/addContentList";
import loadContentToContentList from "@functions/loadContentToContentList/loadContentToContentList";
import TvShow from "@customTypes/firestore/record/TvShow";
import Movie from "@customTypes/firestore/record/Movie";

interface loadContentList {
  token: string;
  user: UserResource;
  setContentListId: Dispatch<SetStateAction<string>>;
  setContentList: Dispatch<SetStateAction<(TvShow | Movie)[]>>;
}
const loadContentList = async ({
  token,
  user,
  setContentListId,
  setContentList,
}: loadContentList) => {
  if (await authenticateUser(token)) {
    try {
      const contentListQuery = await query(
        collection(database, "content_lists"),
        where("user_id", "==", user.id),
      );
      const querySnapshot = await getDocs(contentListQuery);
      if (querySnapshot.size > 0) {
        querySnapshot.forEach((doc) => {
          setContentListId(doc.id);
          loadContentToContentList({
            contentIds: doc.data().content,
            setContentList,
          });
        });
      } else {
        const doc = await addContentList({
          user_id: user.id,
          content: [],
        });
        if (doc.success) {
          setContentListId(doc.docRef!.id);
        }
      }
    } catch (error) {
      console.error("Failed to load content list:", error);
    }
  }
};

export default loadContentList;
