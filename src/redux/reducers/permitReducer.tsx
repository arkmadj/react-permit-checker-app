import { Permit } from "../../saga/handlers/fetchPermits";

export interface Action {
  type: string;
  permits: Permit[];
  message: string;
}

const initState = {
  permits: [],
  loading: false,
  error: null,
};

const permitReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "GET_RECENT_PERMITS_SUCCESS":
      return { ...state, loading: false, permits: action.permits };
    case "GET_RECENT_PERMIT":
      return { ...state, loading: true };
    case "GET_RECENT_PERMIT_FAILED":
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

export default permitReducer;
