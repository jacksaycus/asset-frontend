// export default function updateAction(state, payload) {
//     console.log("state:", state);
//     console.log("payload:", payload);
//     return {
//       ...state,
//       ...payload
//     };
//   }
  
import * as React from "react";

export default function reducer(state, action) {
  if (action.type === "next_step") {
    return { ...state, currentStep: state.currentStep + 1 };
  } else if (action.type === "prev_step") {
    return { ...state, currentStep: state.currentStep - 1 };
  } else if (action.type === "change") {
    
    if(action.name==='asset'){
      return {
        ...state,
        formData: { ...state.formData, [action.name]: 
          typeof action.value === 'string' ? action.value.split(',') :action.value,
        }
      }
    }
    else{

    return {
      ...state,
      formData: { ...state.formData, [action.name]: action.value }
    };
    }

  } else if (action.type === "reset") {
    return initialState;
  } else {
    throw new Error("This action type isn't supported.")
  }
}
