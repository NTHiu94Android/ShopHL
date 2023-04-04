import CustomAxios from "../../helpers/Axiosinstance";

// ---------------------------------ORDER----------------------------------
//Them don hang
export const addOrder = async (orderDate, totalPrice, status, quantity, idUser) => {
    return await CustomAxios().post("order/api/create-order", { orderDate, totalPrice, status, quantity, idUser });
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
export const get_order_by_idUser_and_status = async (idUser, status) => {
    return await CustomAxios().get("order/api/get-order-by-idUser-and-status/" + idUser + "/" + status);
};

// ---------------------------------PRODUCT----------------------------------
//Lay danh sach san pham
export const getProducts = async () => {
    return await CustomAxios().get("product/api/get-products");
};

//Lay san pham theo id
export const get_product_by_id = async (id) => {
    return await CustomAxios().get("product/api/get-product-by-id/" + id);
};

//Lay san pham theo idBrand
export const get_product_by_idBrand = async (_idBrand) => {
    return await CustomAxios().get("product/api/get-product-by-idBrand/" + _idBrand);
};

// export const add_product = async (name, price, describer, amount, color, idBrand) => {
//     return await CustomAxios().post("product/api/add-product", { name, price, describer, amount, color, idBrand });
// };



//------------------------------------ORDER_DETAIL----------------------------------
//Them san pham vao gio hang
export const addToCart = async (totalPrice, amount, idOrder, idProduct) => {
    return await CustomAxios().post("order_detail/api/add-order_detail", { totalPrice, amount, idOrder, idProduct });
};

//Xoa san pham khoi gio hang/yeu thich
export const delete_order_detail = async (id) => {
    return await CustomAxios().get("order_detail/api/delete-order_detail/" + id);
};

//Update order detail
export const update_order_detail = async (_id, totalPrice, amount, idOrder, idProduct) => {
    return await CustomAxios().post("order_detail/api/update-order_detail/" + _id,
        { totalPrice, amount, idOrder, idProduct }
    );
};

//Lay order_details theo idOrder
export const get_order_details_by_idOrder = async (id) => {
    return await CustomAxios().get("order_detail/api/get-order_detail-by-idOrder/" + id);
};


//------------------------------------IMAGE----------------------------------
//Lay hinh anh theo idProduct
export const get_image_by_idProduct = async (id) => {
    return await CustomAxios().get("picture/get_pictures_by_idProduct/" + id);
};

//Lay hinh anh theo idProduct va Color
export const get_image_by_idProduct_and_color = async (idProduct, color) => {
    return await CustomAxios().get("picture/api/get_pictures_by_color/" + idProduct + "/" + color);
};


//------------------------------------COMMENT----------------------------------
//Lay comment theo idProduct
export const get_comment_by_idProduct = async (idProduct) => {
    return await CustomAxios().get("comment/api/get-comment-by-idProduct/" + idProduct);
};










