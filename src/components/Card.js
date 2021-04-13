import Button from "./Button";
import Rating from "./Rating/Rating";

function Card({product, binBottom}) {
  console.log(product)
  const {id, name, price, bought, rating, image} = product;
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="Load. Please wait."/>
      </div>
      <div className="card-info">
        <div className="card-name">
          {name}
        </div>
        <div className="card-rating">
          <Rating stars={rating}/>
        </div>
        <div className="card-price">
          {price}₽
        </div>
        <div className="card-button">
          <Button id={id} bought={bought} binBottom={binBottom}/>
        </div>
      </div>
    </div>
  );
}

export default Card;