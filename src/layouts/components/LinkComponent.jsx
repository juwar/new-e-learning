import * as React from "react";
import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";

export default function LinkComponent({ children, ...rest }) {
  return (
    <Link {...rest} href="#" underline="none" className="LinkComponent__wrapper">
      <Typography>{children}</Typography>
    </Link>
  );
}
