const UserReducerDefaultState = {};

export default (state = UserReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_USER':
            return [
                ...state,
                action.user
            ];
        default:
            return state;
    }
};