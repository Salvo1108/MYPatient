import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useHistory } from "react-router-dom";
import Med from "../../resources/Icon_Header.jpg";
import avatarUser from "../../resources/userIcon.png";
import { logoutUser } from "../redux/UserAuthentication";
import { AllPatient } from "../redux/Patient";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const routeChange = () => {
    let path = `/InsertPatient`;
    history.push(path);
  };

  const routeSeePatientChange = (e) => {
    e.preventDefault();
    dispatch(AllPatient());
    let path = `/seeAllPatient`;
    history.push(path);
  };

  const doLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    let path = `/login`;
    history.push(path);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" id="ContainerHeader">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            id="MedHeader"
            sx={{ mr: 2 }}
          >
            <img
              src={Med}
              id="LogoMedHeader"
              width="100"
              height="50"
              alt="Logo Med "
            />
          </Typography>
          <>
            <Box>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  id="BottoneInsertPatientHeader"
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={routeChange}
                >
                  Insert Patient
                </Button>
              </Box>
            </Box>
            <div id="divSpace"></div>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  id="BottonePatientSearch"
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={routeSeePatientChange}
                >
                  Search Patient
                </Button>
              </Box>
            </Box>
          </>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="avatar" src={avatarUser} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="Logout" onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  onClick={(event) => doLogout(event)}
                >
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
