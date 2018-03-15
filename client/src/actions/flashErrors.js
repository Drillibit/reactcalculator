import axios from 'axios';

export const addError = (error) => {
    type: 'ADD_ERROR',
    error
};

export const StartAddError = (errorData = {}) => {
    return async (dispatch) => {
        const {
            errorText = ''
        } = errorData;
        const error = {
            errorText
        };

        let res = await axios.get('/api/errors', error);
        console.log(typeof res.data);
        console.log(res.data);
        // dispatch(addError(...res.data));
    };
};