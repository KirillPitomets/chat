import React from 'react'
// ==== Icons ====
import searchIcon from '../../assets/icons/search.svg'
// ==== Styles ====
import cl from './SearchInput.module.scss'
// ==== Components ====
import Input from '../Input/Input'

const SearchInput = ({ onChange }) => {
	return (
		<label htmlFor='search' className={cl.label}>
			<img src={searchIcon} alt='search icon' className={cl.icon} />
			<Input
				id='search'
				type='text'
				placeholder='Search or start new chat'
				onChange={onChange}
			/>
		</label>
	)
}

export default SearchInput
