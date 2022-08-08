import { List, ListItem, ListItemText} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle=makeStyles({
    heading:{
        fontFamily:'Cera Pro' ,
            fontWeight:'700',
            fontSize:'16px',
            lineHeight:'24px',
    },

    iteming:{
      fontFamily:'Cera Pro' ,
          fontWeight:'400',
          fontSize:'16px',
          lineHeight:'24px',
    },

    box1:{
      height: "auto",
      width: "214px",
      display: "flex",
      padding: "0px",
      gap: "16px",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    
});

interface footerNavPropsType{
  listHead:string;
  listingItems:string[];
}

function FooterNav(props:footerNavPropsType) {

  const classes = useStyle();

  const trying = props.listingItems;
  const listing = trying.map((item, key) =>
  <ListItem style={{ padding: "0px" }} key={key} >
    <ListItemText secondary={item} classes={{secondary:classes.iteming}}/>
  </ListItem>
  );
  
  return (
    <List
      style={{
        height: "auto",
        width: "214px",
        display: "flex",
        padding: "0px",
        gap: "16px",
        flexDirection: "column",
        alignItems: "flex-start",
      }}

    >
      <ListItem style={{ padding: "0px" }}>
        <ListItemText classes={{primary:classes.heading}} primary={props.listHead}/>
      </ListItem>
      {listing}
    </List>
  );
}

export default FooterNav;