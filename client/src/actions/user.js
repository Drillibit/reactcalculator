import axios from 'axios';

export const addUser = (user) => ({
    type: 'ADD_USER',
    user
});

export const StartLoginUser = (userLog = {}) => {
    return async (dispatch) => {
        const {
            name = '',
            password = ''
        } = userLog;
        const user = {
            name,
            password
        };
        let res = await axios.post('/api/users/login', user);
        dispatch(addUser({...res.data}));
    }
}; 
export const StartAddUser = (userData = {}) => {
    return async (dispatch) => {
       const {
           name = '',
           email = '',
           password = '',
           status = ''
       } = userData;
       const user = {
           name,
           email,
           password,
           status
       };
       let res = await axios.post('/api/users/register', user);
       dispatch(addUser({...res.data}));
    }
};