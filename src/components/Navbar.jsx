import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {MdFingerprint} from 'react-icons/md'

import {FaBars,FaTimes} from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css';
import { IconContext } from 'react-icons/lib'
function Navbar() {
    const [click,setClick] = useState(false)
    const [button,setButton] = useState(true)


    const handleClick = () => setClick(!click)
    const closeMobilemenu = () => setClick(false)

    const showButton=()=>{
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    useEffect (() =>{showButton();
       showButton(); 
    },[]);

     window.addEventListener('resize',showButton)

    return ( 
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobilemenu}>
                    <MdFingerprint className="navbar-icon" />
                    LAVISH
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/>:<FaBars/>}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobilemenu}>
                            Home
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link to='Services' className="nav-links" onClick={closeMobilemenu}>
                            Services
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link to='Products' className="nav-links" onClick={closeMobilemenu}>
                            Products
                        </Link>
                        
                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle="btn--outline">SIGN UP</Button>
                            </Link>
                        ):(
                            <Link to='/sign-up' className="btn-link" onClick={closeMobilemenu}>
                                 <Button buttonStyle="btn--outline" buttonSixe="btn--mobile">SIGN UP</Button>
                            </Link>
                        )}
                    </li>

                </ul>

                

            </div>

        </div>
        </IconContext.Provider>            
        </>
    )
}

export default Navbar
