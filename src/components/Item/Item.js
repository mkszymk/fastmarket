import "./Item.css";

const Item = ({ product }) => {
  return (
    <div className="singleItemContainer">
      <img src={product.img} alt={product.name} className="itemImg"></img>
      <div className="itemInfoContainer">
        <div className="itemTitle">{product.name}</div>
        <div className="itemDescription">{product.description}</div>
        <div className="itemPrice">USD {product.price}</div>
      </div>
    </div>
  );
};

export default Item;
