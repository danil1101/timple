import cn from 'clsx'
import { FC, useState } from 'react'

import atmosphere from '../assets/category/atmosphere.png'
import cleanliness from '../assets/category/cleanliness.png'
import foodQuality from '../assets/category/food-quality.svg'
import service from '../assets/category/service.png'

const Category: FC = () => {
	const [currentCategory, setCurrentCategory] = useState<string[]>([])

	const category = [
		{
			icon: service,
			title: 'Service'
		},
		{
			icon: cleanliness,
			title: 'Cleanliness'
		},
		{
			icon: atmosphere,
			title: 'Atmosphere'
		},
		{
			icon: foodQuality,
			title: 'Food quality'
		}
	]

	const toggleCategory = (title: string) => {
		setCurrentCategory(prevState =>
			prevState.includes(title)
				? prevState.filter(cat => cat !== title)
				: [...prevState, title]
		)
	}

	return (
		<div className='flex flex-col gap-3'>
			<h3 className='font-medium text-black text-[15px] leading-6 mx-auto whitespace-nowrap'>
				What did you like?
			</h3>
			<div className='flex gap-3 flex-wrap justify-between'>
				{category.map(item => (
					<button
						key={item.icon}
						onClick={() => toggleCategory(item.title)}
						className='flex flex-col items-center gap-1 mx-auto'
					>
						<div
							className={cn(
								'rounded-xl p-4',
								currentCategory.includes(item.title)
									? 'bg-[#9771FD]'
									: 'bg-white'
							)}
						>
							<img
								src={item.icon}
								alt=''
								className='object-cover max-w-[48px] max-h-[48px]'
							/>
						</div>
						<h4
							className={cn(
								'font-medium text-xs leading-5',
								currentCategory.includes(item.title)
									? 'text-[#9771FD]'
									: 'text-[#808191]'
							)}
						>
							{item.title}
						</h4>
					</button>
				))}
			</div>
		</div>
	)
}

export default Category
