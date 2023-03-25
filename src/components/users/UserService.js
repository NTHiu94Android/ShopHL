import CustomAxios from "../../helpers/Axiosinstance";

export const register = async (email, password, name, birthday, address, numberPhone, avatar) => {
    const body = {
        email: email,
        password: password,
        name: name,
        birthday: birthday,
        numberPhone: numberPhone,
        address: address,
        avatar: avatar,
    }
    const response = await CustomAxios().post('users/api/register', body);
    return response;
};

export const login = async (email, password) => {
    const body = {
        email: email,
        password: password,
    }
    const response = await CustomAxios().post('users/api/login', body);
    return response;
}



