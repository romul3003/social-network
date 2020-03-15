import profileReducer, { addPost, deletePost } from './profileReducer'

const state = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 0 },
		{ id: 2, message: "It's my first post", likesCount: 23 },
		{ id: 3, message: 'Blabla', likesCount: 11 },
		{ id: 4, message: 'This is React, baby', likesCount: 100 },
	],
}

it('length of posts should be incremented', () => {
	// 1. test data
	const action = addPost('react is awesome')

	// 2. action
	const newState = profileReducer(state, action)

	// 3. expectation
	expect(newState.posts.length).toBe(5)
})

it('message of new post should be correct', () => {
	// 1. test data
	const action = addPost('react is awesome')

	// 2. action
	const newState = profileReducer(state, action)

	// 3. expectation
	expect(newState.posts[4].message).toBe('react is awesome')
})

it('after deleting length of messages should be decremented', () => {
	// 1. test data
	const action = deletePost(1)

	// 2. action
	const newState = profileReducer(state, action)

	// 3. expectation
	expect(newState.posts.length).toBe(3)
})

it("after deleting length shouldn't be decrement if id is incorrect", () => {
	// 1. test data
	const action = deletePost(1000)

	// 2. action
	const newState = profileReducer(state, action)

	// 3. expectation
	expect(newState.posts.length).toBe(4)
})
