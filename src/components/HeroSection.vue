<template>
	<section class="max-md:pt-35 max-md:pb-25 md:h-200 bg-hero">
		<div class="container z-10 relative h-full flex flex-col items-center justify-center">
			<!-- Title and description -->
			<div class="text-center mx-auto max-w-177 text-white space-y-6.5 text-lg font-semibold flex flex-col items-center self-center">
				<!-- Section tag -->
				<div class="flex gap-2.5 items-center p-3.75 rounded-[90px] text-lg font-semibold border border-stroke-100/20 bg-white/5 backdrop-blur-lg">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					
					Refined living
				</div>

				<h1 class="font-bold text-5xl md:text-6xl">A quiet network for extraordinary places.</h1>
				<p>Beyond 60° connects owners of remarkable homes with agents representing discerning travellers.</p>
				<Button as="RouterLink" to="/register" size="large" variant="secondary">
					Register now
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 7L14 12L10 17" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</Button>
			</div>
		</div>

		<!-- Bootom items -->
		<div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-338 flex justify-between gap-8 lg:gap-12.5 px-4 max-lg:hidden">
			<div
				v-for="items in bottomCards"
				:key="items.title"
				class="flex items-center gap-3 p-2.5 border-b border-stroke-100 text-white font-semibold w-1/4"
			>
				<img :src="items.icon" :alt="items.title" class="size-6">
				<span>{{ items.title }}</span>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue'
import Button from '../components/Button.vue'

import HomeIcon from '@/assets/icons/home.svg'
import LockIcon from '@/assets/icons/lock.svg'
import StarIcon from '@/assets/icons/star.svg'
import UserPolygonIcon from '@/assets/icons/user-polygon.svg'

const bottomCards = ref([
	{
		title: 'Luxury properties',
		icon: HomeIcon,
	},
	{
		title: 'Private access',
		icon: LockIcon,
	},
	{
		title: 'Curated selections',
		icon: StarIcon,
	},
	{
		title: '24/7 support',
		icon: UserPolygonIcon,
	},
])
</script>