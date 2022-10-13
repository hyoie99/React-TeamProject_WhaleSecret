import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/createform_style.module.css";

function CreateForm({ setLoding, getName, getText }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const inputName = (event) => {
    setName(event.target.value);
  };
  const inputText = (event) => {
    setText(event.target.value);
  };
  getName(name);
  getText(text);

  const clickTrans = () => {
    setLoding(true);
  };
  const onlyKr = (event) => {
    const keyCode = event.keyCode;
    const isValid = keyCode >= 65 && keyCode <= 90;
    if (isValid) {
      event.preventDefault();
      alert("영문은 변환하기 어려워!(ㅠㅠ)");
      return false;
    }
  };

  return (
    <div className={styles.main_page}>
      <div className={styles.main_div}>
        <div className={styles.input_div}>
          <div className={styles.name_input_div}>
            <h1 className={styles.input_title}>이름(닉네임)이 뭐야?</h1>
            <input
              value={name}
              onChange={inputName}
              required
              className={styles.input_name}
              type="text"
              maxLength="10"
            ></input>
          </div>
          <div className={styles.msg_input_div}>
            <h1 className={styles.input_title}>
              말하고 싶은 메시지를 입력해줘! (최대 50자)
            </h1>
            <textarea
              value={text}
              onChange={inputText}
              onKeyDown={onlyKr}
              required
              className={styles.input_msg}
              type="text"
              maxLength="50"
            ></textarea>
          </div>
          <div className={styles.btns}>
            <Link to="/ghost_page/explain">
              <button type="button" className={styles.btn_back}>
                뒤로 가기
              </button>
            </Link>
            <button onClick={clickTrans} className={styles.btn_trans}>
              변환 하기
            </button>
          </div>
        </div>
        <div className={styles.ghost_whale_div}>
          <img
            className={styles.ghost_whale_img}
            alt=""
            src={require("../Img/ghost_whale.png")}
          />
          <p className={styles.ghost_whale_text}>
            너의 이름과 하고싶은 말을 입력하고 <br /> 변환하기 버튼을 눌러봐!
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
