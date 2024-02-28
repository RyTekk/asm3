import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

function inputStateReducer(state, action) {
  switch (action.type) {
    case "INPUT": {
      return { value: action.value, isTouched: state.isTouched };
    }
    case "BLUR": {
      return { isTouched: true, value: state.value };
    }
    case "RESET": {
      return { isTouched: false, value: "" };
    }
    default:
      return inputStateReducer;
  }
}

function useValidate(validation) {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validation(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  function valueChangeHandler(event) {
    dispatch({ type: "INPUT", value: event.target.value });
  }

  function inputBlurHandler() {
    dispatch({ type: "BLUR" });
  }

  function reset() {
    dispatch({ type: "RESET" });
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
}

export default useValidate;
