import { Link } from "react-router-dom";
import styles from "../css/ghost_style.module.css";
// import bg from "../css/bg_style.module.css";

function Ghost() {
  return (
    <div className={styles.main_page}>
      {/* <div> */}
      {/* <h1 className={styles.main_title}> 고스부호 만들기 </h1> */}
      <p className={styles.ghost_story_des}>
        안녕, 나는 고스트 웨일이야! <br /> 수줍음이 많아서 가끔은 알아듣기
        어려운 <br /> 주파수를 이용해 노래하곤 해. <br /> 너도 비밀스럽게
        전달하고 싶은 메시지가 있다면, <br /> 내가 고스부호로 바꿔줄게!
      </p>
      {/* </div> */}
      <img
        className={styles.ghost_whale_img}
        alt=""
        src={require("../Img/ghost_whale.png")}
      />
      <div className={styles.ghost_btns}>
        <Link to="/ghost_page/translate">
          <button className={styles.btn_trans}>고스부호 해석하기</button>
        </Link>
        <Link to="/ghost_page/explain">
          <button className={styles.btn_make}>고스부호 만들기</button>
        </Link>
      </div>
    </div>
  );
}

export default Ghost;
