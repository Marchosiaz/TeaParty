import { SET_USER_DATA, SET_CAPTCHA_URL } from '../authReducer';
import { setAuthUserDataType, setCaptchaURLType } from '../types/types';


export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType =>
    ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });


export const setCaptchaURL = (captchaURL: string): setCaptchaURLType => ({ type: SET_CAPTCHA_URL, captchaURL });