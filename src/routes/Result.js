import html2canvas from "html2canvas";
import { Link, useLocation } from "react-router-dom";
import styles from "../css/result_style.module.css";

function Result() {
  const location = useLocation();
  const username = location.state.username.username;
  const usertext = location.state.usertext.usertext;

  const copyShare = () => {
    const textArea = document.createElement("textarea");
    document.body.appendChild(textArea);

    textArea.value =
      window.location.origin +
      "/React-Teamproject_WhaleSecret/ghost_page/translate/guide";
    textArea.select();

    document.execCommand("copy");
    alert("링크가 복사되었습니다.");
    document.body.removeChild(textArea);
  };
  const saveFile = (url, filename) => {
    let link = document.createElement("a");
    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const captureImg = (event) => {
    const card =
      event.target.parentNode.parentNode.parentNode.parentNode.childNodes[0];
    // console.log(card);
    const card_animation = card.style.animation;
    card.style.setProperty("animation", "none");
    html2canvas(card, {
      width: card.offsetWidth,
      height: card.offsetHeight,
      scale: 1,
    }).then((canvas) => {
      saveFile(canvas.toDataURL(), "card.png");
      card.style.animation = card_animation;
    });
  };
  // const captureImg = (event) => {
  //   const card = event.target.parentNode.parentNode.parentNode.childNodes[0];
  //   card.style.animation = "";
  //   domtoimage.toBlob(card).then((blob) => {
  //     saveAs(blob, "card.png");
  //   });
  //   card.style.animation = "rotate_card 9s infinite linear";
  //   setTimeout(function () {
  //     window.location.reload();
  //   }, 500);
  // };

  return (
    <div className={styles.main_page}>
      <div className={styles.card_btn_div}>
        <div className={styles.card_div}>
          <div className={styles.card_text_div}>
            <h1 className={styles.card_title}>
              {username} 님의
              <br />
              고스부호 메시지 카드
            </h1>
            <p className={styles.card_text}>{usertext}</p>
          </div>
          {/* <img
            className={styles.result_logo}
            src={require("../Img/bg_result_logo.png")}
            alt=""
          /> */}
          {/* <img
            className={styles.main_whale_img}
            alt=""
            src={require("../Img/ghost_whale.png")}
          />
          <img
            className={styles.sub_whale_img}
            alt=""
            src={require("../Img/whale_card.png")}
          /> */}
        </div>
        <div className={styles.btns}>
          <div className={styles.btns_group1}>
            <div>
              <button onClick={copyShare} className={styles.btn_share}>
                <img
                  className={styles.btn_icon}
                  alt=""
                  src={require("../Img/btn_share.png")}
                />
                가이드 링크 공유
              </button>
            </div>
            <div>
              <button className={styles.btn_download} onClick={captureImg}>
                <img
                  className={styles.btn_icon}
                  alt=""
                  src={require("../Img/btn_download.png")}
                />
                이미지 저장
              </button>
            </div>
          </div>
          <Link to="/ghost_page/create" style={{ textDecoration: "none" }}>
            <button className={styles.btn_again}>
              <img
                className={styles.btn_icon}
                alt=""
                src={require("../Img/btn_again.png")}
              />
              다시 하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Result;
