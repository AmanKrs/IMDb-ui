import React, { useEffect, useRef, useState } from "react";
import "./moviecarousel.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import axios from "axios";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Modal from "@mui/material/Modal";
import star from "../../assets/star.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  backgroundColor: "rgb(37, 36, 36)",
  border: "none",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function MovieCarousel(props) {
  const cardmove = useRef();
  const [movieItem, setMovieItem] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(10);
  const [ratingTitle, setRatingTitle] = useState();
  const handleClose = () => setOpen(false);

  const handleRating = ({ elem }) => {
    setOpen(true);
    setRatingTitle(elem.title);
  };

  const getMoviesForCarousel = async () => {
    const res = await axios.get(props.api, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTc1YWU5NTZlN2QyZWY5ZDhlMzFhYjJkNTk0MTM4NCIsInN1YiI6IjY0Y2U2Nzg5ODUwOTBmMDEwNjkxMjYxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E60IsMOWXEip7b_RLbmjNcQZn_A8jg9btD8AxKzb8CI",
      },
    });

    setMovieItem(res.data.results);
    console.log("movieItem", movieItem);
  };

  const prev = () => {
    cardmove.current.scrollBy({
      top: 100,
      left: -1000,
      behavior: "smooth",
    });
  };
  const next = () => {
    cardmove.current.scrollBy({
      top: 100,
      left: 1000,
      behavior: "smooth",
    });
  };
  console.log("first", value);

  useEffect(() => {
    getMoviesForCarousel();
  }, []);

  return (
    <div className="moviecarousel-head">
      <div className="carousel-container">
        <button className="prev-list" onClick={prev}>
          &#8249;
        </button>
        <div className="carousel-list" ref={cardmove}>
          {movieItem.map((elem) => {
            return (
              <>
                <div className="moviecarousel">
                  <div className="moviecarousel-poster">
                    <button className="posterWatchlist">+</button>
                    <img
                      src={
                        `https://image.tmdb.org/t/p/original` + elem.poster_path
                      }
                      className="mposter"
                      alt="mposter"
                    />
                  </div>
                  <div className="moviecarousel-details">
                    <div className="detail-rating">
                      <StarPurple500OutlinedIcon
                        fontSize="18px"
                        className="ratedStar"
                      />
                      <span>{elem.vote_average}</span>
                      <button
                        className="rating-star"
                        onClick={() => {
                          handleRating({ elem });
                        }}
                      >
                        <StarBorderOutlinedIcon fontSize="18px" />
                      </button>
                    </div>
                    <p className="details-title">{elem.title}</p>
                    <button className="details-watchlist">+ watchlist</button>
                    <button className="watchtrailer">
                      <span className="playtrailer">
                        <PlayArrowIcon />
                        Trailer
                      </span>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <button className="next-list" onClick={next}>
          &#8250;
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src={star} className="rating-star-icon" alt="starrating"></img>
            <span className="rating-star-value">{value}</span>
            <p
              style={{ color: "#f3c222", fontSize: "18px", fontWeight: "bold" }}
            >
              Rate This
            </p>
            <h3 style={{ color: "white" }}>{ratingTitle}</h3>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <button
              className="rate-stars"
              disabled={value >= 1 ? false : true}
              style={{ backgroundColor: value >= 1 ? "#f3c222" : "#888785" }}
            >
              Rate
            </button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
