import React,{useEffect, useState, Fragment} from 'react'
import './Player.css'
import {getUserData} from '../../../servicios/spotify';
import Footer from '../../organism/footer/Footer';
import Header from '../../organism/header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favoritos from '../../organism/favoritos/Favoritos';
import Home from '../../templates/home/Home';

const Player = () => {
    //se crea un objeto donde se va a guardar la información del usuario
    const [userInfo, setUserInfo] = useState({});
    //se obtiene el token del localstorage
    const _token =  JSON.parse(localStorage.getItem('token'));

    //obtenemos los datos del usuario de la api y los guardamos en el state de userInfo
    const getUserInfo = async ()=>{
        const userInfo= await getUserData(_token.access_token);
        setUserInfo(userInfo);
       
    }
    //ejecutamos la función cada que se monte el componente
    useEffect(() => {
        getUserInfo();
    }, [])

    return (
        
        <Fragment>
            
            <div className="body-container"> 
                <Router>
                    
                    <div className="body-contain"> 
                        <Header 
                            name={userInfo.display_name || "Nombre"}
                            img={ userInfo.images ? userInfo.images[0].url : 'https://img.pngio.com/user-png-image-royalty-free-stock-png-images-for-your-design-user-png-512_512.png'} 
                        >
                        </Header> 
                        
                        <div className=" pagina">
                            <Switch>
                            <Route exact path="/" >
                                <Home></Home>
                            </Route>
                            <Route path="/favos" component={Favoritos} />
                            
                            </Switch>
                        </div> 
                        <Footer></Footer>
                    </div>
                    
            
                </Router>
            </div>
            
        </Fragment>
        
    )
}

export default Player
