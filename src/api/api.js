import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": '5b1f6a26-3560-41b4-8076-6c5939bbecbd'
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

	getMyProfileInHeader() {
		return instance.get('auth/me').then(response => response.data)
	},

	getStatus(id) {
		return instance.get(`profile/status/${id}`)
	},

	updateStatus(status) {
		return instance.put('profile/status', {status: status})
	}
}

export const authoAPI = {

	login(email, password, boolean) {
		return instance.post('auth/login', {email: email, password: password, boolean: boolean})
	}

}

export default usersAPI;