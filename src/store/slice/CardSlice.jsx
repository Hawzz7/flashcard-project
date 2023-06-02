import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
     name : "flashcard",
     initialState : {
        cardValues: localStorage.getItem("cardValues")
        ? JSON.parse(localStorage.getItem("cardValues"))
        : []
     } ,
     reducers:{
        setCardValue(state, action){
            state.cardValues.push({
                card: action.payload
            });
            console.log(action.payload);
            localStorage.setItem("cardValues", JSON.stringify(state.cardValues));
        }
     }
})

// console.log(CardSlice.actions);

export default CardSlice.reducer ;

export const {setCardValue} = CardSlice.actions