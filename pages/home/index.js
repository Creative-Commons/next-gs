import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import { makeStyles } from '@material-ui/core/styles';
import teal from "@material-ui/core/colors/teal";
import Fab from '@material-ui/core/Fab';
import { useState, useEffect } from "react";
import Image from "next/image";
import Tilt from "react-tilt";
import {
  CssBaseline, Fade, Container
 } from '@material-ui/core';

import NavBar from "../../components/navBar";
import Header from "../../components/Landing/Header";
import Land1 from "../../components/Landing/Land1";
import Features1 from "../../components/Landing/Features1";
import DownloadApp from "../../components/Landing/Downloads";
import Support from "../../components/Landing/Support";
import TheDevs from "../../components/Landing/TheDevs";
import ScrollToTop from "../../components/ScrollToTop";
import theme from "../../styles/theme";


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  land_root: {
    minHeight: '100vh',
    backgroundImage: "url('/resources/header_bg.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "80% auto",
    backgroundPosition: "center center",
    background: "#1e1e1e"
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  gs_font: {
    fontFamily: ["Montserrat"]
  },
  teal: {
    color: teal[400]
  },
  bg_teal: {
    padding: "4vh",
    backgroundColor: "#1e1e1e",
    color: "#fff",
    transitionDuration: 500,
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: teal[400],
      transitionDuration: 500
    },
  },
  darkBackground: {
    background: "#1e1e1e"
  },
  scroll_icon_light: {
    color: "#f3f3f3",
    padding: "3vh",
    marginBottom: "5vh",
  },
  scroll_icon_dark: {
    color: "#1e1e1e",
    padding: "3vh",
    marginBottom: "5vh",
  },
  table: {
    border: "2px solid black",
    borderBottom: "2px solid black",
  },
  title: {
    fontFamily: ["Montserrat"],
    fontSize: 120,
  },
  devAvatar: {
    width: 100,
    height: 100,
    alignItems: "center"
  },
  lightText: {
    color: "#fff"
  },
  hoverBold:{
    fontFamily: ["Montserrat"],
    transitionDuration: 500,
    '&:hover': {
      fontFamily: ["Montserrat"],
      letterSpacing: 5,
      fontWeight: "bold",
      transitionDuration: 500
    },
  },
  hoverShadow:{
    transitionDuration: 500,
    '&:hover': {
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      transitionDuration: 500
    },
  },
}));


export default function Home (props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  
  useEffect(() => {
    setChecked(true);
  }, []);

  <title>Home | GS-Suite</title>

  return (
    <div>
      <Fade in={true} timeout={400}>
        <>
          <CssBaseline />
          <NavBar />
          <div><Header checked={checked} classes={classes} /></div>
          <div><Land1 classes={classes} /></div>
          <div><Features1 classes={classes} /></div>
          <div><DownloadApp checked={true}  classes={classes}/></div>
          <div className={classes.bg_teal}><TheDevs classes={classes}/></div>
          <div><Support classes={classes}/></div>
          <div><ScrollToTop {...props}>
            <Fab className={classes.bg_teal} size="small" aria-label="scroll back to top">
              <ExpandLessOutlinedIcon />
            </Fab>
          </ScrollToTop></div>
        </>
      </Fade>
    </div>
  );
}

{/* <Container>
  <Wrapper>
    <InnerWrapper options={{ max: 25 }}>
      <Left>
        <LeftText />
      </Left>
      <TiltWrapper>
        <Img src="/pic.jpg"></Img>
      </TiltWrapper>
    </InnerWrapper>
  </Wrapper>
</Container> */}