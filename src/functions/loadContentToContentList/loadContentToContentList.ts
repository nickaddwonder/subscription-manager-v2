import TvShow from "@/types/firestore/record/TvShow";
import Movie from "@/types/firestore/record/Movie";
import { Dispatch, SetStateAction } from "react";
import { doc, getDoc } from "firebase/firestore";
import { database } from "@/firebase/firebase";

interface loadContentToContentList {
  contentIds: string[];
  setContentList: Dispatch<SetStateAction<(TvShow | Movie)[]>>;
}

const loadContentToContentList = ({
  contentIds,
  setContentList,
}: loadContentToContentList) => {
  if (contentIds.length > 0) {
    contentIds.forEach(async (id) => {
      const docRef = doc(database, "contents", id);
      const docSnap = await getDoc(docRef);
      setContentList((list) => [
        ...list,
        { fid: id, ...docSnap.data() } as Movie | TvShow,
      ]);
    });
  }
};

export default loadContentToContentList;
