import React from 'react'
// ==== Utils ====
import formatDate from '../../utils/formatDate'
// ==== Styles ====
import cl from './Message.module.scss'
import cn from 'classnames'
// ==== Components ====
import Avatar from '../Avatar/Avatar'

const Message = ({ isMe, message, avatar, dateOfDispatch, alt }) => {


	formatDate(dateOfDispatch)

	return (
		<div className={cn(cl.wrapper, isMe && cl['wrapper_this-me'])  }>
			{!isMe && (
				<div className={cl.photo}>
					<Avatar photo={avatar} alt={alt} />
				</div>
			)}

			<div className={isMe ? cl.message : undefined}>
				<p className={cn(cl.text, isMe && cl['text_this-me'])}>
					{message}
				</p>
				<span className={cl.date}>{formatDate(dateOfDispatch)}</span>
			</div>
		</div>
	)
}

export default Message
