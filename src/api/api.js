import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": '143266ba-045f-4a9e-acfc-3c06e3cd8b88'
	},
});

const usersAPI = {

	getUsers(currentPage=1, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
	},

	unFollow(id) {
		return instance.delete(`follow/${id}`).then(response => response.data)
	},

	Follow(id) {
		return instance.post(`follow/${id}`, {}).then(response => response.data)
	},
}

export const profileAPI = {

	setUserInProfilePage(id) {
		return instance.get(`profile/${id}`).then(response => response.data)
	},

	getMyProfileHeader() {
		return instance.get('auth/me').then(response => response.data)
	},

	getStatus(id) {
		return instance.get(`profile/status/${id}`)
	},

	updateStatus(status) {
		return instance.put('profile/status', {status: status})
	},

	savePhoto(file) {
		let formData = new FormData();
		formData.append('image', file)
		return instance.put('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}
}

export const authAPI = {

	login(email, password, rememberMe = false,captcha=null) {
		return instance.post('auth/login', {email, password, rememberMe, captcha});
	},

	logout() {
		return instance.delete('auth/login');
	}

}

export const securityAPI = {

	getCaptchaURL() {
		return instance.get('security/get-captcha-url')
	}
}


export default usersAPI;

