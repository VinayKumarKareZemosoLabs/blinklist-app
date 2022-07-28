import React, { useState } from 'react'
import './index.css'
import {InputBase} from '@mui/material';
import {ReactComponent as SearchIcon} from "../../../images/search.svg";


interface SearchBarPropsType{
    palceholder:string
}

function SearchBar(this: { title: string; component: (props: SearchBarPropsType) => JSX.Element; }, props:SearchBarPropsType) {
  const [filter,setFilter]=useState('');
  const searchText=(event: { target: { value: React.SetStateAction<string>; }; })=>{
      setFilter(event.target.value);
  }
  console.warn(filter)
  return (
    <div className='search'>
      <div className='one'>
          <SearchIcon/>
          <InputBase placeholder={props.palceholder}
          value={filter}
          onChange={searchText.bind(this)}
          />
      </div>
      <div className='two'></div>
      </div>
  )
}

export default SearchBar;