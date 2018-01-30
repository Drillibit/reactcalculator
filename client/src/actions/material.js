import axios from 'axios';

const addMaterial = (material) => ({
    type: 'ADD_MATERIAL',
    material
});

export const fetchMaterial = () => {
    return async (dispatch) => {
        let res = await axios.get('/api/collections');
        console.log(res.data);
        res.data.materials.map((material) => {
            dispatch(addMaterial({...material}));
            return material;
        });
    };
};
