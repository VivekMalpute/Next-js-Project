import React from 'react'
import { useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { IncrementOperator } from '@/redux/features/auth-slice';

const Register = ()=> {
    const AddNumber:any = useAppSelector((state)=> state.authReducer.value);

    const dispatch = useDispatch<AppDispatch>();

    const handleOnClick = ()=>{
        dispatch(IncrementOperator(1))
    }

  return (
    <>
    <button onClick={()=>handleOnClick()}>Add</button>
    <h1>Count : {AddNumber}</h1>

    </>
    
  )
}


export default Register;
