import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="mainItemContainer">
      <div className="itemShowContainer">
        <div className="itemImageContainer">
          <img alt={product.name} src={product.img} className="itemImage" />
        </div>
        <div className="itemInfo">
          <div className="itemTitle">{product.name}</div>
          <div className="itemDescription">{product.description}</div>
          <div className="itemPrice">
            {product.price ? "USD " + product.price : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
