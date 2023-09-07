import React, { useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/shared/logo.svg'
import navIcon from '../../assets/shared/icon-hamburger.svg'
import closeIcone from '../../assets/shared/icon-close.svg'
import { NavLink } from 'react-router-dom'
export default function Navbar({ path }) {
    const [navState, setNaveState] = useState(false);
    const [closeIconState, setCloseIconState] = useState('none');
    function navControler(state) {
        if (state == 'open') {
            setNaveState(true);
            setCloseIconState('block');
        }
        else {
            setNaveState(false);
            setCloseIconState('none');
        }
    }
    return (
        <>
            <nav>
                <img src={logo} className={style.logo} />
                <img onClick={() => { navControler('open') }} src={navIcon} className={style.navIcon} />
                <img onClick={() => { navControler('colse') }} src={closeIcone} className={style.closeIcone} style={{ display: closeIconState }} />
                <div className={style.line}></div>

                <ul className={navState ? style.opend : style.closed} >
                    <li className={path == "/home" ? style.active : ''}><NavLink to="/home"><span>00</span>home</NavLink></li>
                    <li className={path == "/destination" ? style.active : ''}><NavLink to="/destination"><span>01</span>Destination</NavLink></li>
                    <li className={path == "/crew" ? style.active : ''}><NavLink to="/crew"><span>02</span>crew</NavLink></li>
                    <li className={path == "/technology" ? style.active : ''}><NavLink to="/technology"><span>03</span>Technology</NavLink></li>
                </ul>
            </nav>
        </>
    )
}
