import Check_Value, { Check_Language } from '../constants';
const initialState = {
    check: 0,
    language: 0
};
export const changeReducer = (state = initialState, action) => {
    switch (action.type) {
        case Check_Value:
            return {
                ...state,
                check: action.payload
            }
            break;
        case Check_Language:
            return {
                ...state,
                language: action.payload
            };
            break;
        default:
            return state;
    }
}
