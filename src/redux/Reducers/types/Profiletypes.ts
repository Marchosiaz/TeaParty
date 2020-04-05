import { ADD_POST, SET_USER_PROFILE, CHANGE_PROFILE_STATUS, DELETE_POST, SAVE_PHOTO_SUCCESS } from '../profileReducer';

type ItemsInPosts = {
    id: null | number,
    message: null | string,
    countLike: null | string
};

export type InitialStateType = {
    profile: null | object,
    status: string,
    posts: Array<ItemsInPosts>
};

export type AddPostType = {
    type: typeof ADD_POST,
    postMessage: null | string
};

export type SetUsetProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: null | object | string,
};

export type ChangeProfileStatusType = {
    type: typeof CHANGE_PROFILE_STATUS,
    status: null | string
};

export type DeletePostType = {
    type: typeof DELETE_POST,
    id: null | number
};

export type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: null | string
}