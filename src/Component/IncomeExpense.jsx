import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Content/GlobalState";

export default function IncomeExpense() {
	const { transaction } = useContext(GlobalContext);
	const amounts = transaction.map((transaction) => transaction.amount);
	const income = amounts
		.filter(i => i > 0)
		.reduce((pre, i) => (pre += i), 0)
		.toFixed(2);
	const expanse = (amounts
		.filter(i => i < 0)
		.reduce((pre, i) => (pre += i), 0) * -1)
    .toFixed(2);
	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p id="money-plus" className="money plus">
					+${income}
				</p>
			</div>
			<div>
				<h4>Expanse</h4>
				<p id="money-minus" className="money minus">
					-${expanse}
				</p>
			</div>
		</div>
	);
}
