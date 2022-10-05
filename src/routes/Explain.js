import { Link } from "react-router-dom";
import bg from "../css/bg_style.module.css";
import styles from "../css/explain_style.module.css";

function Explain() {
  return (
    <div className={bg.main_page}>
      <div className={styles.main_div}>
        <h1 className={styles.main_title}>고스부호</h1>
        <div className={styles.explain_card_div}>
          <div className={styles.explain_card}>
            <h3 className={styles.card_title}> 바꾸고 싶은 내용 </h3>
            <p className={styles.card_text1}>
              {" "}
              나 오늘 <br /> 로또 당첨됐다.{" "}
            </p>
            <img
              className={styles.card_arrow}
              alt=""
              src={require("../Img/arrow.png")}
            ></img>
            <h3 className={styles.card_title}> 고스부호로 변환 </h3>
            <p className={styles.card_text2}>
              {" "}
              나 오늘 <br /> 로또 당첨됐다.{" "}
            </p>
          </div>
          <div className={styles.explain_card}>
            <h3 className={styles.card_title}> 고스부호 해석 가이드 </h3>
            <div className={styles.card_text3}>
              <span> ㄱ = </span>{" "}
              <span className={styles.card_text4}> ㄱ </span> <br />
              <span> ㄴ = </span>{" "}
              <span className={styles.card_text4}> ㄴ </span> <br />
              <span> ㄷ = </span>{" "}
              <span className={styles.card_text4}> ㄷ </span>
            </div>
            <img
              className={styles.card_arrow}
              alt=""
              src={require("../Img/arrow.png")}
            ></img>
            <h3 className={styles.card_title}> 고스부호 해석 </h3>
            <p className={styles.card_text1}>
              {" "}
              나 오늘 <br /> 로또 당첨됐다.{" "}
            </p>
          </div>
        </div>
        <p className={styles.explain_text}>
          고스부호는 글자의 초성을 특별한 암호로 바꿔줘. <br /> 우리끼리만
          알아볼 수 있는 고스부호로 비밀을 전해봐!
        </p>
        <img
          className={styles.ghost_whale_img}
          alt=""
          src={require("../Img/ghost_whale.png")}
        />
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
