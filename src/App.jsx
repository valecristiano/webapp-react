import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../src/layout/MainLayout";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import ListPage from "./pages/ListPage";
import { LoaderProvider } from "./context/LoaderContext";
LoaderProvider;

export default function App() {
  return (
    <LoaderProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={MainLayout}>
            <Route index Component={HomePage}></Route>
            <Route path="/movies" Component={ListPage}></Route>
            <Route path=":id" Component={MoviePage}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </LoaderProvider>
  );
}
