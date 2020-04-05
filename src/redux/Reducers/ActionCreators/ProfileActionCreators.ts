import { ADD_POST, SET_USER_PROFILE, CHANGE_PROFILE_STATUS, DELETE_POST, SAVE_PHOTO_SUCCESS } from "../profileReducer";
import { AddPostType, SetUsetProfileType, ChangeProfileStatusType, DeletePostType, SavePhotoSuccessType } from "../types/Profiletypes";


export const addPost = (postMessage: null | string): AddPostType => ({ type: ADD_POST, postMessage });
export const setUserProfile = (profile: null | string): SetUsetProfileType => ({ type: SET_USER_PROFILE, profile });
export const changeProfileStatus = (status: null | string): ChangeProfileStatusType => ({ type: CHANGE_PROFILE_STATUS, status })
export const deletePost = (id: null | number): DeletePostType => ({ type: DELETE_POST, id })
export const savePhotoSuccess = (photos: null | string): SavePhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photos })