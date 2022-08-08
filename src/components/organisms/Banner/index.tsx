import { Box, Typography } from "@mui/material";
import React from "react";
import BannerImage from "../../../images/bannerimg.png";
import {makeStyles} from "@material-ui/styles";


const useStyles=makeStyles({
  box1:{
    height: "264",
    width: "912px",
    backgroundColor: "#F1F6F4",
    display: "flex",
    justifyContent: "space-around",
  },
});

function Banner() {
  const classes=useStyles();
  return (
    <Box className={classes.box1}>
      <Box height={"264px"} width={"461px"}>

        <Typography
          variant="h1"
          fontStyle={"normal"}
          fontSize={"36px"}
          fontWeight={"700"}
          lineHeight={"45px"}
          paddingTop={"45px"}
          textAlign={"left"}
        >
          Explore Books on <br></br>
          entrepreneurship
        </Typography>

        <Typography
          variant="subtitle2"
          fontStyle={"normal"}
          fontSize={"18px"}
          lineHeight={"23px"}
          color={"#6D787E"}
          paddingTop={"15px"}
          textAlign={"left"}
        >
          Everything you need to know about thriving on a<br></br>
          shoestring budget, making your first million, and hiring <br></br>
          right from the start.
        </Typography>
      </Box>

      <Box>
        <img
          src={BannerImage}
          alt="BannerImage"
          height={"250px"}
          width={"250px"}
        />
      </Box>
    </Box>
  );
}

export default Banner;