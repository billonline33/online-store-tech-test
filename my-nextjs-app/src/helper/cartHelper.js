// function to add an item to list of items
// first check if item with same id exists, if yes just add to quantity
// else add new item to list
export const addItem = (item, items) => {
  const newItems = items.slice();
  const itemIndex = newItems.findIndex(
    (cartItem) => cartItem.productId === item.productId
  );
  if (itemIndex >= 0) {
    newItems[itemIndex].quantity += 1;
  } else {
    newItems.push({ ...item, quantity: 1 });
  }
  return newItems;
};

// function to change quantity of an item from list of items
export const changeQuantity = (id, quantity, items) => {
  const newItems = items.map((item) => {
    if (item.productId === id) {
      item.quantity = quantity;
    }
    return item;
  });
  return newItems;
};

//function to delete an item from list of items
export const deleteItem = (id, items) => {
  const newItems = items.filter((item) => item.productId !== id);
  return newItems;
};
