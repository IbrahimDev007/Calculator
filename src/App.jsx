import React from "react";
import CoinDetails from "./Pages/CoinDetails";
import CoinSummery from "./Pages/CoinSummery";
import './App.css';
// import Header from "./Component/Header";
// import Balance from "./Component/Balance";
// import "./App.css";
// import IncomeExpense from "./Component/IncomeExpense";
// import TransactionList from "./Component/TransactionList";
// import AddTransaction from "./Component/AddTransaction";
// import { Globalprovider } from "./Content/GlobalState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";

export default function App() {
	return (
		<div>
			{/* <Globalprovider>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpense />
				<TransactionList />
				<AddTransaction />
                 
			</div>
            </Globalprovider> */}
				
			<Router>
			<Header />
				<Routes>
					<Route path="/" element={<CoinSummery />} />
					<Route path="/coinDetail" element={<CoinDetails />} />
				</Routes>
			</Router>
		</div>
	);
}
