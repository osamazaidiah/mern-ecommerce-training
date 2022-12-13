export const getNumberOfItemsInCart = (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.count, 0);

export const getCartTotal = (cartItems) => {
  if (cartItems.length < 1) return 0;

  return cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
};

export const deleteItemFromCart = (product, cartItems) =>
  cartItems.filter((item) => item.id !== product.id);

export const addItemToCart = (product, cartItems) =>
  cartItems.find((i) => i.id === product.id)
    ? cartItems.reduce(
        (acc, item) =>
          item.id === product.id
            ? [...acc, { ...item, count: item.count + 1 }]
            : [...acc, item],
        []
      )
    : [...cartItems, { ...product, count: 1 }];

export const removeItemInCart = (product, cartItems) => {
  const isInCart = cartItems.find((i) => i.id === product.id);
  if (!isInCart) return null;
  const { count } = isInCart;
  return count > 1
    ? cartItems.reduce(
        (acc, item) =>
          item.id === product.id
            ? [...acc, { ...item, count: item.count - 1 }]
            : [...acc, item],
        []
      )
    : deleteItemFromCart(product, cartItems);
};

export const updateItemInCart = (operation, product, cartItems) => {
  if (operation === "add") return addItemToCart(product, cartItems);
  if (operation === "remove") return removeItemInCart(product, cartItems);
  if (operation === "delete") return deleteItemFromCart(product, cartItems);
};
