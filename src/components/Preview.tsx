import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import madison from '../assets/preview/madison.png'

const Preview: FC = () => {
	return (
		<Swiper
			className='w-full mb-5'
			effect='coverflow'
			loop={true}
			grabCursor={true}
			centeredSlides={true}
			spaceBetween={36}
			slidesPerView='auto'
			coverflowEffect={{
				rotate: 0,
				stretch: 0,
				depth: 100,
				scale: 0.9,
				modifier: 1,
				slideShadows: false
			}}
			modules={[EffectCoverflow]}
		>
			<SwiperSlide
				style={{
					width: 'fit-content'
				}}
			>
				<div className='flex items-center gap-3'>
					<img
						src={madison}
						alt=''
						className='w-[92px] h-[92px] rounded-full object-cover'
					/>
					<div className='flex flex-col gap-1'>
						<p className='font-semibold text-[22px] leading-6'>Madison</p>
						<p className='font-semibold text-[16px] leading-5 text-[#9771FD]'>
							Waiter
						</p>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide
				style={{
					width: 'fit-content'
				}}
			>
				<div className='flex items-center gap-3'>
					<img
						src={madison}
						alt=''
						className='w-[92px] h-[92px] rounded-full object-cover'
					/>
					<div className='flex flex-col gap-1'>
						<p className='font-semibold text-[22px] leading-6'>Madison</p>
						<p className='font-semibold text-[16px] leading-5 text-[#9771FD]'>
							Waiter
						</p>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide
				style={{
					width: 'fit-content'
				}}
			>
				<div className='flex items-center gap-3'>
					<img
						src={madison}
						alt=''
						className='w-[92px] h-[92px] rounded-full object-cover'
					/>
					<div className='flex flex-col gap-1'>
						<p className='font-semibold text-[22px] leading-6'>Madison</p>
						<p className='font-semibold text-[16px] leading-5 text-[#9771FD]'>
							Waiter
						</p>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide
				style={{
					width: 'fit-content'
				}}
			>
				<div className='flex items-center gap-3'>
					<img
						src={madison}
						alt=''
						className='w-[92px] h-[92px] rounded-full object-cover'
					/>
					<div className='flex flex-col gap-1'>
						<p className='font-semibold text-[22px] leading-6'>Madison</p>
						<p className='font-semibold text-[16px] leading-5 text-[#9771FD]'>
							Waiter
						</p>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide
				style={{
					width: 'fit-content'
				}}
			>
				<div className='flex items-center gap-3'>
					<img
						src={madison}
						alt=''
						className='w-[92px] h-[92px] rounded-full object-cover'
					/>
					<div className='flex flex-col gap-1'>
						<p className='font-semibold text-[22px] leading-6'>Madison</p>
						<p className='font-semibold text-[16px] leading-5 text-[#9771FD]'>
							Waiter
						</p>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	)
}

export default Preview
