import { Trash2 } from "lucide-react";
import IconButton from "@mui/material/IconButton";
import styles from "./CartItem.module.css";
import Image from "next/image";

const CartItem = (props) => {
  const {
    productName,
    pricePerItem,
    productImageUrl,
    onDelete,
    onQuantityChange,
  } = props;
  return (
    <div className={styles.cartItem}>
      <div className={styles.imageBox}>
        <img
          className={styles.cartItemImage}
          src={productImageUrl}
          alt="product"
        />
      </div>

      <div className={styles.cartItemDetails}>
        <div className={styles.cartItemDetails1}>
          <div className={styles.cartItemName}>{productName}</div>
          <div>
            <IconButton aria-label="delete" onClick={onDelete}>
              <Trash2 color="#000000" strokeWidth={1} />
            </IconButton>
          </div>
        </div>
        <div className={styles.cartItemDetails2}>
          <div className={styles.cartItemPrice}>${pricePerItem}</div>
          <input
            className={styles.textInput}
            type="number"
            value="1"
            onChange={onQuantityChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
