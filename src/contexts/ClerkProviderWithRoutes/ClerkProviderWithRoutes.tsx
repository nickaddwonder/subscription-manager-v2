import { FC } from "react";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./../../pages/Home/Home";
import TestComponent from "../../pages/TestComponent/TestComponent";
import { RedirectToSignIn } from "@clerk/clerk-react";
import Dashboard from "./../../pages/Dashboard/Dashboard";

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}

const ClerkProviderWithRoutes: FC = () => {
  const navigate = useNavigate();
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => {
        console.log(to);
        navigate(to);
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestComponent />} />
        <Route
          path="/dashboard"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
};

export default ClerkProviderWithRoutes;
