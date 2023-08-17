import "./App.css";
import Header from "./Components/Header/Header";
import Ads from "./Components/Advertisement/Ads";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./Components/Content/Content";

function App() {
  return (
    <>
      <Header />
      <Ads />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
