import { FC } from 'react'

interface IProps {
	isFullAmount: boolean
	setIsFullAmount: (value: boolean) => void
}

const Toggle: FC<IProps> = ({ isFullAmount, setIsFullAmount }) => {
	return (
		<div className='bg-white p-4 rounded-[20px] items-center flex gap-2'>
			<div className='flex flex-col gap-1'>
				<p className='font-medium text-[14px] leading-5 text-black'>
					I want Mark to receive the full amount
				</p>
				<span className='text-xs leading-[14px] text-[#808191]'>
					You compensate service fee of 0.00€, which will be applied to your
					payment.
				</span>
			</div>
			<label className='toggle'>
				<input
					className='toggle-checkbox'
					type='checkbox'
					onClick={() => setIsFullAmount(!isFullAmount)}
					value={isFullAmount}
				/>
				<div className='toggle-switch'></div>
			</label>
		</div>
	)
}

export default Toggle
