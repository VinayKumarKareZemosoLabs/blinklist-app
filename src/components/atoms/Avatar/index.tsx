import {Avatar} from '@mui/material';

import {makeStyles} from '@mui/styles'

import React from 'react';


const useStyles=makeStyles( _theme => ({
  avatar:{
    height: '44px',
    width: '44px',
    // top:'9px',
    // left: '15px'
  }
}));

interface AvatarPropsType
{
    chars:string;
}


function Avatars(props:AvatarPropsType) {

  const classes = useStyles();

  return (
    <>
      <Avatar sx={ {bgcolor:'#69A6E3'} } className={classes.avatar}>
        {props.chars}
      </Avatar>
    </>
  )
}

export default Avatars;