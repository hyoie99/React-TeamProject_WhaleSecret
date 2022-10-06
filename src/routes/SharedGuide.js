import { Link } from "react-router-dom";
// import styles from "../css/guide_style.module.css";
import styles from "../css/trans_style.module.css";
import bg from "../css/bg_style.module.css";

function Translate() {
  return (
    <div className={bg.main_page}>
      <div className={styles.main_div}>
        <div className={styles.guide_div}>
          <h1 className={styles.guide_title}>고스부호 해석 가이드</h1>
          <div className={styles.guide_text}>
            <span className={styles.origin}>ㄱ = </span>{" "}
            <span className={styles.trans}> ㄱ </span>
            <span className={styles.origin}>ㄴ = </span>{" "}
            <span className={styles.trans}> ㄴ </span>
            <span className={styles.origin}>ㄷ = </span>{" "}
            <span className={styles.trans}> ㄷ </span> <br />
            <span className={styles.origin}>ㄹ = </span>{" "}
            <span className={styles.trans}> ㄹ </span>
            <span className={styles.origin}>ㅁ = </span>{" "}
            <span className={styles.trans}> ㅁ </span>
            <span className={styles.origin}>ㅂ = </span>{" "}
            <span className={styles.trans}> ㅂ </span> <br />
            <span className={styles.origin}>ㅅ = </span>{" "}
            <span className={styles.trans}> ㅅ </span>
            <span className={styles.origin}>ㅇ = </span>{" "}
            <span className={styles.trans}> ㅇ </span>
            <span className={styles.origin}>ㅈ = </span>{" "}
            <span className={styles.trans}> ㅈ </span> <br />
            <span className={styles.origin}>ㅊ = </span>{" "}
            <span className={styles.trans}> ㅊ </span>
            <span className={styles.origin}>ㅋ = </span>{" "}
            <span className={styles.trans}> ㅋ </span>
            <span className={styles.origin}>ㅌ = </span>{" "}
            <span className={styles.trans}> ㅌ </span> <br />
            <span className={styles.origin}>ㅍ = </span>{" "}
            <span className={styles.trans}> ㅍ </span>
            <span className={styles.origin}>ㅎ = </span>{" "}
            <span className={styles.trans}> ㅎ </span>
          </div>
          <p className={styles.ghost_whale_text}>
            해석은 어렵지 않아 <br /> 가이드의 기호와 초성의 자음을 <br />
            매칭시켜서 해석하면 돼!
          </p>
          <img
            className={styles.ghost_whale_img}
            alt=""
            src={require("../Img/ghost_whale2.png")}
          ></img>
        </div>
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
