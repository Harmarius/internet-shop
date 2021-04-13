import checkout from "./shopping-cart-solid.svg"

function Checkout({products}) {
    const bought = products.filter(product => {
        return product.bought;
      });
    return(
        <div className="checkout">
            <img src={checkout}alt="ShopCart"/>
            <span className="counter">
                {bought.length}
            </span>
        </div>
    )

}

export default Checkout;