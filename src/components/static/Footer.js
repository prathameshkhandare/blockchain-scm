import React from "react";

import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import "../../css/Footer.css";

/**
 * Footer component. Present in every page when user is an authenticated one.
 *
 *
 */
export default function Footer({ isAuthenticated }) {
  if (!isAuthenticated) {
    return null;
  } else {
    return (
      <div>
        <center>
          <footer>
            <Container maxWidth="sm">
              <Typography variant="body1" style={{ fontSize: 13 }}>
                <div className="AppFooter">
                  {/* social media */}

                  <br />
                  <p>Developed by Prathmesh.... </p>
                </div>
              </Typography>
            </Container>
          </footer>
        </center>
      </div>
    );
  }
}
