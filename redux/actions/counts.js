import Check_Value, { Check_Language }
    from '../constants';

const changeCheck = (value) => {
    return {
        type: Check_Value,
        payload: value
    }
}

const changeLanguage = (value) => {
    return {
        type: Check_Language,
        payload: value
    }
}

export default changeCheck;
export { changeLanguage };