import { SET_USER_DATA, SET_CAPTCHA_URL } from '../authReducer';

export type initialStatetype = {
    isFetching: boolean,
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    captchaURL: null | string
};

type UserDataType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: null | boolean
};


export type setAuthUserDataType = {
    type: typeof SET_USER_DATA,
    payload: UserDataType
};

export type setCaptchaURLType = {
    type: typeof SET_CAPTCHA_URL,
    captchaURL: string | null
}