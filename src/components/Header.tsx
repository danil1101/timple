import { FC } from 'react'

import logo from '../assets/logo.svg'

const Header: FC = () => {
	return (
		<div className='py-3 px-5 relative flex justify-end w-full'>
			<img
				src={logo}
				alt=''
				className='absolute left-[50%] translate-x-[-50%]'
			/>
			<label className='select'>
				<select>
					<option value='en'>En</option>
					<option value='ru'>Ru</option>
				</select>
			</label>
		</div>
	)
}

export default Header
