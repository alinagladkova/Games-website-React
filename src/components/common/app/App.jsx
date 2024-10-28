import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { CatalogPage, gamesCatalogLoader } from "../../../pages/catalogPage/CatalogPage";
import { GameProfilePage, gamesProfileLoader } from "../../../pages/gameProfilePage/GameProfilePage";
import NotFoundPage from "../../../pages/notFoundPage/NotFoundPage";
import Layout from "../layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<CatalogPage />} loader={gamesCatalogLoader}></Route>
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

//крашится лого в профайле

//если открыт поисковик, то при нажатии на sort кнопку, он закрывается, сделать это невозможным
//закрытие фильтра и поисковика при нажатии на любое другое место на сайте
//работа фильтра

//страница игры:
// индикатор загрузки при нажатии загрузить
// Если не получилось получить данные, необходимо сообщить пользователю

// адаптив
// Фреймворк UI
// Приложение должно запускаться по адресу localhost:3001 командой npm start
// Если карточка игры была открыта, то она должна быть доступна при последующих открытиях (перезагрузках) страницы без дополнительного запроса в течение 5 минут

// Учитывать, что список игр может содержать тысячи тайтлов
// При неудачном запросе должно быть три попытки повторного запроса
// При переходе со страницы на страницу запросы, относящиеся к старой странице, должны прерываться (отменяться/прекращаться)
// Бэкенд для хостинга статики и API для инкапсуляции внешних запросов на Node.JS
// Покрытие кода юнит-тестами
