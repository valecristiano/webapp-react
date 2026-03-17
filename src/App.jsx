import { BrowserRouter, Routes, Route } from "react-router";
import mainLayout from "../layout/mainLayout";
import HomePage from "./pages/homepage";
HomePage;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={mainLayout}>
          <Route path="/" Component={HomePage}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
