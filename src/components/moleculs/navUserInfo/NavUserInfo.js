import React from 'react'
import NavAnchor from '../../atoms/anchor/NavAnchor';
import Image from '../../atoms/image/Image'
import './NavUserInfo.css'
const NavUserInfo = (props) => {
    return (
        <div className="nav-userInfo">
            <NavAnchor clase={props.aclassname}>

                <Image src={props.src} className={props.imgclassname} alt="" ></Image>
                <h1 className="header-name">{props.name} </h1>
            </NavAnchor>
        </div>
    )
}

export default NavUserInfo
