import styles from "./notFoundPage.module.scss";
import cn from "classnames";
import Button from "../../components/ui/button/Button";
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className={cn(styles["notFound-page"])}>
      <div className={cn(styles["notFound-page__back"])}>
        <Button use="back" icon={<LuArrowLeft />} handler={() => navigate("/", { replace: true })}></Button>
      </div>
      <h1 className={cn(styles["notFound-page__alert"])}>The game is not found.</h1>
    </div>
  );
}
