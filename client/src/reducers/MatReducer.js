const MaterialReducerDefaultState = [];

export default (state = MaterialReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_MATERIAL':
            return [
                ...state,
                action.material
            ];
        default:
            return state;
    }
};