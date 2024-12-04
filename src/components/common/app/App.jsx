import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { CatalogPage, gamesCatalogLoader } from "../../../pages/catalogPage/CatalogPage";
import { GameProfilePage, gamesProfileLoader } from "../../../pages/gameProfilePage/GameProfilePage";

import Layout from "../layout/Layout";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../../../pages/errorPage/ErrorPage";
import NotFoundPage from "../../../pages/notFoundPage/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<CatalogPage />} loader={gamesCatalogLoader}></Route>
      <Route path="gameProfilePage/:id" element={<GameProfilePage />} loader={gamesProfileLoader}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  ),
  { basename: "/Games-website-React" } // Укажите базовый путь
);

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
