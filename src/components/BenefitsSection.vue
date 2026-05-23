<template>
	<section class="py-17.5 md:py-25 text-white relative bg-cover bg-no-repeat bg-benefits overlay">
		<div class="container relative z-2">
			<!-- Section tag and title  -->
			<div class="text-center mb-15">
				<!-- Section tag -->
				<div class="inline-flex gap-2.5 items-center mb-5 p-3 rounded-[90px] text-base font-semibold border border-stroke-100/20 bg-white/5 backdrop-blur-lg">
					<!-- Icon -->
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M2.5 14.3333L2.5 5.66659C2.5 3.45745 4.29086 1.66659 6.5 1.66659L10.0098 1.66659C11.0707 1.66659 12.0881 2.08801 12.8382 2.83816L16.3284 6.32835C17.0786 7.07849 17.5 8.09591 17.5 9.15677L17.5 14.3333C17.5 16.5424 15.7091 18.3333 13.5 18.3333L6.5 18.3333C4.29086 18.3333 2.5 16.5424 2.5 14.3333Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
						<path d="M11.6667 1.66667L11.6667 3.5C11.6667 5.70914 13.4575 7.5 15.6667 7.5L17.5 7.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
						<path d="M7.5 11.6667L8.83616 12.7356C9.25403 13.0699 9.86103 13.016 10.2134 12.6132L12.5 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<span>Benefits</span>
				</div>

				<!-- Title -->
				<h2 class="text-5xl font-semibold">Value of joining the private <br> Beyond 60° ecosystem</h2>
			</div>

			<!-- Our benefits -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
				<div
					v-for="benefit in benefits"
					:key="benefit.title"
					class="font-medium text-white/80 space-y-2.5 max-md:text-center"
				>
					<img :src="benefit.icon" :alt="benefit.title" class="size-6 max-md:mx-auto">
					<h3 class="mt-4.5 text-xl font-semibold text-white">{{ benefit.title }}</h3>
					<p>{{ benefit.description }}</p>
				</div>
			</div>

			<!-- See more -->
			<div class="text-center mt-15">
				<p class="font-medium text-white/80 mb-2.5">Interested</p>
				<Button as="RouterLink" to="/register" variant="secondary" size="large">
					Register now
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 7L14 12L10 17" stroke="#1e1e1e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</Button>
			</div>
		</div>

		<!-- Background blur effect -->
		<div class="progressive-blur bg-dark/10 absolute inset-0 w-full h-full"></div>

		<!-- Top wave on background -->
		<svg width="1440" height="223" viewBox="0 0 1440 223" fill="none" class="absolute left-1/2 -translate-x-1/2 top-[30%] z-1 max-md:hidden" xmlns="http://www.w3.org/2000/svg">
			<path opacity="0.2" d="M0 0.5C0.69363 0.5 51.5544 0.5 87.0111 0.5C95.2954 0.5 102 7.21573 102 15.5V207.5C102 215.784 108.716 222.5 117 222.5H1305.5C1313.78 222.5 1320.5 215.784 1320.5 207.5V15.944C1320.5 7.65972 1327.22 0.944 1335.5 0.944H1440" stroke="white"/>
		</svg>

		<!-- Bottom wave on background -->
		<svg width="1440" height="115" viewBox="0 0 1440 115" fill="none" class="absolute left-1/2 -translate-x-1/2 bottom-20 z-2 max-md:hidden" xmlns="http://www.w3.org/2000/svg">
			<path opacity="0.2" d="M0 0.5C0.69363 0.5 51.5544 0.5 87.0111 0.5C95.2954 0.5 102 7.21573 102 15.5V99.5C102 107.784 108.716 114.5 117 114.5H1305.5C1313.78 114.5 1320.5 107.784 1320.5 99.5V15.728C1320.5 7.44373 1327.22 0.728 1335.5 0.728H1440" stroke="white"/>
		</svg>
	</section>
</template>

<script setup>
import { ref } from 'vue'
import Button from './Button.vue'

import SmartHouseIcon from '@/assets/icons/smart-home.svg'
import ShieldIcon from '@/assets/icons/shield.svg'
import LockIcon from '@/assets/icons/lock.svg'
import SparkleIcon from '@/assets/icons/sparkles.svg'
import TaskIcon from '@/assets/icons/task-check.svg'
import SmartHomeWaveIcon from '@/assets/icons/home-wave.svg'

const benefits = ref([
	{
		icon: SmartHouseIcon,
		title: 'Premium properties access',
		description: 'View high-end properties not available on public platforms or general marketplaces.',
	},
	{
		icon: ShieldIcon,
		title: 'Verified professional network',
		description: 'Connect with vetted agents, owners, and professionals.',
	},
	{
		icon: LockIcon,
		title: 'Private member ecosystem',
		description: 'Operate within a closed, trusted real estate network.',
	},
	{
		icon: SparkleIcon,
		title: 'High-value opportunities',
		description: 'Engage with qualified properties and serious clients.',
	},
	{
		icon: TaskIcon,
		title: 'Secure verified environment',
		description: 'Work within a fully verified and discreet network.',
	},
	{
		icon: SmartHomeWaveIcon,
		title: 'Curated luxury experience',
		description: 'Focus on quality-driven, high-end real estate interactions.',
	},
])
</script>