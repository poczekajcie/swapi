import {combineReducers} from "redux";
import peopleReducer from './peopleReducer'
import personReducer from './personReducer'

export default combineReducers({
    data: peopleReducer,
    person: personReducer
});