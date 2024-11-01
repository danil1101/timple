import { FC } from 'react'

import applePay from '../assets/apple-pay.png'

interface IProps {
	fullAmount: number
}

const Footer: FC<IProps> = ({ fullAmount }) => {
	return (
		<div className='flex flex-col gap-3 py-6 px-5'>
			<div className='flex justify-between'>
				<span className='font-medium text-black text-[15px] leading-6'>
					To pay {fullAmount}€
				</span>
				<span className='font-medium text-[#808191] text-[14px] leading-6'>
					Service fees 0€
				</span>
			</div>
			<div className='w-full h-[1px] bg-[#F3F3F3]' />
			<div className='flex flex-col gap-2'>
				<button className='bg-[#0F0A2F] text-white text-[16px] font-medium py-2.5 transition-all rounded-[40px] hover:opacity-80'>
					Pay with
					<img
						src={applePay}
						alt=''
						className='ml-2.5 inline-block max-w-[47px]'
					/>
				</button>
				<button className='bg-[#9771FD] text-white text-[16px] font-medium py-2.5 transition-all rounded-[40px] hover:opacity-80'>
					Pay with debit card
				</button>
			</div>
			<p className='font-medium text-[11px] leading-[15px] text-[#808191] text-center'>
				By clicking the button, you agree to our <a href='#'>Terms of Use</a>{' '}
				and <a href='#'>Privacy Policy</a>, and{' '}
				<a href='#'>authorize payment</a> and <a href='#'>data processing.</a>
			</p>
		</div>
	)
}

export default Footer
