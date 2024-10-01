import React from "react";

import LinearProgress from "@mui/material/LinearProgress";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "../../css/App.css";

/**
 * A linear progress bar loader.
 *
 *
 */
export const PageLoader = () => (
  <div>
    <Backdrop open className="backdrop-design">
      <center>
        <Box>
          <div className="spinner"></div>

          <br />
          <br />
          <Typography variant="h7" color="textSecondary">
            Connecting to the chain. Please wait for some time .
          </Typography>
          <br />
          <br />
          <LinearProgress color="secondary" />
        </Box>
      </center>
    </Backdrop>
  </div>
);
