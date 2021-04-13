import React  from "react";
import Card from "./Card";

function Content( {products, binBottom }) {
  return (
    <div className="content">
      {products.map(product => {
        return <Card key={product.id} product={product} binBottom={binBottom} />;
      })}
    </div>
  );
}

export default Content;
