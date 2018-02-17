import axios from 'axios';

const addUser = (user) => ({
    type: 'ADD_USER',
    user
});

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