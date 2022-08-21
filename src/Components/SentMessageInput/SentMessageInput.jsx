import React, { useState } from 'react'
// ==== Styles ====
import sendIcon from '../../assets/icons/send.svg'
// ==== Styles ====
import cl from './SentMessageInput.module.scss'
// ==== Components ====
import Input from '../Input/Input'

const SentMessageInput = ({ onSubmit, senderId, chatId }) => {
	const [message, setMessage] = useState()

	const onChange = e => {
		setMessage(e.target.value)
	}

	return (
		<form
			onSubmit={e => {
				setMessage('')
				onSubmit(e, {
					value: message,
					senderId,
					chatId,
				})
			}}
			className={cl.wrapper}
		>
			<label className={cl.label}>
				<Input
					value={message}
					onChange={onChange}
					type='text'
					placeholder='Type your message'
				/>

				<button className={cl.btn}>
					<img src={sendIcon} alt='send' className={cl.icon} />
				</button>
			</label>
		</form>
	)
}

export default SentMessageInput
