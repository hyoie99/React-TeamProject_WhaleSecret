import styles from "../css/result_style.module.css";

function Result() {
  return (
    <div className={styles.main_page}>
      <div className={styles.flex_div}>
        <div className={styles.whale_div}>
          <p className={styles.whale_text}>고스부호 변환 끝</p>
          <img
            className={styles.main_whale_img}
            alt=""
            src={require("../icon/main_whale.png")}
          />
        </div>
        <div className={styles.card_btn_div}>
          <div className={styles.card_div}>
            <h1 className={styles.card_title}>"이름"님의 비밀 메시지</h1>
            <p className={styles.card_text}>변환 텍스트</p>
            {/* 이미지 변경 예정 */}
            <img
              className={styles.main_whale_img2}
              alt=""
              src={require("../icon/main_whale.png")}
            />
          </div>
          <div className={styles.btns}>
            <div className={styles.btns_group1}>
              <button>이미지 저장하기</button>
              <button>링크 공유하기</button>
            </div>
            <button>다시 하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
