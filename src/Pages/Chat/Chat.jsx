import React, { useEffect, useState } from 'react'
// ==== API ====
import getMessage from '../../Api/getMessage'
// ==== React router dom ====
import { useParams } from 'react-router-dom'
// ==== Utils ====
import generateDate from '../../utils/generateDate'
// ==== Global ====
import chats from '../../global/chats'
import initialMessages from '../../global/messages'
// ==== Styles ====
import cl from './Chat.module.scss'
// ==== Components ====
import Message from '../../Components/Message/Message'
import Avatar from '../../Components/Avatar/Avatar'
import SentMessageInput from '../../Components/SentMessageInput/SentMessageInput'

const getUserInfo = id => {
	return chats.find(chat => chat.id === id)
}

const Chat = () => {
	const myId = 'Kirill'

	const { id } = useParams()

	const [messages, setMessages] = useState(initialMessages[id] || [])

	// ==== Functions ====
	const addNewMessage = async (e, { value, senderId, chatId }) => {
		e.preventDefault()
		if (value.trim()) {
			const newMessages = (initialMessages[chatId] = [
				...initialMessages[chatId],
				{
					icon_url: getUserInfo(chatId).avatar,
					value: value,
					created_at: generateDate(),
					senderId,
					displayName: senderId,
				},
			])

			setMessages(newMessages)

			const responseMessage = await getMessage()
			const responseMessageObj = (initialMessages[chatId] = [
				...initialMessages[chatId],
				{
					icon_url: getUserInfo(chatId).avatar,
					value: responseMessage.value,
					created_at: generateDate(),
					senderId: chatId,
					displayName: chatId,
				},
			])

			setTimeout(() => {
				setMessages(responseMessageObj)
			}, 1000)
		}
	}

	useEffect(() => {
		setMessages(initialMessages[id])
	}, [id])

	return (
		<div className={cl.chat}>
			<header className={cl.chat__header}>
				<Avatar classNames={cl.photo} photo={getUserInfo(id).avatar} />
				<h3 className={cl.name}>{getUserInfo(id).displayName}</h3>
			</header>

			<div className={cl.chat__wrapper}>
				{messages.length ? (
					messages.map((message, indx) => (
						<Message
							key={`${message.created_at}-${indx}`}
							isMe={message.senderId === myId}
							message={message.value}
							dateOfDispatch={message.created_at}
							avatar={message.icon_url}
							alt={message.displayName}
						/>
					))
				) : (
					<p className={cl.placeholder}>Say 'Hello :)'</p>
				)}
			</div>

			<footer className={cl.footer}>
				<SentMessageInput
					onSubmit={addNewMessage}
					senderId={myId}
					chatId={id}
				/>
			</footer>
		</div>
	)
}

export default Chat
