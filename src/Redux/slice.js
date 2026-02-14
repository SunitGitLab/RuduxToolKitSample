import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [] 
}

const addTocart = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem: (state, actions) => {
            //state.value+=1;
            state.items.push(actions.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.items))
        },
        removeItem:(state, actions) =>  {
           // state.value > 0 ?  state.value-=1 : state.value=0;
            state.items= state.items.filter((item) => item.id !== actions.payload.id)
            localStorage.setItem('cartItems', JSON.stringify(state.items))
        },
        clearCart: (state) => {
            state.items = [];
        
        }
    }   
})

export const {addItem, removeItem, clearCart} = addTocart.actions;    
export default addTocart.reducer;