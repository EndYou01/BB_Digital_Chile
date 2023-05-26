import { types } from "../types/types";

const initialState = {
    activeNavButton: 'home'
}

export const uiReducer = (state = initialState, action) => {


    switch (action.type) {
        case types.uiSetActiveNavButton:
            return {
                ...state,
                activeNavButton: action.activeNavButton
            }


        default:
            return state;
    }


}