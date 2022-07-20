import React from 'react';

interface LogoPropsType{
  source:string;
}

function Logo(props:LogoPropsType) {
  return (
    <img src={props.source} alt="try"></img>
  )
}

export default Logo