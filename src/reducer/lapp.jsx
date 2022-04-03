import React from "react";
import { useReducer } from "react";
import "./styles.css";
import Digitbutton from "./Digitbutton";
import Operationbutton from "./Operationbutton";

// import ButtoneOne from "./Component/ButtoneOne";

// export const useMethod = (props) => {
// 	const keys = Object.keys(props.methods)
// 	const methods = {}
// 	for (let i in keys) {
// 		Object.defineProperties(methods, {
// 			[keys[i]]: {
// 				value: props.methods[keys[i]],
// 				writable: true,
// 				enumerable: true
// 			}
// 		})
// 	}
// 	return methods
// }
// var people = [{
//   "name" : "Darren",
//   "age" : "24",
//   "gender"   : "Male",

// },{
//   "name" : "Mai",
//   "age" : "28",
//   "gender"   : "Female",

// },
// {
//   "name" : {"first_name":"jon doe"},
//   "age" : "28",
//   "gender"   : "Female",

// }];
// people.map((item)=>console.log(item.name?.first_name))
// // const handler = useMethod({
// //   methods: {
// //     increment() {
// //       setIncrement(increment + 1)
// //     },
// //     decrement() {
// //       setDecrement(decrement - 1)
// //     }
// //   }
// // })
export const Action = {
	Add_Digir: "add-digit",
	CHOSE_OPERATION: "chose-operation",
	CLEAR: "clear",
	DELET_DIGIT: "delete-digit",
	EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
	switch (type) {
		case Action.Add_Digir:
			if (payload.digit ==="0" && state.currentOperend === "0") {
				return state;
			}
      if(state.overwrite){
        return{...state,
          currentOperend:payload.digit,
          overwrite:false

      }
    }
			if (payload.digit === "." && state.currentOperend.includes(".")) {
				return state;
			}
			return {
				...state,
				currentOperend: `${state.currentOperend || "  "}${payload.digit}`,
			};
		case Action.CLEAR:
			return {};
    case Action.EVALUATE:
      if (state.operation==null||
        state.currentOperend==null||
        state.previousOperand==null){
          return state
        }
     return{
         ...state,
         previousOperand:null,
         operation:null,
         currentOperend:evaluate(state)
       }
   case Action.DELET_DIGIT:
      if(state.overwrite){
      return{
        ...state,
        overwrite:false,
        currentOperend:null
      }}
      if(state.currentOperend==null)return state;
      if(state.currentOperend.length===1)
      {
        return{
          ...state,
          currentOperend:null
        }
      }
      return{
        ...state,
        currentOperend:state.currentOperend.slice(0,-1)
      
      }
		case Action.CHOSE_OPERATION:
			if (state.currentOperend == null && state.previousOperand == null) {
				return state;
			}
      if(state.currentOperend==null)
      {
        return{
          ...state,
          operation:payload.operation
        }
      }
			if (state.previousOperand == null) {
				return {
					...state,
					operation: payload.operation,
					previousOperand: state.currentOperend,
					currentOperend: null,
				}
			} 
				return {
					...state,
          overwrite:true,
					previousOperand: evaluate(state),
					operation: payload.operation,
					currentOperend: null
				};
	}
}

function evaluate({ currentOperend, previousOperand, operation }) {
	const prev = parseFloat(previousOperand);
	const curr = parseFloat(currentOperend);
	if (isNaN(prev) || isNaN(curr))
   return "";
	let computation = "";
	switch (operation) {
		case "+":
			computation = prev + curr;
			break;
		case "-":
			computation = prev - curr;
			break;
		case "/":
			computation = prev / curr;
			break;
		case "*":
			computation = prev * curr;
			break;
	}
	return computation.toString();
}

function App() {
	const [{ currentOperend, previousOperand, operation }, dispatch] = useReducer(
		reducer,
		{}
	);

	//   const [data,setdata]=useState('koli');

	//  const onClickhandaler=()=>{

	//   setdata('jack jones');
	//    console.log(data)
	//   }
	//   const onClickhandaler2nd=()=>{
	//     setdata('Rose tylor')

	//   }
	//   const [increment, setIncrement] = useState(0)
	// const [decrement, setDecrement] = useState(0)
	//   const handler = useMethod({
	//     methods: {
	//       increment: useCallback(() => setIncrement(increment + 1), [increment]),
	//       decrement: useCallback(() => setDecrement(decrement - 1), [decrement])
	//     }
	//   })
	return (
		//  {/* <h1>{data}</h1>
		//  {
		//  console.log(data)
		// }
		//  <ButtoneOne click={onClickhandaler} /> */}
	<>
    <div className="calculator">
		<div className="clculator-grid">
			<div className="output">
				<div className="previous-operand">
					
          {currentOperend}
          {operation}
				</div>
				<div className="current-operand">	{previousOperand}</div>
			</div>
			<button
				className="span-two"
				onClick={() => dispatch({ type: Action.CLEAR })}
			>
				Ac
			</button>
			<button onClick={() => dispatch({ type: Action.DELET_DIGIT })}>Del</button>
			<Operationbutton operation={"/"} dispatch={dispatch} />
			<Digitbutton digit={"1"} dispatch={dispatch} />
			<Digitbutton digit={"2"} dispatch={dispatch} />
			<Digitbutton digit={"3"} dispatch={dispatch} />
			<Operationbutton operation={"*"} dispatch={dispatch} />
			<Digitbutton digit={"4"} dispatch={dispatch} />
			<Digitbutton digit={"5"} dispatch={dispatch} />
			<Digitbutton digit={"6"} dispatch={dispatch} />
			<Operationbutton operation={"+"} dispatch={dispatch} />
			<Digitbutton digit={"7"} dispatch={dispatch} />
			<Digitbutton digit={"8"} dispatch={dispatch} />
			<Digitbutton digit={"9"} dispatch={dispatch} />
			<Operationbutton operation={"-"} dispatch={dispatch} />
			<Digitbutton digit={"."} dispatch={dispatch} />
			<Digitbutton digit={"0"} dispatch={dispatch} />
			<button className="span-two" 
				onClick={() => dispatch({ type: Action.EVALUATE })}>=</button>
		</div>
		</div>
		</>

	);
}

export default App;
