import React, { useEffect, useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import "./banner.css";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [moviearr, setMovieArr] = useState([]);
  const [currentBanner, setCurrentBanner] = useState({});
  const navigate = useNavigate();
  const handlevideo = (id) => {
    navigate("/video/" + id);
  };

  const prevBanner = () => {
    if (movie.indexOf(currentBanner) === 0) {
      setCurrentBanner(movie[movie.length - 1]);
    } else {
      setCurrentBanner(movie[movie.indexOf(currentBanner) - 1]);
    }
  };

  const nextBanner = () => {
    console.log("index " + movie.indexOf(currentBanner));
    if (movie.indexOf(currentBanner) < movie.length - 1) {
      setMovie(movie.slice(1, movie.length));
    }
    if (movie.indexOf(currentBanner) === movie.length - 1) {
      console.log("movie length = 0");
      setCurrentBanner(movie[0]);
      setMovie(moviearr);
    } else {
      setCurrentBanner(movie[movie.indexOf(currentBanner) + 1]);
    }
  };

  // setTimeout(() => {
  //   if (movie.indexOf(currentBanner) === movie.length - 1) {
  //     setCurrentBanner(movie[0]);
  //   } else {
  //     setCurrentBanner(movie[movie.indexOf(currentBanner) + 1]);
  //   }
  //   if (movie.length - 1) {
  //     setMovie(movie.slice(1, movie.length));
  //   }
  // }, 3000);

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
    setMovie(res.data.results.slice(1, movie.length - 1));
    setCurrentBanner(res.data.results[0]);
    console.log(currentBanner);
    setMovieArr(res.data.results.slice(1, movie.length - 1));
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
          <div
            onClick={() => {
              handlevideo(currentBanner.id);
            }}
          >
            <img
              src={
                `https://image.tmdb.org/t/p/original` +
                currentBanner.backdrop_path
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
                      <div
                        className="v-details"
                        onClick={() => {
                          handlevideo(elem.id);
                        }}
                      >
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
          </div>
          <h2 className="browsetrailer">
            <span>Browse trailers</span>
            <ChevronRight size={30} strokeWidth={2.5} />
          </h2>
        </div>
      </div>
    </div>
  );
}
