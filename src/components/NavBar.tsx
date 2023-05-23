import * as React from 'react';
import './NavBar.css'
import GridIcon from './grid_icon.svg'
import IconMenu from './icon-menu.svg'
import XSymbol from './x-symbol.svg'
function NavBar() {
    const [isMobile,setIsMobile]=React.useState<Boolean>(false);
    return (
        <>
            <nav>
                <div className='brand'>
                <a href="#"><h1>Food Grid</h1></a>
                <img src={GridIcon}></img>
                </div>
                <ul className={isMobile? "nav-links-mobile" : "nav-links"} onClick={()=>setIsMobile(false)}>
                <a href="#" className="Nav-item mobile-item"><li>Home</li></a>
                <a href="#" className="Nav-item mobile-item"><li>Become a vendor</li></a>
                <a href="#"className="Nav-item mobile-item"><li>Menus</li></a>
                <a href="#" className="Nav-item mobile-item"><li>About us</li></a>
                <a href="#"><div className={isMobile? ".signup-button-mobile" : "signup-button"}>Sign up</div></a>
                </ul>
                <img className='mobile-menu-icon' src={isMobile? XSymbol : IconMenu} onClick={()=>setIsMobile(!isMobile)}></img>
            </nav>
        </>
    )
}

export default NavBar