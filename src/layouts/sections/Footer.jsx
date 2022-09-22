import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} className="Footer__wrapper">
      <Stack className="Footer__left-content">
        <Typography className="Footer__title">
          &copy;2021 Akhsat. All right reserved.
        </Typography>
      </Stack>
      <Stack className="Footer__right-content">
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
        <YouTubeIcon />
      </Stack>
    </Box>
  );
}

export default Header;
