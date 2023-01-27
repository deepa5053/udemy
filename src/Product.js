import React from 'react';

function Product(props) {
   console.log ("title="+props.title + " price=" + props.price + " description="+ props.description);
    return (
        <div className="product">
        <div>
            <h2>{props.title}</h2>
        </div>
            <div><p>{props.price}</p></div>
            <div><p>{props.description}</p></div>
        </div>
    );
};

export default Product;