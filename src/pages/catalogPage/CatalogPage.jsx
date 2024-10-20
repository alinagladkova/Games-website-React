import GamesList from "../../components/catalogPage/gameList/GamesList";
import Sidebar from "../../components/catalogPage/sidebar/Sidebar";

export default function CatalogPage({ data }) {
  return (
    <>
      <Sidebar data={data}></Sidebar>
      <GamesList data={data}></GamesList>
    </>
  );
}
