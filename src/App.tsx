import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import Welcome from "./Welcome";
import { BrowserRouter, useNavigate } from "react-router-dom";

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}

function App() {
  const navigate = useNavigate();
  return (
    <BrowserRouter>
      <ClerkProvider
        publishableKey={clerkPubKey}
        navigate={(to) => {
          console.log(to);
          navigate(to);
        }}
      >
        <SignedIn>
          <Welcome />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ClerkProvider>
    </BrowserRouter>
  );
}

export default App;
