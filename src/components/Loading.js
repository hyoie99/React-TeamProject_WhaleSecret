import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/loading_style.module.css";

function Loading() {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("/ghost_page/result");
    }, 1500);
  };

  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className={styles.main_page}>
      <div>
        <h1 className={styles.title}>LOADING</h1>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}

export default Loading;
