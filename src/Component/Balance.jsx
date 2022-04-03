import React ,{useContext}from 'react'
import { GlobalContext } from '../Content/GlobalState'
export default function Balance () {
  const {transaction} = useContext(GlobalContext);
  const amounts=transaction.map(transaction=>transaction.amount);
  const total=amounts.reduce((pre,curr)=>(pre+curr),0).toFixed(2);
  return (
    <div>
        <h4>Your blance</h4>
    <h1 id="balance">{total}</h1>
    </div>
  )
}
