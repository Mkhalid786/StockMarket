import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

import { Link } from "react-router-dom";

function NavbarrDashOne() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Explore"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <Link to="/Holding"><ListItemText primary={"Holding"} /></Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <Link to="/Watchlist"><ListItemText primary={"My Watchlist"} /></Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="Navbar user_nav">
      <MenuIcon className="qqq" onClick={toggleDrawer("left", true)} />

      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <Button
          startIcon={<CloseIcon />}
          onClick={toggleDrawer("left", false)}
        >
          Close
        </Button>
        {list("left")}
      </Drawer>
    </div>
  );
}

export default NavbarrDashOne;
