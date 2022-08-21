import React, { createContext, useContext, useState } from 'react'
// ==== Chats ====
import initialChats from '../global/chats'

const ChatsContext = createContext(initialChats)

const ChatsProvider = ({ children }) => {
	const [chats, setChats] = useState(initialChats)

	const searchChat = value => {
		if (!value) {
			return setChats(initialChats)
		}
		setChats(initialChats.filter(chat => chat.displayName.includes(value)))
	}

	return (
		<ChatsContext.Provider
			value={{
				chats,
				searchChat,
			}}
		>
			{children}
		</ChatsContext.Provider>
	)
}

export default ChatsProvider

export const useChats = () => useContext(ChatsContext)
