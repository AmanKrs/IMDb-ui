import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import TitleComp from "../TitleComp/TitleComp";

export default function ProtectedLayout() {
  const [loggedIn, setLoggedIn] = useState(true);

  const handlelogin = () => {
    localStorage.setItem("token", "token");
  };

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      setLoggedIn(false);
    }
  }, []);
  return (
    <div style={{ color: "whitesmoke" }}>
      {loggedIn ? (
        <>
          <TitleComp heading="From Your WatchList" />
          <Outlet />
        </>
      ) : (
        <div>
          <TitleComp heading="From Your WatchList" />
          <div className="signWatchlistMsg">
            <button className="btnwatchlist">+</button>
            <h4>Sign in to access your Watchlist</h4>
            <p>
              Save shows and movies to keep track of what you want to watch.
            </p>
            <button className="addtoWatchlist" onClick={handlelogin}>
              + watchlist
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
}
