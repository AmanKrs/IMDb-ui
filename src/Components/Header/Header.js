import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "../Menu/Menu";
import SearchIcon from "@mui/icons-material/Search";
import QueueIcon from "@mui/icons-material/Queue";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [state, setState] = useState({
    top: false,
  });
  const navigate = useNavigate();
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="menupop"
      sx={{ width: anchor === "top" ? "auto" : 250 }}
      role="presentation"
    >
      <div className="menupop-head">
        <img src={logo} className="menu-logo" alt="imdblogo" />
        <CancelIcon
          sx={{ fontSize: "62px" }}
          className="closeMenu"
          onClick={toggleDrawer(anchor, false)}
        />
      </div>
      <Menu />
    </Box>
  );

  const signIn = () => {
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar">
        <img src={logo} className="logo" alt="imdblogo" />
        <div>
          {["top"].map((anchor) => (
            <React.Fragment key={anchor}>
              <h4 className="menubar" onClick={toggleDrawer(anchor, true)}>
                <MenuIcon />
                <span>Menu</span>
              </h4>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
        <Box className="search-menu">
          <select className="search-select">
            <option>1</option>
            <option>TV Shows</option>
            <option>1</option>
          </select>
          <input
            type="text"
            className="search-input"
            placeholder=" Search IMDb"
          />
          <SearchIcon
            sx={{
              backgroundColor: "#fff",
              color: "grey",
              height: "32px",
              borderRadius: "0 4px 4px 0",
            }}
          />
        </Box>
        <button className="head-watchlist">
          <QueueIcon />
          <p>WatchList</p>
        </button>
        <button className="singin-btn" onClick={signIn}>
          Sing In
        </button>
        <button className="head-lang">
          <select className="head-lang-sel">
            <option>En</option>
            <option>HN</option>
          </select>
        </button>
      </nav>
    </div>
  );
}
