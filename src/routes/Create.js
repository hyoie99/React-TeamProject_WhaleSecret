import { useState } from "react";
import CreateForm from "../components/CreateForm";
import Loading from "../components/Loading";
import bg from "../css/bg_style.module.css";

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
        <form onSubmit={clickTrans} className={bg.main_page}>
          <CreateForm
            setLoading={setLoading}
            getName={getName}
            getText={getText}
          />
        </form>
      )}
    </div>
  );
}

export default Create;
