export const addItemToCart = (cartItems, cartItemToAdd) => {
  // すでに存在しているアイテムがあるか探す
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // もし追加済みのアイテムの場合
  if (existingCartItem) {
    // そのアイテムのquantityを+1したリストを返す
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // 初めての追加の場合はquantityを1にしてからリストを返す
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
