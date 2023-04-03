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

//forgot password
export const forgot_password = async (email) => {
    const body = {
        email: email,
    }
    const response = await CustomAxios().post('users/api/forgot-password', body);
    return response;
}

//reset password
export const reset_password = async (token, password, confirm_password) => {
    const body = {
        token: token,
        password: password,
        confirm_password: confirm_password,
    }
    const response = await CustomAxios().post('users/api/reset-password', body);
    return response;
};



