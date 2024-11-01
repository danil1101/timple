import cn from 'clsx'
import { FC } from 'react'

interface IProps {
	amount: number
	setAmount: (value: number) => void
}

const Amount: FC<IProps> = ({ amount, setAmount }) => {
	return (
		<div className='flex flex-col gap-2'>
			<div className='bg-white flex flex-col items-center justify-center gap-2 pt-3 pb-4 rounded-[20px]'>
				<h3 className='font-medium text-[15px] leading-6'>
					Enter amount of tips
				</h3>
				<input
					type='number'
					value={amount}
					onChange={value => setAmount(Number(value.target.value))}
					className={cn(
						'font-bold text-[34px] leading-9 outline-0 text-center max-w-[200px]',
						!amount && 'opacity-10'
					)}
				/>
			</div>
			<div className='flex gap-1'>
				<button
					onClick={() => setAmount(2)}
					className='py-2 w-full rounded-xl bg-white'
				>
					2
				</button>
				<button
					onClick={() => setAmount(5)}
					className='py-2 w-full rounded-xl bg-white'
				>
					5
				</button>
				<button
					onClick={() => setAmount(10)}
					className='py-2 w-full rounded-xl bg-white'
				>
					10
				</button>
			</div>
		</div>
	)
}

export default Amount
