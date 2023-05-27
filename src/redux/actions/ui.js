import { types } from "../types/types";


export const uiSetActiveNavButton = (link) => ({ type: types.uiSetActiveNavButton, activeNavButton: link })
export const uiSetCategory = (category) => ({ type: types.uiSetCategory, category: category })
