// src/store/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock API call
const fetchProductsFromApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "React Basics Course",
          price: 29.99,
          description: "Learn React fundamentals",
        },
        {
          id: 2,
          name: "Advanced React",
          price: 49.99,
          description: "Master advanced React concepts",
        },
        {
          id: 3,
          name: "React Router Deep Dive",
          price: 39.99,
          description: "Complete guide to React Router",
        },
        {
          id: 4,
          name: "Redux Masterclass",
          price: 59.99,
          description: "Expert Redux techniques",
        },
        {
          id: 5,
          name: "Full-Stack React",
          price: 79.99,
          description: "Build full-stack React applications",
        },
      ]);
    }, 1000);
  });
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await fetchProductsFromApi();
    return products;
  }
);

const initialState = {
  products: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
