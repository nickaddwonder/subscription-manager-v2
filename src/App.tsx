import { BrowserRouter } from "react-router-dom";
import ClerkProviderWithRoutes from "./contexts/ClerkProviderWithRoutes/ClerkProviderWithRoutes";

// const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
// if (!clerkPubKey) {
//   throw new Error("Missing Publishable Key");
// }

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}

export default App;
