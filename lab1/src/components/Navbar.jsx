import logo from '../images/ironhack-logo-xs.png';
import logo2 from '../images/v01okafs.bmp';
function Navbar(){
    return(
        <nav className='navbar'>
            <img src={logo} alt="imagen1"></img>
            <img src={logo2} alt="imagen 2"></img>
        </nav>
    )
}

export default Navbar;