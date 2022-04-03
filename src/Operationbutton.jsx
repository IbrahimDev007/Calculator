import React from "react";
import { Action } from "./LApp";

export default function Operationbutton({ dispatch, operation }) {
	return (
		<button
			onClick={() =>
				dispatch({ type: Action.CHOSE_OPERATION, payload: { operation } })
			}
		>
			{operation}{" "}
		</button>
	);
}
