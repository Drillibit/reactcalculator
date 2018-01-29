const MaterialReducerDefaultState = [];

export default (action, state = MaterialReducerDefaultState) => {
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