import './NavBar.css'
import GridIcon from './grid_icon.svg'
function NavBar() {
    return (
        <>
            <nav>
                <div className='brand'>
                <h1>Food Grid</h1>
                <img src={GridIcon}></img>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Become a vendor</li>
                    <li>Menus</li>
                    <li>About us</li>
                </ul>
                <div className='signup-button'>Sign up</div>
            </nav>
        </>
    )
}

export default NavBar