import React from 'react';

interface IconPropsType{
  source:string;
}

function Icons(props:IconPropsType) {
  return (
    <img src={props.source} alt="try"></img>
  )
}

export default Icons