const BranchReducerDefaultState = [];

export default (state = BranchReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_BRANCH':
            return [
                ...state,
                action.branch
            ];
        default:
            return state;
    };
};