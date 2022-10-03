import { useState } from "react";
import CreateForm from "../components/CreateForm";
import Loading from "../components/Loading";
import styles from "../css/create_style.module.css";

function Create() {
  const [loading, setLoading] = useState(false);

  const clickTrans = () => {
    setLoading(!loading);
    console.log(loading);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.form_div}>
          <CreateForm />
          <button onClick={clickTrans}>변환</button>
        </div>
      )}
    </div>
  );
}

export default Create;
