import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'
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
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo">
                    LAVISH
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? "bars":"times"}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                            Home
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link to='Services' className="nav-links">
                            Services
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link to='Products' className="nav-links">
                            Products
                        </Link>
                        
                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle="btn--outline">SIGN UP</Button>
                            </Link>
                        ):(
                            <Link to='/sign-up' className="btn-link">
                                 <Button buttonStyle="btn--outline" buttonSixe="btn--mobile">SIGN UP</Button>
                            </Link>
                        )}
                    </li>

                </ul>

                

            </div>

        </div>
            
        </>
    )
}

export default Navbar
