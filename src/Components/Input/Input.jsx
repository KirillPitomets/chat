import React from 'react'
// ==== Styles ====
import cl from './Input.module.scss'
// ==== Components ====

const Input = ({ onChange, ...props}) => {
	return (
		<input
			className={cl.input}
			onChange={onChange}
			{...props}
		/>
	)
}

export default Input
