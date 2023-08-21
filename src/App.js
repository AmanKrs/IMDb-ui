import "./App.css";
import Header from "./Components/Header/Header";
import Ads from "./Components/Advertisement/Ads";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./Components/Content/Content";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <>
      <Header />
      <Ads />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/video/:id" element={<VideoPlayer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
