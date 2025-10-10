import { AppRoutes } from "./routes";
import "./App.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
const App=()=> {
  return (
    <>
    <BrowserRouter>
    <AuthContextProvider>
        <AppRoutes />
    </AuthContextProvider>
    </BrowserRouter>
    </>
  );
}



export default App;





