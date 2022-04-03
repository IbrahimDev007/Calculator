
import React ,{useContext}from 'react'
import {Theme} from './Custom';
export const Reducer=(state,action)=>{
    switch (action.type) {
        case "increment":
             console.log('increment')
            break;
         case "decrement":
             console.log('decrement')
            break;
    
        default:
            console.log('defult value')
            break;
    }
}



export default function NewReducer() {
  const Role=useContext(Theme);
  return (
    <div>NewReducer{Role}</div>
  )
}

