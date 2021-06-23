import React from 'react'

const NavAnchor = (props) => {
    return (
        <a className={props.clase} >
            {props.children}
        </a>
    )
}

export default NavAnchor
