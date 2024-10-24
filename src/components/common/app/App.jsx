import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CatalogPage from "../../../pages/catalogPage/CatalogPage";
import GameProfilePage from "../../../pages/gameProfilePage/GameProfilePage";
import NotFoundPage from "../../../pages/notFoundPage/NotFoundPage";
import Layout from "../layout/Layout";

export default function App() {
  const [gameCards, setgameCards] = useState([]);

  useEffect(() => {
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "dd054139admsh0ba150c40ea21dfp1f0668jsnd6c925a75ebc",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setgameCards(data))

      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout data={gameCards} />}>
          <Route index element={<CatalogPage data={gameCards} />}></Route>
          <Route path="gameProfilePage/:id" element={<GameProfilePage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

//крашится лого в профайле
//sidebar скрывается на кнопку
//поменять фильтр на чекпоинты
//закрытие фильтра и поисковика при нажатии на любое другое место на сайте
//работа фильтра, сортировки, поиска

//страница игры:
// индикатор загрузки при нажатии загрузить
// Если не получилось получить данные, необходимо сообщить пользователю

// адаптив
// роутинг
// Фреймворк UI
// Приложение должно запускаться по адресу localhost:3001 командой npm start
// Если карточка игры была открыта, то она должна быть доступна при последующих открытиях (перезагрузках) страницы без дополнительного запроса в течение 5 минут

// Учитывать, что список игр может содержать тысячи тайтлов
// При неудачном запросе должно быть три попытки повторного запроса
// При переходе со страницы на страницу запросы, относящиеся к старой странице, должны прерываться (отменяться/прекращаться)
// Бэкенд для хостинга статики и API для инкапсуляции внешних запросов на Node.JS
// Покрытие кода юнит-тестами
