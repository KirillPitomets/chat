import React from 'react'
import Aside from '../Components/Aside/Aside'
// ==== Router ====
import chatRouter from '../router/chatRouter'
import { Routes, Route } from 'react-router-dom'
// ==== Chats/messages ====
import chats from '../global/chats'
import myMessages from '../global/messages'
// ==== Styles ====
import cl from './App.module.scss'

const App = () => {
	return (
		<div className={cl.app}>
			<Aside chats={chats} messages={myMessages} />

			<div className={cl.wrap}>
				<Routes>
					{chatRouter.map(route => (
						<Route
							key={`app-${route.path}`}
							path={route.path}
							element={<route.element />}
						/>
					))}
				</Routes>
			</div>
		</div>
	)
}

export default App
