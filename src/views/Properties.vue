<template>
  <section class="pt-30 md:pt-40 pb-12.5 font-semibold bg-process relative">
		<div class="container z-2 relative">
			<!-- Section tag and title  -->
			<div class="text-center mb-10">
				<!-- Section tag -->
				<div class="inline-flex mb-5 p-3 items-center gap-3.75 rounded-[90px] text-gray-100 font-semibold border border-stroke-100 bg-white">
					<!-- Icon -->
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.66667 9.16666V12.5M13.3333 9.16666V12.5M10 7.49999V14.1667M17.5 8.4586V14.9724C17.5 16.8286 16.0076 18.3333 14.1667 18.3333H5.83333C3.99238 18.3333 2.5 16.8286 2.5 14.9724V8.4586C2.5 7.44947 2.9497 6.49374 3.72488 5.85543L7.89155 2.42445C9.11859 1.41406 10.8814 1.41406 12.1084 2.42444L16.2751 5.85543C17.0503 6.49374 17.5 7.44947 17.5 8.4586Z" stroke="#777777" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
					<span>Properties</span>
				</div>

				<!-- Title -->
				<h2 class="text-5xl md:text-6xl text-dark font-semibold mb-5">Browse refined luxury <br class="max-md:hidden"> properties across the <br class="max-md:hidden"> Nordic region.</h2>
				<p class="font-medium text-gray-100 mb-10">Select a country to explore curated properties in that market.</p>
				<Button as="button" variant="primary" size="large">
					Switch to map view
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 7L14 12L10 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</Button>
			</div>
		</div>

		<div class="max-w-323 mx-auto px-4 pt-10 grid md:grid-cols-2 gap-5 relative z-2">
			<!-- Properties by country -->
			<RouterLink
				class="rounded-lg p-2.5 overflow-hidden relative overlay min-h-87.5 md:min-h-100 text-white!"
				v-for="item in properties"
				:key="item"
				:to="'properties/' + item.id"
			>
				<img :src="item.img" :alt="item.country" class="absolute object-cover w-full h-full inset-0">
				<h3 class="font-semibold absolute top-1/2 left-1/2 -translate-1/2 text-4xl z-2">{{ item.country }}</h3>
				<!-- Details -->
				<div class="flex max-xs:text-sm gap-4 lg:gap-5 absolute bottom-7.5 left-5 lg:left-7.5 z-2">
					<div class="inline-flex gap-2 xs:gap-3 items-center">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.45898 9.16663V12.5M12.918 9.16663V12.5M9.68847 7.49996V14.1666M16.9548 8.45857V14.9723C16.9548 16.8285 15.5089 18.3333 13.7253 18.3333H5.65161C3.86801 18.3333 2.42212 16.8285 2.42212 14.9723V8.45857C2.42212 7.44944 2.85781 6.49371 3.60885 5.8554L7.64571 2.42442C8.83452 1.41403 10.5424 1.41403 11.7312 2.42441L15.7681 5.85539C16.5191 6.49371 16.9548 7.44944 16.9548 8.45857Z" stroke="white" stroke-width="1.25" stroke-linecap="round"/>
						</svg>
						{{ item.items }} properties
					</div>

					<div class="inline-flex gap-3 items-center">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="9.99999" cy="9.99996" r="8.33333" stroke="white" stroke-width="1.25"/>
							<path d="M11.6667 8.33333C11.6667 7.41286 10.9205 6.66667 10 6.66667C9.07954 6.66667 8.33334 7.41286 8.33334 8.33333C8.33334 9.25381 9.07954 10 10 10" stroke="white" stroke-width="1.25" stroke-linecap="round"/>
							<path d="M10 10C10.9205 10 11.6667 10.7462 11.6667 11.6667C11.6667 12.5872 10.9205 13.3334 10 13.3334C9.07954 13.3334 8.33334 12.5872 8.33334 11.6667" stroke="white" stroke-width="1.25" stroke-linecap="round"/>
							<path d="M10 5.41663V6.66663" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M10 13.3334V14.5834" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						Starting from ${{ item.price_start }}
					</div>
				</div>
			</RouterLink>
		</div>
	</section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Button from '@/components/Button.vue';

const properties = ([
	{
		id: 0,
		img: '/country/Iceland.webp',
		country: 'Iceland',
		items: 42,
		price_start: '10,000'
	},
	{
		id: 1,
		img: '/country/Sweden.webp',
		country: 'Sweden',
		items: 26,
		price_start: '8,000'
	},
	{
		id: 2,
		img: '/country/Denmark.webp',
		country: 'Denmark',
		items: 12,
		price_start: '5,000'
	},
	{
		id: 3,
		img: '/country/Norway.webp',
		country: 'Norway',
		items: 19,
		price_start: '5,000'
	}
])
</script>