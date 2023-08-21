import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ChevronRight } from "lucide-react";
import "./explore.css";
import { amber } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MovieCarousel from "../MovieCarousel/MovieCarousel";

const theme = createTheme({
  palette: {
    primary: amber,
  },
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function StreamingPlatform() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="explore">
        <header className="choice-Head">
          <div className="headbar"></div>
          <h1>Explore what’s streaming</h1>
          <ChevronRight size={30} strokeWidth={2.5} className="headlink" />
        </header>
        <div style={{ paddingTop: "15px" }}>
          <Box sx={{ width: "100%" }} className="exploreBox">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                indicatorColor="primary"
              >
                <Tab
                  label="PRIME VIDEO"
                  className="exploreBar"
                  {...a11yProps(0)}
                />
                <Tab label="NETFLIX" className="exploreBar" {...a11yProps(1)} />
                <Tab
                  label="DISNEY +"
                  className="exploreBar"
                  {...a11yProps(2)}
                />
                <Tab
                  label="MXPLAYER"
                  className="exploreBar"
                  {...a11yProps(3)}
                />
                <Tab
                  label="JIOCINEMA"
                  className="exploreBar"
                  {...a11yProps(4)}
                />
                <Tab label="SONYLIV" className="exploreBar" {...a11yProps(5)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              include with Prime
              <div style={{ marginLeft: "-40px" }}>
                <MovieCarousel api="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1" />
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              with subscription
              <div style={{ marginLeft: "-40px" }}>
                <MovieCarousel api="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1" />
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              go to hotstar.com
              <div style={{ marginLeft: "-40px" }}>
                <MovieCarousel api="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1" />
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              go to mxplayer.in
              <div style={{ marginLeft: "-40px" }}>
                <MovieCarousel api="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1" />
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              go to jiocinema.com
              <div style={{ marginLeft: "-40px" }}>
                <MovieCarousel api="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1" />
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              go to sonyliv.com
              <div style={{ marginLeft: "-40px" }}>
                <MovieCarousel api="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1" />
              </div>
            </CustomTabPanel>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
}
