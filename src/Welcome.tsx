import { FC, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { database } from "./firebase/firebase";

const Welcome: FC = () => {
  useEffect(() => {
    const whatever = async () => {
      const docRef = doc(database, "content_lists", "6uml7boTWJgcR7lnP3la");
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
    };

    whatever();
  }, []);
  return <div>Welcome to logged in!</div>;
};

export default Welcome;
