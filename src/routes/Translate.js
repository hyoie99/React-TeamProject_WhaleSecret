import { Link } from "react-router-dom";
import styles from "../css/trans_style.module.css";
import bg from "../css/bg_style.module.css";

function Translate() {
  const copyShare = () => {
    const textArea = document.createElement("textarea");
    document.body.appendChild(textArea);

    textArea.value = window.location.href + "/guide";
    textArea.select();

    document.execCommand("copy");
    alert("링크가 복사되었습니다.");
    document.body.removeChild(textArea);
  };
  return (
    <div className={bg.main_page}>
      <div className={styles.main_div}>
        <div className={styles.guide_div}></div>
        <div className={styles.btns_div}>
          <Link to="/ghost_page">
            <button className={styles.btn_back}>뒤로 가기</button>
          </Link>
          <button onClick={copyShare} className={styles.btn_share}>
            가이드 링크 공유
          </button>
        </div>
      </div>
    </div>
  );
}

export default Translate;
