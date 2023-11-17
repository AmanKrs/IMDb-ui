import "./App.css";
import Header from "./Components/Header/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./Components/Content/Content";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { useState } from "react";

function App() {
  const [reg, setReg] = useState(false);
  const [logged, setLogged] = useState(false);
  console.log("reggg", reg);

  return (
    <>
      <BrowserRouter>
        {!reg && <Header logged={logged} setLogged={setLogged}/>}

        <Routes>
          <Route path="*" element={<Content />}></Route>
          <Route path="/video/:id" element={<VideoPlayer />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/register"
            element={<Register setReg={setReg} />}
          ></Route>
        </Routes>

        {!reg && <Footer logged={logged} setReg={setReg} />}
      </BrowserRouter>
    </>
  );
}

export default App;
