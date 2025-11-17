import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const sendCartData = createAsyncThunk(
  "cart/updateCart",
  async (productId, { rejectWithValue }) => {
    try {
      const res = await fetch("https://dummyjson.com/carts/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          merge: true, // this will include existing products in the cart
          products: [{ id: productId, quantity: 1 }],
        }),
      });
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      return data.products;
    } catch (err) {
      rejectWithValue(err.message);
    }
  },
);

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //   state.items = updatedItems
    // },
    // setLoading: (state) => {
    //   state.status = "loading";
    //   state.error = null;
    // },
    // setSuccess: (state, action) => {
    //   state.status = "succeeded";
    //   state.items = action.payload; // Riceve i prodotti dal server
    // },
    // setError: (state, action) => {
    //   state.status = "failed";
    //   state.error = action.payload;
    // },
    addItem: (state, action) => {
      state.items = action.payload
    },
    updateItemQty: (state, action) => {
      const updatedItems = [...state.items];
      const { productId, amount } = action.payload;
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId,
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }
      state.items = updatedItems;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendCartData.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    builder.addCase(sendCartData.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    })
    builder.addCase(sendCartData.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload || action.error.message;
    })
  },
});

export const { addItem, updateItemQty, setLoading, setSuccess, setError } =
  cartSlice.actions;

/* OPZIONE 1: thunk manuale */

// export const sendCartData = (productId) => {
//   return async (dispatch) => {
//      dispatch(setLoading())

//     try {
//       const res = await fetch('https://dummyjson.com/carts/1', {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           merge: true, // this will include existing products in the cart
//           products: [{ id: productId, quantity: 1 }],
//         }),
//       })
//       if (!res.ok) {
//         throw new Error('Something went wrong')
//       }
//       const data = await res.json()

//       dispatch(setSuccess(data.products))
//     } catch (err) {
//       dispatch(setError(err.message))
//     }
//   }
// }

export default cartSlice.reducer;
