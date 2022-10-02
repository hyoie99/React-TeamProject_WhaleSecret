import { Link } from "react-router-dom";
import styles from "../css/ghost_style.module.css";

function Ghost() {
  return (
    <div className={styles.main_page}>
      <div className={styles.ghost_story_des}>
        <h1> 스토리 설명 </h1>
      </div>
      <img
        className={styles.ghost_whale_img}
        alt=""
        src={require("../icon/main_whale.png")}
      />
      <div className={styles.ghost_btns}>
        <Link to="/ghost_page/translate">
          <button>메시지 해석하기</button>
        </Link>
        <Link to="/ghost_page/create">
          <button>메시지 카드 만들기</button>
        </Link>
      </div>
    </div>
  );
}

export default Ghost;
