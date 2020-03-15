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
	async me() {
		const response = await instance.get(`auth/me`)
		return response.data
	},
	async login(email, password, rememberMe = false) {
		const response = await instance.post(`auth/login`, {
			email,
			password,
			rememberMe,
		})
		return response.data
	},
	async logout() {
		const response = await instance.delete(`auth/login`)
		return response.data
	},
}
