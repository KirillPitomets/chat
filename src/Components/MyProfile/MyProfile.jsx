import React from 'react'
// ==== Context ====
import { useChats } from '../../context/ChatsProvider'
// ==== Imgs ====
import userPhoto from '../../assets/imgs/04.jpg'
// ==== Styles ====
import cl from './MyProfile.module.scss'
import cn from 'classnames'
// ==== Components ====
import Avatar from '../Avatar/Avatar'
import SearchInput from '../SearchInput'

const MyProfile = () => {

	const { searchChat } = useChats()

	const onChange = (e) => {
		searchChat(e.target.value)
	}


	return (
		<div className={cl.profile}>
			<Avatar classNames={cn(cl.photo, cl.photo_marg)} photo={userPhoto} />

			<SearchInput onChange={onChange} />
		</div>
	)
}

export default MyProfile
