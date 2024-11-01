import { FC } from 'react'

const Feedback: FC = () => {
	return (
		<div className='flex flex-col gap-3'>
			<h3 className='font-medium text-black text-[15px] leading-6 mx-auto whitespace-nowrap'>
				What did you like?
			</h3>
			<textarea
				name='feedback'
				placeholder='Describe your own'
				rows={3}
				className='p-5 bg-white rounded-[20px] outline-0 resize-none'
			></textarea>
		</div>
	)
}

export default Feedback
