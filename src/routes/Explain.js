import { Link } from "react-router-dom";
import bg from "../css/bg_style.module.css";
import styles from "../css/explain_style.module.css";

function Explain() {
  return (
    <div className={bg.main_page}>
      <div className={styles.main_div}>
        <div className={styles.explain_card_div}>
          <div className={styles.ex_card1}></div>
          <div className={styles.ex_card2}></div>
        </div>
        <div className={styles.explain_div}>
          <img
            className={styles.ghost_whale_img}
            alt=""
            src={require("../Img/ghost_whale.png")}
          />
          <p className={styles.explain_text}>
            고스부호는 글자의 초성을 특별한 암호로 바꿔줘. <br /> 우리끼리만
            알아볼 수 있는 고스부호로 비밀을 전해봐!
          </p>
        </div>

        <div className={styles.btns}>
          <Link to="/ghost_page">
            <button className={styles.btn_back}>뒤로 가기</button>
          </Link>
          <Link to="/ghost_page/create">
            <button className={styles.btn_next}>다음</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Explain;
