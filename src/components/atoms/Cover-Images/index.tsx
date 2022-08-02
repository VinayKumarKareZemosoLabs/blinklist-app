import React from 'react';

interface CoverImagePropsType{
  source:string;
}

function CoverImage(props:CoverImagePropsType) {
  return (
    <img src={props.source} alt="try"></img>
  )
}

export default CoverImage