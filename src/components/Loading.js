import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("/ghost_page/result");
    }, 2000);
  };

  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });

  return <h1>변환 중</h1>;
}

export default Loading;
