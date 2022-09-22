import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { ButtonComponent, LinkComponent } from "../components";

function Header() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="Header__wrapper">
        <Toolbar className="Header__toolbar-wrapper">
          <Stack className="Header__left-content">
            <Typography className="Header__title">E - LEARNING</Typography>
          </Stack>
          <Stack className="Header__nav-link">
            <LinkComponent onClick={() => navigate("/")}>Home</LinkComponent>
            <LinkComponent onClick={() => {}}>About</LinkComponent>
            <LinkComponent onClick={() => {}}>Pages</LinkComponent>
          </Stack>
          <Stack className="Header__right-content">
            <LinkComponent onClick={() => navigate("/login")}>
              Login
            </LinkComponent>
            <ButtonComponent onClick={() => navigate("/register")}>
              Register
            </ButtonComponent>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
