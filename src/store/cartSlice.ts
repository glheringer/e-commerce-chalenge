import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  listPrice: number;
  price: number;
  name: string | undefined;
  image: string | undefined;
  quantity: number;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Adicionar ao carrinho com verificação de duplicata
    addToCart(state, { payload }: PayloadAction<Product>) {
      const existingProduct = state.items.find(item => item.id === payload.id);

      if (existingProduct) {
        existingProduct.quantity += 1; // Aumenta a quantidade se já estiver no carrinho
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }
    },

    // Remover produto do carrinho pelo id
    removeFromCart(state, { payload }: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== payload);
    },

    // Esvaziar o carrinho
    clearCart(state) {
      state.items = [];
    },

    // Alterar a quantidade de um produto no carrinho
    updateQuantity(state, { payload }: PayloadAction<{ id: number; quantity: number }>) {
      const product = state.items.find(item => item.id === payload.id);
      
      if (product && payload.quantity > 0) {
        product.quantity = payload.quantity;
      }
    },
  },
});

// Exporta as ações para serem usadas nos componentes
export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;

// Exporta o reducer para ser incluído na store
export default cartSlice.reducer;
