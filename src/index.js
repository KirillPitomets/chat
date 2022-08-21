import React from 'react'
import ReactDOM from 'react-dom/client'
// ==== React router dom ====
import { BrowserRouter } from 'react-router-dom'
// ==== Styles ====
import './styles/index.scss'
// ==== Components ====
import App from './App'
import ChatsProvider from './context/ChatsProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<BrowserRouter>
		<ChatsProvider>
			<App />
		</ChatsProvider>
	</BrowserRouter>
)
