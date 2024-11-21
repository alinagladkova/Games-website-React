import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { CatalogPage, gamesCatalogLoader } from "../../../pages/catalogPage/CatalogPage";
import { GameProfilePage, gamesProfileLoader } from "../../../pages/gameProfilePage/GameProfilePage";
import NotFoundPage from "../../../pages/notFoundPage/NotFoundPage";
import Layout from "../layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<CatalogPage />} loader={gamesCatalogLoader}></Route>
      <Route path="gameProfilePage/:id" element={<GameProfilePage />} loader={gamesProfileLoader}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Route>
  )
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
