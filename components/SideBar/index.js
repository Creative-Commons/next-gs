import SideBarData from './sidebar_data';
import useStyles from './styles';
import {
  ListItemIcon, ListItemText,
  ListItem, Divider, Link,
  Drawer, List, Slide, Grow,
 } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import theme from '../../styles/theme';
import axios from "axios";
import API_BASE_URL from "../../constants";


export default function SideBar({props}) {
  const classes = useStyles();
  const [enrolled, setEnrolled] = useState([]);
  const [classrooms, setClassrooms] = useState([])

  function getAllUserClassrooms(){
    axios.post(API_BASE_URL + "/get_user_enrolled/", {},
      {
          headers: {
              "token": localStorage.getItem("token"),
              "Access-Control-Allow-Origin": "*",
          }
      }).then((response) => {
          console.log(response)
          if (response.data.success === true){
              if (response.data.data != undefined){
                  setEnrolled(response.data.data);
              }}
      }).catch(function(error){
          console.log(error.message);
      });
  }
  
  useEffect(() => {
      setClassrooms([]);
      setEnrolled([]);
      setTimeout(
          getAllUserClassrooms(),
          3000
      )
}, [props]);

  return (
      <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
      >
        <Divider />
        <List>
          <ListItem className={classes.SidebarLogo}>
          </ListItem>
          {SideBarData.map((item, index) => (
            <>
              <Link
                className={classes.drawerItem}
                activeStyle={{
                    fontWeight: "bolder",
                    color: "#00465D"
                  }} 
                  href={item.path}>
              <Slide in={true} direction="right" timeout={300 * (index + 1)} >
                <ListItem button>
                    <ListItemIcon className={classes.icon}>
                      { item.icon }
                    </ListItemIcon>
                    <ListItemText >
                      {item.title}
                    </ListItemText>
                </ListItem>
              </Slide>
              </Link>
              {
                (item.title === "Enrolled") ? (
                  enrolled.map((e, index) => {
                    <ListItem>
                      <ListItemText >
                        {e.name}
                      </ListItemText>
                    </ListItem>
                  })
                ) : (<></>)
              }
            </>
          ))}
        </List>
      </Drawer>

  );
}
