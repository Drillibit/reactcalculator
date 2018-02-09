import axios from 'axios';

const addMaterial = (material) => ({
    type: 'ADD_MATERIAL',
    material
});

export const startAddMaterial = (materialData = {}) => {
    return async (dispatch) => {
        const {
            name = '',
            price = 0
        } = materialData;
        const material = {
            name,
            price
        };
        let res = await axios.post('/api/materials', material);
        dispatch(addMaterial({...res.data}));
    };
};

export const fetchMaterial = () => {
    return async (dispatch) => {
        let res = await axios.get('/api/collections');
        res.data.materials.map((material) => {
            dispatch(addMaterial({...material}));
            return material;
        });
    };
};
