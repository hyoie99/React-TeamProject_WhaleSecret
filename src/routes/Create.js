import { useState } from "react";
import CreateForm from "../components/CreateForm";
import Loading from "../components/Loading";
import styles from "../css/create_style.module.css";

function Create() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [usertext, setUsertext] = useState("");

  const clickTrans = (event) => {
    event.preventDefault();
    setLoading(!loading);
  };
  const getName = (data) => {
    setUsername(data);
    // console.log(username);
  };
  const getText = (data) => {
    setUsertext(data);
    // console.log(usertext);
  };

  return (
    <div>
      {loading ? (
        <Loading username={username} usertext={usertext} />
      ) : (
        <form onSubmit={clickTrans} className={styles.form_div}>
          <CreateForm getName={getName} getText={getText} />
          <button>변환</button>
        </form>
      )}
    </div>
  );
}

export default Create;
