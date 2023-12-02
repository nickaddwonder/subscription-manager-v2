import { FC } from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "@pages/Home/Home";
import Dashboard from "@pages/Dashboard/Dashboard";
import Header from "@components/layouts/Header/Header";
import ProtectedRoutes from "@components/ProtectedRoutes/ProtectedRoutes";

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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </ClerkProvider>
  );
};

export default ClerkProviderWithRoutes;
