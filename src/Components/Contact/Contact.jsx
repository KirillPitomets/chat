import React from 'react'
// ==== React router dom ====
import { Link } from 'react-router-dom'
// ==== Utils ====
import cutString from '../../utils/cutString'
import formatDate from '../../utils/formatDate'
import { chat } from '../../utils/const'
// ==== Icons ====
import mark from '../../assets/icons/mark.svg'
// ==== Styles ====
import cl from './Contact.module.scss'
import cn from 'classnames'
// ==== Components ====
import Avatar from '../Avatar/Avatar'

const Contact = ({ displayName, lastMessage, date, avatar, isRead, id }) => {
	const maxLength = 52 - 3 // 3 = '...'

	return (
		<Link to={`${chat}/${id}`} className={cl.wrapper}>
			<div className={cl.contact}>
				<div className={cl.contact__wrapper}>
					<div className={cn(cl.avatar, cl.avatar_marg)}>
						<Avatar photo={avatar} isRead={isRead} alt={displayName} />
						{!isRead ? (
							<img className={cl.mark} src={mark} alt='Not read' />
						) : (
							<div className={ cn(cl.mark, cl['mark_not-read']) }></div>
						)}
					</div>

					<div>
						<h3 className={cl.name}>{displayName}</h3>
						<p className={cn(cl.message, cl.message_marg)}>
							{cutString(lastMessage(), maxLength)}
						</p>
					</div>
				</div>

				<span className={cl.date}>{formatDate(date())}</span>
			</div>
		</Link>
	)
}

export default Contact
