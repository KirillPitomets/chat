import React from 'react'
// ==== Styles ====
import cl from './Aside.module.scss'
// ==== Components ====
import ChatList from '../ChatList/ChatList'
import MyProfile from '../MyProfile/MyProfile'
import SectionTitle from '../SectionTitle'
import AsideWrapper from '../AsideWrapper'

const Aside = ({ chats, messages }) => {
	return (
		<aside className={cl.aside}>
			<AsideWrapper borderBottom={true} background={true}>
				<MyProfile />
			</AsideWrapper>

			<AsideWrapper>
				<SectionTitle className={cl.title}>Chats</SectionTitle>
			</AsideWrapper>

			<ChatList chats={chats} messages={messages} />
		</aside>
	)
}

export default Aside
