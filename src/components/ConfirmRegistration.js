import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Divider from "@mui/material/Divider";

import { CircularPageLoader } from "./static/CircularPageLoader";

import { USER_TYPES } from "./enum/UsersEnum";

import "../css/NewUser.css";

/**
 * Renders the registration confirmation page for new addresses.
 *
 *
 */
const ConfirmRegistration = ({ contract, currentAddress, isAuthenticated }) => {
  const [showLoader, setShowLoader] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);

  function getContractMethod() {
    let method = null;
    switch (location.state.type) {
      case USER_TYPES[0]:
        method = contract["addProducer"];
        break;
      case USER_TYPES[1]:
        method = contract["addDistributor"];
        break;
      case USER_TYPES[2]:
        method = contract["addRetailer"];
        break;
    }
    return method;
  }

  async function addNewUser() {
    setShowLoader(true);
    const contractMethod = getContractMethod();

    contractMethod(currentAddress)
      .then((receipt) => {
        console.log(receipt);
        setShowLoader(false);
        navigate("/registration-success", {
          state: {
            userType: location.state.type,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        setShowLoader(false);
        navigate("/registration-failure");
      });
  }

  return (
    <div className="new-user-body">
      <Backdrop open className="backdrop-design">
        <Paper elevation={0} className="new-user-paper">
          <IconButton color="inherit">
            <ArrowBackIosIcon
              fontSize="large"
              aria-label="back"
              onClick={() => navigate(-1)}
            />
          </IconButton>
          <center>
            <Typography
              component="h1"
              variant="h5"
              style={{ fontWeight: "500" }}
            >
              Confirm registration as '
              {location.state ? location.state.type : null}'?
            </Typography>
            <p>
              By clicking on confirm, you agree to our terms and conditions as
              well. <br />
              Please read our terms and conditions here.
            </p>
            <Button
              style={{ width: 200, marginBottom: 30 }}
              variant="contained"
              color="primary"
              className="confirm-button"
              onClick={addNewUser}
            >
              Confirm
            </Button>
          </center>
        </Paper>
      </Backdrop>
      <CircularPageLoader open={showLoader} />
    </div>
  );
};

export default ConfirmRegistration;
