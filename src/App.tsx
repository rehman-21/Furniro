import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AppRoutes } from "./constant/Route";




function App() {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  );
}



export default App;





