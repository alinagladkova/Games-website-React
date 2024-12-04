import cn from "classnames";
import styles from "./errorPage.module.scss";
import Button from "../../components/ui/button/Button";
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function ErrorPage({ error, resetErrorBoundary }) {
  const navigate = useNavigate();
  return (
    <div className={cn(styles["error-page"])} role="alert">
      <div className={cn(styles["error-page__back"])}>
        <Button use="back" icon={<LuArrowLeft />} handler={() => navigate("/", { replace: true })}></Button>
      </div>
      <h1 className={cn(styles["error-page__alert"])}>Something went wrong:</h1>
      <pre className={cn(styles["error-page__desc"])}>{error.message}</pre>
    </div>
  );
}
