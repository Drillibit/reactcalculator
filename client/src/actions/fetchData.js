import axios from 'axios';
import { addMaterial } from './material';
import { addBranch } from './branch';
export const fetchData = () => {
    return async (dispatch) => {
        let resBranch = await axios.get('/api/branches');
        resBranch.data.branches.map((branch) => {
            dispatch(addBranch({ ...branch }));
            return branch;
        });

        let resMat = await axios.get('/api/collections');
        resMat.data.materials.map((material) => {
            dispatch(addMaterial({ ...material }));
            return material;
        });
    };
};
