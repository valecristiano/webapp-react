import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "./pages/homepage";
import MoviePage from "./pages/moviePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={MainLayout}>
          <Route index Component={HomePage}></Route>
          <Route path=":id" Component={MoviePage}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
