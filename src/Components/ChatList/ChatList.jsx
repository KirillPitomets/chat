import React, { useState } from 'react'
// ==== Context ====
import { useChats } from '../../context/ChatsProvider'
// ==== Components ====
import Contact from '../Contact'

const ChatList = ({ messages }) => {
	const { chats } = useChats()

	const getLastMessageFromChat = chatId => {
		if (messages[chatId]) {
			return messages[chatId][messages[chatId].length - 1].value
		}
	}

	const getDateOfSentMessage = chatId => {
		if (messages[chatId]) {
			return messages[chatId][messages[chatId].length - 1].created_at
		}
	}

	return (
		<div>
			{
				/*
					chat = {
						id: string
						displayName: string
						idRead: boolean
						lastMessageCame: string
						avatar: string (img)
					}
				*/

				chats.map(({ id, displayName, isRead, avatar }) => (
					<Contact
						key={`ChatList-${id}`}
						id={id}
						displayName={displayName}
						isRead={isRead}
						lastMessage={() => getLastMessageFromChat(id)}
						avatar={avatar}
						date={() => getDateOfSentMessage(id)}
					/>
				))
			}
		</div>
	)
}

export default ChatList
