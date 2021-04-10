import Logo from "./Logo/Logo";
import Checkout from "./Checkout/Checkout";
import Menu from "./Menu";

function Header() {
    return(
        <div className="header">
            <Logo/>
            <Menu/>
            <Checkout/>
            <a className="logout" href="#/">выход</a>
            
        </div>
    )
}

export default Header;