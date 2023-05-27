import { types } from "../types/types";

const initialState = {
    activeNavButton: 'home',
    category: ''
}

export const uiReducer = (state = initialState, action) => {


    switch (action.type) {
        case types.uiSetActiveNavButton:
            return {
                ...state,
                activeNavButton: action.activeNavButton
            }

        case types.uiSetCategory:
            return {
                ...state,
                category: action.category
            }


        default:
            return state;
    }


}