import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player/youtube'
import "./videoplayer.css";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function VideoPlayer() {
  let {id } = useParams()
  const [playVideo, setPlayVideo] = useState(false);
  const [playbtn, setPlayBtn] = useState(false);
  const [videokey, setVideoKey] = useState();

  const navigate = useNavigate();

  const handleClosePlayer = () => {
    navigate("/");
  };

  const handlePlaying = () => {
    setPlayVideo(!playVideo);
  };

  const handleplay= ()=>{
    setPlayBtn(!playbtn)
  }

  
  const getMovieTrailer = async () => {
    const resp = await axios.get(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTc1YWU5NTZlN2QyZWY5ZDhlMzFhYjJkNTk0MTM4NCIsInN1YiI6IjY0Y2U2Nzg5ODUwOTBmMDEwNjkxMjYxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E60IsMOWXEip7b_RLbmjNcQZn_A8jg9btD8AxKzb8CI"
        },
      }
    );
    var movie = resp.data.results.filter((elem) => {
      return elem.type === "Trailer" && elem.name === "Official Trailer";
    });
    console.log(movie)
    setVideoKey(movie[0].key);
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

  return (
    <div>
      <div className="videoBox">
        <div className="videoboxaction">
          <button className="closevideo" onClick={handleClosePlayer}>
            X close
          </button>
          <button className="sharevideo">
            <ShareIcon />
          </button>
        </div>
        <div className="videoPlayer" onClick={handlePlaying}>
          <ReactPlayer
            url={"https://youtube.com/watch?v=" + videokey}
            controls={true}
            width="800px"
            height={450}
            playing={playVideo}
            onPlay={handleplay}
            onPause={handleplay}
          />

          {playbtn ? (
            <PauseIcon className="playbtn" sx={{ opacity: 0 }} />
          ) : (
            <PlayArrowIcon className="playbtn" sx={{ opacity: 1 }} />
          )}
        </div>
      </div>
    </div>
  );
}
