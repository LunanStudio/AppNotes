import './searchtext.css'
import React from 'react'
function Searchtext ({searchValueState, searchValueSetState}){
    return(
        <input 
        className="Search" 
        placeholder="Search note"
        value={searchValueState}
        onChange = {(event) => {
            searchValueSetState(event.target.value)
            }}
        />
    )
}

export {Searchtext}