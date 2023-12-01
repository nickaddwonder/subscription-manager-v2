import { BrowserRouter } from "react-router-dom";
import ClerkProviderWithRoutes from "@contexts/ClerkProviderWithRoutes/ClerkProviderWithRoutes";

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}

export default App;
