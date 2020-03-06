import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": 'bb7a7dd0-c86a-4a65-8927-b2549d603e92'
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

	getMyProfileInHeader() {
		return instance.get('auth/me').then(response => response.data)
	}
}

export default usersAPI;