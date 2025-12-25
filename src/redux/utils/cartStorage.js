export const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem("cartItems");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveCartToStorage = (items) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

export const clearCartStorage = () => {
  localStorage.removeItem("cartItems");
};
