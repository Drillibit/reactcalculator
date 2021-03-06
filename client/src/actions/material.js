import axios from 'axios';

export const addMaterial = (material) => ({
    type: 'ADD_MATERIAL',
    material
});

export const startAddMaterial = (materialData = {}) => {
    return async (dispatch) => {
        const {
            branch = '',
            name = '',
            price = 0,
            priceGold = 0,
            pricePlatinum = 0
        } = materialData;
        const material = {
            branch,
            name,
            price,
            priceGold,
            pricePlatinum
        };
        let res = await axios.post('/api/materials', material);
        dispatch(addMaterial({...res.data}));
    };
};

// export const fetchMaterial = () => {
//     return async (dispatch) => {
//         let res = await axios.get('/api/collections');
//         res.data.materials.map((material) => {
//             dispatch(addMaterial({...material}));
//             return material;
//         });
//     };
// };
