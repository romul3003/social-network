import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus component', () => {
	test('status from props should be in the state', () => {
		const component = create(<ProfileStatus status="React testing" />)
		const instance = component.getInstance()
		expect(instance.state.status).toBe('React testing')
	})

	test('after creation <span> should be displayed with corect status', () => {
		const component = create(<ProfileStatus status="React testing" />)
		const root = component.root
		const span = root.findByType('span')
		expect(span).not.toBeNull()
	})

	test("after creation <input> shouldn't be displayed with corect status", () => {
		const component = create(<ProfileStatus status="React testing" />)
		const root = component.root

		expect(() => {
			// eslint-disable-next-line no-unused-vars
			const input = root.findByType('input')
		}).toThrow()
	})

	test('after creation <span> should contain correct status', () => {
		const component = create(<ProfileStatus status="React testing" />)
		const root = component.root
		const span = root.findByType('span')
		expect(span.children[2]).toBe('React testing')
	})

	test('input should be displayed in editMode instead of span', () => {
		const component = create(<ProfileStatus status="React testing" />)
		const root = component.root
		const span = root.findByType('span')
		span.props.onDoubleClick()
		const input = root.findByType('input')

		expect(input.props.value).toBe('React testing')
	})

	test('callback should be called', () => {
		const mockCallback = jest.fn()
		const component = create(
			<ProfileStatus status="React testing" updateStatus={mockCallback} />
		)
		const instance = component.getInstance()
		instance.deactivateEditMode()
		expect(mockCallback.mock.calls.length).toBe(1)
	})
})
