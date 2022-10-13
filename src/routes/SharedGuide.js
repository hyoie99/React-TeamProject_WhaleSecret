import { Link } from "react-router-dom";
import styles from "../css/trans_style.module.css";
import bg from "../css/bg_style.module.css";

function Translate() {
  return (
    <div className={bg.main_page}>
      <div className={styles.main_div}>
        <div className={styles.guide_div}></div>
        <div className={styles.btns_div}>
          <Link to="/ghost_page/explain">
            <button className={styles.btn_back}>고스부호 만들기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Translate;
