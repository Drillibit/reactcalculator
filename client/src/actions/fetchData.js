import axios from 'axios';
import { addMaterial } from './material';
export const fetchData = () => {
    return async (dispatch) => {
        let res = await axios.get('/api/collections');
        res.data.materials.map((material) => {
            dispatch(addMaterial({ ...material }));
            return material;
        });
    };
};
