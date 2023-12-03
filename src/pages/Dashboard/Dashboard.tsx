import { useAuth } from "@clerk/clerk-react";
import { FC, useEffect } from "react";
import authenticateUser from "@functions/authenticateUser/authenticateUser";

const Dashboard: FC = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    const signInWithClerk = async () => {
      const token = (await getToken({
        template: "integration_firebase",
      })) as string;

      if (await authenticateUser(token)) {
        console.log("signed in");
      }
    };
    signInWithClerk();
  }, [getToken]);
  return <main>This is the dashboard.</main>;
};

export default Dashboard;
