import { AppRoutes } from "../src/routes";
import "./App.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";




const App=()=> {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  );
}



export default App;





