import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/main_style.module.css";

function SecretHome() {
  const [bubble, setBubble] = useState(false);
  const [bubbleClassName, setBubbleClass] = useState(styles.first_hidden);

  const showBubble = () => {
    setBubble(!bubble);
    setBubbleClass(bubble ? styles.next_hidden : styles.main_whale_bubble);
  };

  return (
    <div className="App">
      <div className={styles.main_page}>
        <div className={styles.main_div}>
          <div className={styles.main_whale}>
            <img
              onClick={showBubble}
              className={styles.main_whale_img}
              alt=""
              src={require("../Img/ghost_whale.png")}
            />
            <Link to="/ghost_page" target="_blank">
              <div className={bubbleClassName}>
                <span className={styles.main_whale_bubble_text}>
                  고민 있어?
                </span>
              </div>
            </Link>
          </div>
          <h1 className={styles.main_title}>시크릿모드로 전환됨</h1>

          <p className={styles.main_description}>
            시크릿 탭을 모두 닫으면 시크릿 탭에서 보는 페이지는 브라우저의 방문
            기록, 쿠키 저장소, 검색 기록 어디에도 남지 않습니다. 단, 다운로드한
            파일이나 생성한 북마크는 유지됩니다. 하지만 흔적이 아예 남지 않는
            것은 아닙니다. 시크릿 모드로 탐색해도 회사, 인터넷 서비스 제공업체
            또는 방문한 웹사이트에 저장된 흔적까지 없앨 수는 없습니다.
          </p>
          <div className={styles.main_infos}>
            <div className={styles.main_info}>
              <p className={styles.main_info_title}>저장하지 않는 정보</p>
              <p className={styles.main_info_des}>
                방문기록, 쿠키, 자동완성, 임시 파일
              </p>
            </div>
            <div className={styles.main_info}>
              <p className={styles.main_info_title}>컴퓨터에 남는 정보</p>
              <p className={styles.main_info_des}>
                북마크, 아이디와 비밀번호, 다운로드 목록
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecretHome;
