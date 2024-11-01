import { FC } from 'react'

interface IProps {
	title: string
	rating: number
	setRating: (value: number) => void
}

const Rate: FC<IProps> = ({ title, rating, setRating }) => {
	const handleClick = (index: number) => {
		setRating(index + 1)
	}

	const Star = ({ filled }) => {
		return (
			<svg
				width='37'
				height='36'
				viewBox='0 0 37 36'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M33.4905 13.8513C33.3958 13.5769 33.2235 13.3359 32.9945 13.1575C32.7655 12.9791 32.4897 12.871 32.2005 12.8463L23.6655 11.6013L19.8405 3.84626C19.7177 3.59266 19.5259 3.37878 19.2872 3.22912C19.0484 3.07947 18.7723 3.0001 18.4905 3.0001C18.2087 3.0001 17.9326 3.07947 17.6939 3.22912C17.4551 3.37878 17.2633 3.59266 17.1405 3.84626L13.3155 11.5863L4.78052 12.8463C4.5029 12.8857 4.24191 13.0022 4.02714 13.1825C3.81238 13.3628 3.65246 13.5997 3.56552 13.8663C3.48594 14.1268 3.4788 14.404 3.54486 14.6683C3.61093 14.9326 3.74771 15.1739 3.94052 15.3663L10.1355 21.3663L8.63552 29.8863C8.58197 30.1675 8.61001 30.4581 8.71633 30.7239C8.82264 30.9897 9.0028 31.2196 9.23552 31.3863C9.46235 31.5484 9.72988 31.6441 10.0081 31.6627C10.2863 31.6812 10.5642 31.6219 10.8105 31.4913L18.4905 27.4863L26.1405 31.5063C26.351 31.625 26.5888 31.6871 26.8305 31.6863C27.1483 31.6874 27.4581 31.5876 27.7155 31.4013C27.9482 31.2346 28.1284 31.0047 28.2347 30.7389C28.341 30.4731 28.3691 30.1825 28.3155 29.9013L26.8155 21.3813L33.0105 15.3813C33.2271 15.1978 33.3872 14.9566 33.4721 14.6858C33.5571 14.415 33.5635 14.1256 33.4905 13.8513Z'
					fill={filled ? '#9771FD' : '#cbd1d7'}
				/>
			</svg>
		)
	}

	return (
		<div className='flex flex-col gap-3'>
			<div className='flex gap-2 items-center'>
				<span className='w-full h-[1px] bg-[#9771FD]'></span>
				<h3 className='font-medium text-[15px] leading-6 mx-auto whitespace-nowrap'>
					{title}
				</h3>
				<span className='w-full h-[1px] bg-[#9771FD]'></span>
			</div>

			<div className='bg-white justify-center flex gap-4 p-4 rounded-[20px]'>
				{[...Array(5)].map((_, index) => (
					<button key={index} onClick={() => handleClick(index)}>
						<Star filled={index < rating} />
					</button>
				))}
			</div>
		</div>
	)
}

export default Rate
