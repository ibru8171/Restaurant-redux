import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


// creating thunk
// thunk is used to make api cals in redux

export const fetchRestuarent = createAsyncThunk("retuarentList/fetchrestuarent",()=>{
   const result= axios.get('/restaurant.json').then(response=>response.data)
    console.log("===data===");
    console.log(result);
    return result;
})

const restuarentSlice = createSlice({
    name:"restuarentList",
    initialState:{
        loading:false,  // pending stae
        allRestuarent:[], // resolve state
        error:"" // rejected state
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestuarent.pending,(state)=> {
            state.loading=true;
            })
            builder.addCase(fetchRestuarent.fulfilled,(state,action)=>{
                state.loading= false;
                state.allRestuarent = action.payload;
                state.error=""
                })
                builder.addCase(fetchRestuarent.rejected,(state,action)=>{
                    state.loading=false;
                    state.allRestuarent=[]
                    state.error=action.error.message;
                    })
    }
})
export default restuarentSlice.reducer;