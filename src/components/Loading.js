import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import loadingVideo from "../video/loading2.mp4";
import styles from "../css/loading_style.module.css";
import bg from "../css/bg_style.module.css";

function Loading({ username, usertext }) {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("/ghost_page/result", {
        state: { username: { username }, usertext: { usertext } },
      });
    }, 2500);
  };
  // console.log(username, usertext);

  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className={bg.main_page}>
      {/* <div>
        <h1 className={styles.title}>LOADING</h1>
        <div className={styles.circle}></div>
      </div> */}
      <div className={styles.main_div}>
        {/* <img
          className={styles.main_whale_img}
          alt=""
          // src={require("../Img/ghost_whale.png")}
          src={require("../Img/loading2.gif")}
        /> */}
        <ReactPlayer
          className={styles.loading_video}
          url={loadingVideo}
          playing
          muted
        />
      </div>
    </div>
  );
}

export default Loading;
