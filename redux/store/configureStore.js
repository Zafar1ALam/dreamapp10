import { createStore, combineReducers } from 'redux';
import { changeReducer } from '../reducers/checkReducer';
const rootReducer = combineReducers(
    { checkValue: changeReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;