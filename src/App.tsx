import { BrowserRouter } from "react-router-dom";
import ClerkProviderWithRoutes from "@contexts/ClerkProviderWithRoutes/ClerkProviderWithRoutes";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/firebase";

initializeApp(firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}

export default App;
