import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SecretHome from "./routes/SecretHome";
import Ghost from "./routes/Ghost";
import Translate from "./routes/Translate";
import Explain from "./routes/Explain";
import Create from "./routes/Create";
import Result from "./routes/Result";
import SharedGuide from "./routes/SharedGuide";

function App() {
  return (
    <BrowserRouter basename="/React-Teamproject_WhaleSecret">
      <Routes>
        <Route path="/" element={<SecretHome />}></Route>
        <Route path="/ghost_page" element={<Ghost />}></Route>
        <Route path="/ghost_page/translate" element={<Translate />}></Route>
        <Route
          path="/ghost_page/translate/guide"
          element={<SharedGuide />}
        ></Route>
        <Route path="/ghost_page/explain" element={<Explain />}></Route>
        <Route path="/ghost_page/create" element={<Create />}></Route>
        <Route path="/ghost_page/result" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
