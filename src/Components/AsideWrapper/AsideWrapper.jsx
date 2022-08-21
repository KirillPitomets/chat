import React from 'react'
// ==== Styles ====
import cl from './AsideWrapper.module.scss'
import cn from 'classnames'

const AsideWrapper = ({ borderBottom, background, children, className }) => {
	return (
		<div
			className={cn(
				cl.wrapper,
				className,
				borderBottom && cl['wrapper_border-bot'],
				background && cl.wrapper_bg
			)}
		>
			{children}
		</div>
	)
}

export default AsideWrapper
