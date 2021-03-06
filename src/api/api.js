import * as axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '181444e6-0220-4eb1-89bc-25ecf37bb2b5',
	},
})

export const usersAPI = {
	async getUsers(currentPage = 1, pageSize = 10) {
		const response = await instance.get(
			`users?page=${currentPage}&count=${pageSize}`
		)
		return response.data
	},
	async follow(userId = 2) {
		const response = await instance.post(`follow/${userId}`)
		return response.data
	},
	async unfollow(userId = 2) {
		const response = await instance.delete(`follow/${userId}`)
		return response.data
	},
}

export const profileAPI = {
	async getProfile(userId) {
		const response = await instance.get(`profile/${userId}`)
		return response.data
	},
	async getStatus(userId) {
		const response = await instance.get(`profile/status/${userId}`)
		return response.data
	},
	async updateStatus(status) {
		const response = await instance.put('profile/status', { status })
		return response.data
	},
	async savePhoto(photoFile) {
		const formData = new FormData()
		formData.append('image', photoFile)
		const response = await instance.put('profile/photo', formData, {
			headers: {
				'Content-type': 'multipart/form-data',
			},
		})
		return response.data
	},
	async saveProfile(profile) {
		const response = await instance.put('profile', profile)
		return response.data
	},
}

export const authAPI = {
	async me() {
		const response = await instance.get(`auth/me`)
		return response.data
	},
	async login(email, password, rememberMe = false, captcha = null) {
		const response = await instance.post(`auth/login`, {
			email,
			password,
			rememberMe,
			captcha,
		})
		return response.data
	},
	async logout() {
		const response = await instance.delete(`auth/login`)
		return response.data
	},
}

export const securityAPI = {
	async getCaptchaUrl() {
		const response = await instance.get('security/get-captcha-url')
		return response.data
	},
}
