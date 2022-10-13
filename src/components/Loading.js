import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import loadingVideo from "../video/loading.mp4";
import styles from "../css/loading_style.module.css";

function Loading({ username, usertext }) {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("/ghost_page/result", {
        state: { username: { username }, usertext: { usertext } },
      });
    }, 7000);
  };

  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className={styles.main_page}>
      <div className={styles.main_div}>
        <ReactPlayer
          url={loadingVideo}
          playing
          muted
          width="1280px"
          height="720px"
        />
      </div>
    </div>
  );
}

export default Loading;
