import { makeStyles } from '@material-ui/core/styles';
import teal from "@material-ui/core/colors/teal";
import { useState, useEffect } from "react";
import Image from "next/image";
import Tilt from "react-tilt";
import {
  CssBaseline, Fade, Container
 } from '@material-ui/core';

import Top from "../../components/Landing/Land1"
import Header from "../../components/Landing/Header"
import DownloadApp from "../../components/Landing/DownloadApp";
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
  top_root: {
    backgroundImage: "url('/resources/header_bg.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center center",
    background: "#1e1e1e"
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gs_font: {
    fontFamily: ["Montserrat"]
  },
  teal: {
    color: teal[400]
  },
  scroll_icon_light: {
    color: "#f3f3f3",
    padding: "5vh",
  },
  scroll_icon_dark: {
    color: "#1e1e1e",
    padding: "5vh",
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
          <Header checked={checked} classes={classes} />
          <Top classes={classes} />
          <DownloadApp  classes={classes}/>

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