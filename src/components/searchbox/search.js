import React from 'react';

import './search.css';


export const SearchBox = (props) => (
    <input
        className="search" 
        placeholder={props.placeholder}
        type='search' 
        onChange={props.handleChange}
    />
)