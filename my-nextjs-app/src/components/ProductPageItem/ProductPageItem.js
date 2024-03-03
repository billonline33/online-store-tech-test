import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import styles from "./ProdutPageItem.module.css";

const ProductPageItem = (props) => {
  const {
    productId,
    productName,
    pricePerItem,
    productImageUrl,
    rating,
    count,
    onAddToCart,
  } = props;
  return (
    <div className={styles.productContainer}>
      <div className={styles.productImageBox}>
        <img className={styles.productImage} src={productImageUrl} />
      </div>
      <div className={styles.productDescription}> {productName} </div>
      <div className={styles.productPrice}>
        <span>${pricePerItem}</span>
        <span>
          <Rating
            name="rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
          ({count})
        </span>
      </div>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#4F46E5",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: "10px",
        }}
        onClick={() =>
          onAddToCart({ productId, productName, pricePerItem, productImageUrl })
        }
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductPageItem;
