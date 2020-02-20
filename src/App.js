import React from 'react'
import './App.css'

function App() {
	return (
		<div className="app-wrapper">
			<header className="header">
				<img
					src="https://www.freelogodesign.org/Content/img/logo-ex-7.png"
					alt=""
				/>
			</header>
			<nav className="nav">
				{/*eslint-disable*/}
				<div>
					<a href="">Profile</a>
				</div>
				<div>
					<a href="">Messages</a>
				</div>
				<div>
					<a href="">News</a>
				</div>
				<div>
					<a href="">Music</a>
				</div>
				<div>
					<a href="">Settings</a>
				</div>
				{/*eslint-enable*/}
			</nav>
			<div className="content">
				<div>
					<img
						src="https://external-preview.redd.it/RaWcOb8MVDA3tze0evAogMHG8rSpDkrqISpgBW9Tn-g.jpg?auto=webp&s=3513b1d3115109b102214d165ad78cb39605ef13"
						alt=""
					/>
				</div>
				<div>ava + description</div>
				<div>
					My posts
					<div>New post</div>
					<div>
						<div>Post 1</div>
						<div>Post 2</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
