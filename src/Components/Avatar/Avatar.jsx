import React from 'react'
// ==== Styles ====
import cl from './Avatar.module.scss'
import cn from 'classnames'

const Avatar = ({ classNames, photo, alt }) => {
	
	return (
		<div className={cn(cl.avatar, classNames)}>
			<img className={cl.avatar__img} src={photo} alt={alt} />
		</div>
	)
}

export default Avatar
