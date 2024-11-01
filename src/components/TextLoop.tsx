import { FC } from 'react'

import bg from '../assets/text-loop-bg.svg'
import icon from '../assets/text-loop-icon.svg'

interface IProps {
	setIsOpenModal: (value: boolean) => void
}

const TextLoop: FC<IProps> = ({ setIsOpenModal }) => {
	return (
		<div
			onClick={() => setIsOpenModal(true)}
			className='py-2.5 mb-4 select-none overflow-hidden whitespace-nowrap w-full'
			style={{
				background: `url(${bg}) no-repeat center center / cover`
			}}
		>
			<div className='slider-content'>
				<div className='inline-block px-2 uppercase text-xs font-semibold'>
					Part of the profit goes to sWen
				</div>
				<img src={icon} alt='' className='inline-block' />
				<div className='inline-block px-2 uppercase text-xs font-semibold'>
					By leaving a tip, you take care of nature
				</div>
				<img src={icon} alt='' className='inline-block' />

				<div className='inline-block px-2 uppercase text-xs font-semibold'>
					Part of the profit goes to sWen
				</div>
				<img src={icon} alt='' className='inline-block' />
				<div className='inline-block px-2 uppercase text-xs font-semibold'>
					By leaving a tip, you take care of nature
				</div>
				<img src={icon} alt='' className='inline-block' />

				<div className='inline-block px-2 uppercase text-xs font-semibold'>
					Part of the profit goes to sWen
				</div>
				<img src={icon} alt='' className='inline-block' />
				<div className='inline-block px-2 uppercase text-xs font-semibold'>
					By leaving a tip, you take care of nature
				</div>
				<img src={icon} alt='' className='inline-block' />

				<div className='inline-block px-2 uppercase text-xs font-semibold'>
					Part of the profit goes to sWen
				</div>
				<img src={icon} alt='' className='inline-block' />
				<div className='inline-block px-2 uppercase text-xs font-semibold'>
					By leaving a tip, you take care of nature
				</div>
			</div>
		</div>
	)
}

export default TextLoop
