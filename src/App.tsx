import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";

export function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}
