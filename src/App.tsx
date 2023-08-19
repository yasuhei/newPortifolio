import "./App.css";
import { Body } from "./components/Body";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
}
