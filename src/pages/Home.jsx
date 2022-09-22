import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <Box className="Home__wrapper" sx={{ flexGrow: 1 }}>
      <div className="Home__backgrund">
        <Typography className="Home__title">Learn From Home</Typography>
        <Typography className="Home__title-secondary">E-Learning</Typography>
      </div>
    </Box>
  );
}

export default Home;
