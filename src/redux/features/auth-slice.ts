import  {createSlice, PayloadAction} from "@reduxjs/toolkit"
 
// type InitialState = {
//     value: AuthState
// }
// type AuthState = {
//     count: Number;
// }
// const initialState = {
//     value: {
//         count: 0,
//     } as AuthState,
// } as InitialState;


interface CounterState {
    value: number;
  }
  
  const initialState: CounterState = {
    value: 1,
  };

export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        IncrementOperator :(state,action: PayloadAction<Number>)=>{
            state.value++;
        }
    }
})

export const {IncrementOperator} = auth.actions;
export default auth.reducer;