const FlashErrorsDefaultState = [];

export default (state = FlashErrorsDefaultState, action) => {
    switch(action.type){
        case 'ADD_ERROR':
            return [
                ...state,
                action.error
            ];
        default:
            return state;
    }
};