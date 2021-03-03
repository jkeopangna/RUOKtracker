import React, { createContext, useReducer, useContext } from "react";
import {
    ADD_SYMPTOMS,
    UPDATE_SYMPTOMS,
    LOADING
} from "./Actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_SYMPTOMS:
            return {
                ...state,
                symptoms: [...action.symptoms],
                loading: false
            };
        
        case ADD_SYMPTOMS:
            return {
                ...state,
                symptoms: [action.symptoms, ...state.symptoms],
                loading: false
            };

        case LOADING: 
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, { symptoms: [],
            BodyPain: {
                count: 0
            },
            Nausea: {
                count: 0
            },
            loading: false
        });

return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { useStoreContext, StoreProvider  };