import React from 'react';
import NewReducer, { Reducer} from '../Component/NewReducer';
import { useReducer ,useState,createContext} from 'react';

export const Theme=createContext();
export default function Usereducer() {
    const [Jack, setJack] = useState([{'name':'jon wick','age':38}])
    const [state, dispatch] = useReducer(Reducer, Jack); 
  
 const Role='jony'
  return (
    <div>useReducer<br/>
    <button onClick={()=>dispatch({'type':'increment'})}>increment</button>
    <button onClick={()=>dispatch({type:'decrement'})}>decrement </button>
    <Theme.Provider value={Role}>
<NewReducer/>
    </Theme.Provider>
    
          
    </div>
  )
}

 