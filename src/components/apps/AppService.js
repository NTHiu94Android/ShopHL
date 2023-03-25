import CustomAxios from "../../helpers/Axiosinstance";


//Them don hang
export const addOrder = async (orderDate, totalPrice, status, idUser) => {
    return await CustomAxios().post("order/api/create", { orderDate, totalPrice, status, idUser });
};


//Lay order theo idUser
export const get_order_by_idUser = async (_idUser) => {
    return await CustomAxios().get("order/api/get-order-by-idUser/" + _idUser);
};

// Lay order theo id
export const get_order_by_id = async (_idOrder) => {
    return await CustomAxios().get("order/api/get-order-by-id/" + _idOrder);
};

// Lay order theo idUser va status
export const get_order_by_idUser_and_status = async (_idUser, _status) => {
    return await CustomAxios().get("order/api/get-order-by-idUser-and-status/" + _idUser + "/" + _status);
};

//Lay danh sach san pham
export const getProducts = async () => {
    return await CustomAxios().get("product/api/get-products");
};

//Lay san pham theo id
export const get_product_by_id = async (_idProduct) => {
    return await CustomAxios().get("product/api/get-product-by-id/" + _idProduct);
};

//Lay san pham theo idBrand
export const get_product_by_idBrand = async (_idBrand) => {
    return await CustomAxios().get("product/api/get-product-by-idBrand/" + _idBrand);
};

// export const add_product = async (name, price, describer, amount, color, idBrand) => {
//     return await CustomAxios().post("product/api/add-product", { name, price, describer, amount, color, idBrand });
// };

//Them 
export const addToCart = async (totalPrice, amount, idOrder, idProduct) => {
    return await CustomAxios().post("order_detail/api/add-order_detail", { totalPrice, amount, idOrder, idProduct });
};

//Lay order_details theo idOrder
export const get_order_details_by_idOrder = async (_idOrder) => {
    return await CustomAxios().get("order_detail/api/get-order_detail-by-idOrder/" + _idOrder);
};







