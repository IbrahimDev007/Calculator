import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../Content/GlobalState';


export default function Tranjaction({transaction}) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const {deleteTransaction}=useContext(GlobalContext);
  return (

   <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
    {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>X</button>
</li>
  )
}

