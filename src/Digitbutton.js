import React from "react";
import { Action } from "./LApp";

export default function Digitbutton({ dispatch, digit }) {
	return (
		<button
			onClick={() => dispatch({ type: Action.Add_Digir, payload: { digit } })}
		>
			{digit}{" "}
		</button>
	);
}
