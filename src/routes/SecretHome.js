import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/main_style.module.css";
import bg from "../css/bg_style.module.css";

function SecretHome() {
  const [bubble, setBubble] = useState(false);
  const [bubbleClassName, setBubbleClass] = useState(styles.first_hidden);
  const [toggle, setToggle] = useState(styles.cookie_toggle_no);
  const [toggleClassName, setClassName] = useState(bg.main_page);
  const [secretTitle, setTitle] = useState("시크릿모드로 전환됨");

  const showBubble = () => {
    setBubble(!bubble);
    setBubbleClass(bubble ? styles.next_hidden : styles.main_whale_bubble);
    setClassName(bubble ? bg.main_page : bg.change_main);
    setTitle(bubble ? "시크릿모드로 전환됨" : "고스부호로 변환됨");
  };
  const clickToggle = () => {
    if (toggle === styles.cookie_toggle_no) {
      setToggle(styles.cookie_toggle_yes);
    } else {
      setToggle(styles.cookie_toggle_no);
    }
  };

  return (
    <div className="App">
      <div className={toggleClassName}>
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
                <p className={styles.main_whale_bubble_text}>
                  비밀 유지를 위해, 이 페이지는 내가 <br />
                  고스부호로 바꿔버렸어. <br />
                  무슨 말인지 궁금하면 클릭해봐!
                </p>
              </div>
            </Link>
          </div>
          <h1 className={styles.main_title}>{secretTitle}</h1>

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
          <div className={styles.main_cookie}>
            <div className={styles.cookie_div}>
              <p className={styles.main_info_title}>타사 쿠키 차단</p>
              {/* <div className={styles.cookie_toggle}> */}
              <label onClick={clickToggle} className={toggle}>
                <span className={styles.toggle_btn}></span>
              </label>
              {/* </div> */}
            </div>
            <p className={styles.main_info_des}>
              이 옵션을 사용 설정하면 사이트가 웹 전반에서 사용자를 추적하는
              쿠키를 사용할 수 없습니다. 일부 사이트에서는 이 기능이 작동하지
              않을 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecretHome;
