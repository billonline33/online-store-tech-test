import { useState } from "react";
import Button from "@mui/material/Button";
import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Divider from "@mui/material/Divider";
import CartItem from "@/components/CartItem/CartItem";

const CartOverlay = (props) => {
  const { isOpen, closeModal, cartItems, onQuantityChange, onDeleteItem } =
    props;
  const [open, setOpen] = useState(isOpen);

  React.useEffect(() => {
    setOpen(props?.isOpen);
  }, [props]);
  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => {
          closeModal();
          setOpen(false);
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: 336,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Cart
          </Typography>
          <Divider />
          {cartItems &&
            cartItems.map((item, index) => {
              return (
                <div key={item.productId}>
                  <CartItem
                    productId={item.productId}
                    productName={item.productName}
                    pricePerItem={item.pricePerItem}
                    productImageUrl={item.productImageUrl}
                    onDelete={onDeleteItem}
                    onQuantityChange={(newQuantity) =>
                      onQuantityChange(item.productId, newQuantity)
                    }
                    quantity={item.quantity}
                  />
                  <Divider />
                </div>
              );
            })}
          {!cartItems || cartItems.length === 0 ? (
            <Typography
              component="p"
              id="modal-desc"
              level="body1"
              textColor="inherit"
              fontWeight="md"
              mt={2}
            >
              The cart is empty
            </Typography>
          ) : (
            <Button
              variant="contained"
              sx={{
                width: "100%",
                bgcolor: "#16A34A",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: "10px",
              }}
            >
              Check Out
            </Button>
          )}
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

export default CartOverlay;
