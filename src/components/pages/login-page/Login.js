import React from 'react'
import './Login.css'
import {loginUrl} from '../../../servicios/spotify'
import Image from '../../atoms/image/Image'
import Anchor from '../../atoms/anchor/Anchor'
export const Login = () => {
    /*
        <img
            src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
            alt="Spotify logo"
         />
          <a className="boton-login" href={loginUrl}>LOGIN WITH SPOTIFY</a>
    */
    return (
        
            <div className="login">
                <Image 
                    className="imagen"
                    src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
                    alt="Spotify logo"
                ></Image>
                {/*Se redirecciona al logind e autenticación del usuario de spotify*/}
                <Anchor 
                    className="boton-login"
                    href={loginUrl}
                    content="LOGIN WITH SPOTIFY"
                ></Anchor>
               
            </div>
    )
}
export default Login;
