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
  const { isOpen, closeModal } = props;
  const [open, setOpen] = useState(isOpen);
  const onDelete = () => {
    console.log("delete clicked");
  };
  const onQuantityChange = () => {
    console.log("quantity changed");
  };
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
          <CartItem
            productName="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
            pricePerItem={100}
            productImageUrl="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            onDelete={onDelete}
            onQuantityChange={onQuantityChange}
          />
          <Divider />
          <CartItem
            productName="Mens Casual Premium Slim Fit T-Shirts"
            pricePerItem={100}
            productImageUrl="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            onDelete={onDelete}
            onQuantityChange={onQuantityChange}
          />
          <Divider />
          <CartItem
            productName="Mens Cotton Jacket"
            pricePerItem={100}
            productImageUrl="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            onDelete={onDelete}
            onQuantityChange={onQuantityChange}
          />
          <Divider />
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
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

export default CartOverlay;
