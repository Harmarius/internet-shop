import Logo from "./Logo/Logo";
import Checkout from "./Checkout/Checkout";
import Menu from "./Menu";

function Header({products}) {
    return(
        <div className="header">
            <Logo/>
            <Menu/>
            <Checkout products={products}/>
            <a className="logout" href="#/">выход</a>
            
        </div>
    )
}

export default Header;