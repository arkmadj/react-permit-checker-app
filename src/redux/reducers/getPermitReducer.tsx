import { ExtendedPermit } from "../../saga/handlers/fetchPermits";

export interface Action {
  type: string;
  permit: ExtendedPermit;
  message: string;
}

const initState = {
  s_permit: null,
  loading: false,
  error: null,
};

const getPermitReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "GET_PERMIT_SUCCESS":
      return {
        ...state,
        loading: true,
        s_permit: action.permit,
        error: "What the hell",
      };
    case "GET_PERMIT":
      return { ...state, loading: true };
    case "GET_PERMIT_FAILED":
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

export default getPermitReducer;
