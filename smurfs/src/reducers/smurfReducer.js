import {
  SMURF_LOADING,
  SMURF_SUCCESS,
  SMURF_FAILURE,
  ADD_SMURF,
} from "../actions/smurfActions";

const initialState = {
  smurfs: [],
  loading: false,
  error: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURF_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SMURF_SUCCESS:
      return {
        ...state,
        loading: false,
        smurfs: action.payload,
      };
    case SMURF_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_SMURF:
      return {
        ...state,
        loading: false,
        smurfs: action.payload,
      };

    default:
      return state;
  }
};
