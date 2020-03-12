import * as axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '181444e6-0220-4eb1-89bc-25ecf37bb2b5',
	},
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	follow(userId = 2) {
		return instance.post(`follow/${userId}`).then(response => response.data)
	},
	unfollow(userId = 2) {
		return instance.delete(`follow/${userId}`).then(response => response.data)
	},
	getProfile(userId) {
		// eslint-disable-next-line no-console
		console.warn('Obsolete method. Please use profileAPI object.')
		return profileAPI.getProfile(userId)
	},
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => response.data)
	},
	getStatus(userId) {
		return instance
			.get(`profile/status/${userId}`)
			.then(response => response.data)
	},
	updateStatus(status) {
		return instance
			.put('profile/status', { status })
			.then(response => response.data)
	},
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`).then(response => response.data)
	},
	login(email, password, rememberMe = false) {
		return instance
			.post(`auth/login`, { email, password, rememberMe })
			.then(response => response.data)
	},
	logout() {
		return instance.delete(`auth/login`).then(response => response.data)
	},
}
