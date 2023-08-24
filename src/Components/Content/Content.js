import React, { Suspense } from "react";
import Banner from "../Banner/Banner";
import MovieCarousel from "../MovieCarousel/MovieCarousel";
import { Route, Routes } from "react-router-dom";
import ProtectedLayout from "../ProtectedLayout/ProtectedLayout";
// import StreamingPlatform from "../StreamingPlatform/StreamingPlatform";
import TitleComp from "../TitleComp/TitleComp";
import Ads from "../Advertisement/Ads";

const StreamingPlatform = React.lazy(() =>
  import("../StreamingPlatform/StreamingPlatform")
);

export default function Content() {
  return (
    <div>
    <Ads />
      <Banner />

      <h1 style={{ color: "#f3c222", marginLeft: "40px" }}>What to watch</h1>

      <TitleComp heading="Tops Picks" />
      <MovieCarousel api="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"></MovieCarousel>

      <Routes>
        <Route path="/" element={<ProtectedLayout />}>
          <Route
            path="/"
            element={
              <MovieCarousel api="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1" />
            }
          ></Route>
        </Route>
      </Routes>
      <Suspense
        fallback={<div style={{ textAlign: "center" }}>Loading....</div>}
      >
        <StreamingPlatform />
      </Suspense>

      <TitleComp heading="Popular" />
      <MovieCarousel api="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"></MovieCarousel>
    </div>
  );
}
