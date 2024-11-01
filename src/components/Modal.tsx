import { FC, useEffect } from 'react'

import img from '../assets/modal-img.svg'

interface IModal {
	isOpen: boolean
	onClose: () => void
}

const Modal: FC<IModal> = ({ isOpen, onClose }) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isOpen])

	if (!isOpen) return null

	return (
		<div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
			<div className='bg-white rounded-3xl relative flex flex-col gap-4 shadow-lg p-3 max-w-[320px] w-full'>
				<button
					onClick={onClose}
					className='absolute top-5 right-5 bg-white rounded-full p-2.5'
				>
					<svg
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M7.41 6L11.71 1.71C11.8983 1.5217 12.0041 1.2663 12.0041 1C12.0041 0.733701 11.8983 0.478306 11.71 0.290002C11.5217 0.101699 11.2663 -0.00408936 11 -0.00408936C10.7337 -0.00408936 10.4783 0.101699 10.29 0.290002L6 4.59L1.71 0.290002C1.5217 0.101699 1.2663 -0.00408936 1 -0.00408936C0.733698 -0.00408935 0.478304 0.101699 0.29 0.290002C0.101696 0.478306 -0.00409174 0.733701 -0.00409174 1C-0.00409174 1.2663 0.101696 1.5217 0.29 1.71L4.59 6L0.29 10.29C0.196272 10.383 0.121877 10.4936 0.0711088 10.6154C0.0203401 10.7373 -0.00579834 10.868 -0.00579834 11C-0.00579834 11.132 0.0203401 11.2627 0.0711088 11.3846C0.121877 11.5064 0.196272 11.617 0.29 11.71C0.382963 11.8037 0.493564 11.8781 0.615423 11.9289C0.737282 11.9797 0.867988 12.0058 1 12.0058C1.13201 12.0058 1.26272 11.9797 1.38458 11.9289C1.50644 11.8781 1.61704 11.8037 1.71 11.71L6 7.41L10.29 11.71C10.383 11.8037 10.4936 11.8781 10.6154 11.9289C10.7373 11.9797 10.868 12.0058 11 12.0058C11.132 12.0058 11.2627 11.9797 11.3846 11.9289C11.5064 11.8781 11.617 11.8037 11.71 11.71C11.8037 11.617 11.8781 11.5064 11.9289 11.3846C11.9797 11.2627 12.0058 11.132 12.0058 11C12.0058 10.868 11.9797 10.7373 11.9289 10.6154C11.8781 10.4936 11.8037 10.383 11.71 10.29L7.41 6Z'
							fill='#262D35'
							fillOpacity='0.5'
						/>
					</svg>
				</button>
				<img src={img} alt='' />
				<div className='flex flex-col gap-2 text-center'>
					<p className='font-medium text-lg text-[#262D35] leading-6'>
						Profit goes to SWEN
					</p>
					<p className='text-[17px] text-[#808191] leading-6'>
						By leaving a tip, you take care of nature
					</p>
				</div>
				<button className='bg-[#0F0A2F] text-white w-full text-[16px] font-medium py-2.5 transition-all rounded-[40px] hover:opacity-80'>
					Learn more about SWEN
				</button>
			</div>
		</div>
	)
}

export default Modal
