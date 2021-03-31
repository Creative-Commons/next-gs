import React from 'react';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FlareIcon from "@material-ui/icons/Flare";


const SideBarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardOutlinedIcon />,
    cName: 'sidebar-text'
  },
  {
    title: 'Discover',
    path: '/discover',
    icon: <SearchOutlinedIcon />,
    cName: 'sidebar-text'
  },
  {
    title: 'Enrolled',
    path: '/enrolled',
    icon: <MenuBookOutlinedIcon />,
    cName: 'sidebar-text'
  },
  {
    title: 'Teach',
    path: '/teach',
    icon: <FlareIcon />,
    cName: 'sidebar-text'
  },
];

export default SideBarData;