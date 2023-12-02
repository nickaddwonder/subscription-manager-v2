import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const ProtectedRoutes: FC<Props> = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default ProtectedRoutes;
