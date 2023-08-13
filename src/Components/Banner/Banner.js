import React, { useEffect, useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import "./banner.css";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [currentBanner, setCurrentBanner] = useState({});

  const prevBanner = () => {
    if (movie.indexOf(currentBanner) === 0) {
      setCurrentBanner(movie[movie.length - 1]);
    } else {
      setCurrentBanner(movie[movie.indexOf(currentBanner) - 1]);
    }
  };
  const nextBanner = () => {
    if (movie.indexOf(currentBanner) === movie.length - 1) {
      setCurrentBanner(movie[0]);
    } else {
      setCurrentBanner(movie[movie.indexOf(currentBanner) + 1]);
    }
  };
  const getBannerMovie = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTc1YWU5NTZlN2QyZWY5ZDhlMzFhYjJkNTk0MTM4NCIsInN1YiI6IjY0Y2U2Nzg5ODUwOTBmMDEwNjkxMjYxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E60IsMOWXEip7b_RLbmjNcQZn_A8jg9btD8AxKzb8CI",
        },
      }
    );
    console.log(res.data.results);
    setMovie(res.data.results);
    setCurrentBanner(res.data.results[0]);
    console.log(currentBanner);
  };
  useEffect(() => {
    getBannerMovie();
  }, []);

  
  return (
    <div className="banner">
      <div className="banner-carousel">
        <div className="horizontal-carousel">
          <button className="prev-banner" onClick={prevBanner}>
            {"<"}
          </button>
          <img
            src={
              `https://image.tmdb.org/t/p/original` + currentBanner.backdrop_path
            }
            alt="hposter"
            className="banner-poster"
          ></img>
          <div className="gradientClass">
            <div className="title-action">
              <PlayCircleOutlineIcon className="play-banner" />
              <h1>{currentBanner.title}</h1>
            </div>
          </div>
          <button className="next-banner" onClick={nextBanner}>
            {">"}
          </button>
        </div>
        <div className="vertical-carousel">
          <h3 className="upnxt">Up next</h3>
          <div className="vm-box">
            {movie
              .filter((elem, index) => index < 3)
              .map((elem) => {
                return (
                  <>
                    <div className="vertical-movie">
                      <div className="vb-poster">
                        <img
                          src={
                            `https://image.tmdb.org/t/p/w92` + elem.poster_path
                          }
                          alt="vposter"
                        ></img>
                      </div>
                      <div className="v-details">
                        <PlayCircleOutlineIcon
                          style={{ fontSize: "40px" }}
                          className="play-banner-side"
                        />
                        <p>{elem.original_title}</p>
                        <p>{elem.release_date}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            <h2 className="browsetrailer">
              <span>Browse trailers</span>
              <ChevronRight size={30} strokeWidth={2.5} />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
