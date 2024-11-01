import { useEffect, useState } from 'react'

import {
	Amount,
	Category,
	Feedback,
	Footer,
	Header,
	Modal,
	Preview,
	Rate,
	TextLoop,
	Toggle
} from './components'

function App() {
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [amount, setAmount] = useState(0)
	const [rateExperience, setRateExperience] = useState(0)
	const [rateService, setRateService] = useState(0)
	const [fullAmount, setFullAmount] = useState(0)
	const [isFullAmount, setIsFullAmount] = useState(false)

	useEffect(() => {
		if (!isFullAmount) {
			setFullAmount(0)
		} else {
			setFullAmount(amount)
		}
	}, [amount, isFullAmount])

	return (
		<div className='flex flex-col min-h-full'>
			<Header />
			<TextLoop setIsOpenModal={setIsOpenModal} />
			<Preview />
			<main className='flex-auto flex flex-col gap-4 px-[20px]'>
				<Amount amount={amount} setAmount={setAmount} />
				<Rate
					title='Rate your experience'
					rating={rateExperience}
					setRating={setRateExperience}
				/>
				{!!rateExperience && (
					<Rate
						title='Rate Service'
						rating={rateService}
						setRating={setRateService}
					/>
				)}
				<Category />
				<Feedback />
				<Toggle isFullAmount={isFullAmount} setIsFullAmount={setIsFullAmount} />
			</main>
			<Footer fullAmount={fullAmount} />
			<Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
		</div>
	)
}

export default App
