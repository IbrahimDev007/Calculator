import React, {createContext,useReducer,useContext} from "react";
import {AppReducer} from './AppReducer';
const initialState={
    transaction:[
         { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}

export const GlobalContext=createContext(initialState); 
export const Globalprovider =({children})=>
{
    const [state, dispatch] = useReducer(AppReducer, initialState)
//Action
 function deleteTransaction(id){
    dispatch({
      type:"Delate_Transaction",
      playload:id  
    })
}
function addTransaction(transaction){
    dispatch({
      type:"Add_Transaction",
      playload:transaction  
    })
}
    return(
        <GlobalContext.Provider value={{transaction:state.transaction,deleteTransaction,addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}