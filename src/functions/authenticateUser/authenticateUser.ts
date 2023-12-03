import { getAuth } from "firebase/auth";
import { signInWithCustomToken } from "firebase/auth";

const authenticateUser = async (token: string) => {
  try {
    const auth = getAuth();
    await signInWithCustomToken(auth, token);
    return true;
  } catch (error) {
    console.error("Error authenticating:", error);
    return false;
  }
};

export default authenticateUser;
