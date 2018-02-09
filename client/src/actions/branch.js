import axios from 'axios';

export const addBranch = (branch) => ({
    type: 'ADD_BRANCH',
    branch
});

