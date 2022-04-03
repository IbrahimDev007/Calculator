import React, { useContext } from 'react';
import { useState ,useEffect} from 'react';
import { GlobalContext } from '../Content/GlobalState';
// import axios from 'axios';
// //1. Import coingecko-api
// const CoinGecko = require('https://api.coingecko.com/api/v3/coins/categories/list');


    
 
export default function AddTransaction() {
    const [text, settext] = useState('');
    const [amount, setamount] = useState(0);
    const {addTransaction}=useContext(GlobalContext);
    // useEffect(()=>{
    //   const  fetchData = async () => {
    //        const result = await axios(
    //          'https://api.coingecko.com/api/v3/coins/categories/list','https://api.coingecko.com/api/v3/coins/categories/list',
    //           'accept: application/json'
    //        ).then((res)=>console.log(res.data))
      
    //        }})
    const addSubmit=(e)=>{
     
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*10000),
            text,
           amount: Number(amount),
        }
      addTransaction(newTransaction);

    }


  return (
    <div>
        <h3>Add new transaction</h3>
        <form   >
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text"  value={text} onChange={(e)=>settext(e.target.value)}placeholder='Enter Text...' />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount<br/>
                (negative-expense,positive-income)</label>
                <input type="number" value={amount} onChange={(e)=>setamount(e.target.value)} placeholder='Enter amount...' />
            </div>
            <button className='btn' onClick={addSubmit}>Add transaction</button>
        </form>
    </div> 
  )
}
