import checkout from "./shopping-cart-solid.svg"

function Checkout() {
    return(
        <div className="checkout">
            <img src={checkout}alt="ShopCart"/>
            <span className="counter">0</span>
        </div>
    )

}

export default Checkout;