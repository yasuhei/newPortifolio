import "./App.css";
import { Header } from "./components/Navbar/Header";

import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <div className="bg-white h-screen">
        <Header />
      </div>
    </BrowserRouter>
  );
}
