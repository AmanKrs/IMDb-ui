import "./App.css";
import Header from "./Components/Header/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./Components/Content/Content";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/video/:id" element={<VideoPlayer />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
