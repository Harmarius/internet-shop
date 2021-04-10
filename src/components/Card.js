import React, { Component } from 'react';
import Button from "./Button";

class Card extends Component {
    render() {
      const CardProdicts = this.props.items.map(function(item) {
        return (
            <div className="card" key={item.id}>
            <div className="card-image">
                <img src={item.image} alt=""/>
            </div>
            <div className="card-info">
                <div className="card-name">
                    {item.name}
                </div>
                <div className="card-price">
                    {item.price} ₽
                </div>
                <div className="card-button">
                    <Button />
                </div>
            </div>
            </div>
        )
      })
      
      return (
        <div className="content">
          {CardProdicts}
        </div>
      )
    }
  }
export default Card;