import React,{useContext} from 'react';
import { GlobalContext } from '../Content/GlobalState';
import Tranjaction from './Tranjaction';
export default function TransactionList
() {
const value = useContext(GlobalContext)

  return (
    <div>
 <h3>History</h3>
 <ul className='list'>
 {value.transaction.map(transaction=><Tranjaction  key={transaction.id} transaction={transaction}/>
 )}
 </ul>

    </div>
  )
}
