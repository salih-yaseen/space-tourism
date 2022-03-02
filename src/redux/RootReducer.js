import { combineReducers } from "redux";
import { crewReducer } from "./reducers/crewReducer";
import { destinationsReducer } from "./reducers/destinationsReducer";
import { technologyReducer } from "./reducers/techReducer";
import { bgReducer, navLinkReducer } from "./reducers/navbarReducer";

export const RootReducer = combineReducers({
    desti: destinationsReducer,
    tech: technologyReducer,
    crew: crewReducer,
    navbar: navLinkReducer,
    bg: bgReducer,
});
