import React from 'react'
// ==== Styles ====
import cl from './SectionTitle.module.scss'
import cn from 'classnames'

const SectionTitle = ({children, className}) => {
	return (
		<h2 className={cn(cl.h2, className)}>
			{children}
		</h2>
	)
}

export default SectionTitle