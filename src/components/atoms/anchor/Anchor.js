import React from 'react'

export const Anchor = (props) => {
    return (
        <a className={props.className} href={props.href} >
            {props.content}
        </a>
    )
}

export default Anchor
