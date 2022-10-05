import { Link } from "react-router-dom";
import styles from "../css/trans_style.module.css";

function Translate() {
  return (
    <div className={styles.main_page}>
      <div className={styles.descrip_div}>
        <div className={styles.story_div}>
          <div className={styles.story_des}>
            <h1> 메시지 해석 설명 </h1>
          </div>
          <img
            className={styles.ghost_whale_img}
            alt=""
            src={require("../Img/ghost_whale.png")}
          />
        </div>
        <div className={styles.guide_des}>
          <h1> 가이드 이미지 </h1>
        </div>
      </div>
      <div>
        <Link to="/ghost_page">
          <button>뒤로 가기</button>
        </Link>
        <Link to="/ghost_page/create">
          <button>메시지 카드 만들기</button>
        </Link>
      </div>
    </div>
  );
}

export default Translate;
