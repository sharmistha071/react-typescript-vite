import { useReducer } from "react";
import Button from "./Button";

type intialStateType = {
  count: number;
  draftCount: number;
};

const initialState: intialStateType = {
  count: 0,
  draftCount: 0,
};

type Action = {
  type: "increment" | "decrement" | "reset" | "buttonClicked";
};
type ActionWithPayload = {
  type: "updateDraftCount";
  payload: number;
};

const counterReducer = (
  state = initialState,
  action: Action | ActionWithPayload
) => {
  const { count } = state;
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: count - 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    case "updateDraftCount":
      return {
        ...state,
        draftCount: action.payload,
      };
    case "buttonClicked":
      return {
        ...state,
        count: state.count + state.draftCount,
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <section>
      <p>{state.count}</p>
      <div>
        <Button
          onClick={() =>
            dispatch({
              type: "decrement",
            })
          }
        >
          Decrement
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: "reset",
            })
          }
        >
          Reset
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: "increment",
            })
          }
        >
          Increment
        </Button>
      </div>
      <div>
        <input
          type="number"
          value={String(state.draftCount)}
          onChange={(e) =>
            dispatch({
              type: "updateDraftCount",
              payload: e.target.valueAsNumber,
            })
          }
        />
        <button
          onClick={() =>
            dispatch({
              type: "buttonClicked",
            })
          }
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Counter;
