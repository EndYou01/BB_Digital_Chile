import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"

import { uiSetActiveNavButton } from "../../redux/actions/ui.js";

export const HomeLink = ({link}) => {

    const dispatch = useDispatch()

    const {activeNavButton} = useSelector(state => state.ui)

    return (
        <NavLink
            className={activeNavButton == link ? 'navigation_button navigation_button_active' : 'navigation_button'}
            onClick={() => dispatch(uiSetActiveNavButton(link))}
            to={`/${link}`}
        >
            {link}
        </NavLink>
    )
}

