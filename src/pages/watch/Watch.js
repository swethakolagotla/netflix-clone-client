import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useParams } from "react-router-dom";
import "./Watch.css";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

export default function Watch(props) {
  // const location = useLocation();
  // console.log(location)
  // const movie = location.movies;
  // console.log(movie)
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/movies/find/${id}`)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIcon />
          Home
        </div>
      </Link>
      <iframe
        src={movie.video}
        className="video"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      {/* <ReactPlayer className={"video"}url={movie.video } />; */}
    </div>
  );
}
