import React from 'react'
import Menu from './Menu'

// method to open the side menu depending on the value of the nav value
// every time I click the value is changing from true to false or from false to true
// if its true the menu is displayed, if its false the menu is hidden 
export default function Navbar({setPage}){
    return (
        <Menu setPage={setPage} />
    )
}
