import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ButtonComponent({ children, ...rest }) {
  return (
    <Button
      {...rest}
      variant="contained"
      className="ButtonComponent_wrapper"
      color="primary"
    >
      <Typography>{children}</Typography>
    </Button>
  );
}
