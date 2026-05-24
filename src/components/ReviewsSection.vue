<template>
  <section class="bg-cream py-17.5 md:py-25">
		<div class="container relative z-2">
			<!-- Section tag and title  -->
			<div class="text-center mb-10">
				<!-- Section tag -->
				<div class="inline-flex mb-5 p-3 items-center gap-3.75 rounded-[90px] text-gray-100 font-semibold border border-stroke-100 bg-white">
					<!-- Icon -->
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15.2509 15.7733L15.7679 15.4671C16.8397 14.8323 17.5 13.6593 17.5 12.3899V7.60977C17.5 6.34034 16.8397 5.16733 15.7679 4.53261L11.732 2.14254C10.6603 1.50782 9.33975 1.50782 8.26795 2.14254L4.23205 4.53261C3.16025 5.16733 2.5 6.34034 2.5 7.60977V12.3899C2.5 13.6593 3.16025 14.8323 4.23205 15.4671L4.74913 15.7733M15.2509 15.7733L11.732 17.8571C10.6603 18.4919 9.33975 18.4919 8.26795 17.8571L4.74913 15.7733M15.2509 15.7733C14.2026 13.915 12.2436 12.6648 9.99999 12.6648C7.75635 12.6648 5.79739 13.915 4.74913 15.7733" stroke="#777777" stroke-width="1.5" stroke-linejoin="round"/>
						<circle cx="2.5" cy="2.5" r="2.5" transform="matrix(1 0 0 -1 7.5 10)" stroke="#777777" stroke-width="1.5" stroke-linejoin="round"/>
					</svg>
					<span>Trust & credibility</span>
				</div>

				<!-- Title -->
				<h2 class="text-5xl font-semibold">Built on trust, not volume</h2>
			</div>

			<!-- Reviews (2 cards on 1 row) -->
			<Carousel v-bind="carouselConfig">
				<Slide>
					<div class="max-lg:w-full lg:grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
						<!-- Card without image -->
						<div class="border border-stroke-100 rounded-lg p-5 md:p-7.5 min-h-75 md:h-75 bg-white relative">
							<!-- Icons -->
							<div class="flex mb-2.5">
								<svg v-for="n in 5" :key="n" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6.98821 0.575927C7.23767 -0.191832 8.32385 -0.191831 8.57331 0.575927L9.83881 4.47073C9.95037 4.81408 10.2703 5.04655 10.6314 5.04655H14.7266C15.5339 5.04655 15.8695 6.07956 15.2164 6.55406L11.9033 8.96118C11.6112 9.17339 11.489 9.54953 11.6006 9.89288L12.8661 13.7877C13.1155 14.5554 12.2368 15.1939 11.5837 14.7194L8.27058 12.3123C7.97851 12.1001 7.58301 12.1001 7.29094 12.3123L3.97782 14.7194C3.32473 15.1939 2.446 14.5554 2.69546 13.7877L3.96095 9.89288C4.07252 9.54953 3.9503 9.17339 3.65823 8.96118L0.345111 6.55406C-0.307984 6.07956 0.0276632 5.04655 0.834933 5.04655H4.93017C5.29119 5.04655 5.61115 4.81408 5.72272 4.47073L6.98821 0.575927Z" fill="#FFBB00"/>
								</svg>
							</div>

							<div class="flex items-center gap-2.5 text-gray-100 font-medium">
								<div class="size-7.5 rounded-full overflow-hidden">
									<img src="/review-author.jpg" alt="Jack Schneider">
								</div>
								<p>Jack Schneider</p>
							</div>

							<div class="absolute md:bottom-7.5 md:left-7.5 md:right-7.5 bottom-5 left-5 right-5">
								<h3 class="font-semibold text-2xl leading-7">"The experience felt personal and straightforward. It’s rare to find something this simple and well thought out.""The experience felt personal and straightforward. It’s rare to find something this simple and well thought out."</h3>
							</div>
						</div>

						<!-- Card with image -->
						<div class="rounded-lg h-75 overflow-hidden max-lg:hidden">
							<img src="/collection/property-3.webp" alt="image" class="w-full h-full object-cover">
						</div>
					</div>
				</Slide>

				<!-- Reviews (2 cards on 1 row) -->
				<Slide>
					<div class="max-lg:w-full lg:grid grid-cols-1 lg:grid-cols-2 gap-5">
						<!-- Card with image -->
						<div class="rounded-lg h-75 overflow-hidden max-lg:hidden">
							<img src="/collection/property-2.webp" alt="image" class="w-full h-full object-cover">
						</div>

						<!-- Card without image -->
						<div class="border border-stroke-100 rounded-lg p-5 md:p-7.5 min-h-75 md:h-75 bg-white relative">
							<!-- Icons -->
							<div class="flex mb-2.5">
								<svg v-for="n in 5" :key="n" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6.98821 0.575927C7.23767 -0.191832 8.32385 -0.191831 8.57331 0.575927L9.83881 4.47073C9.95037 4.81408 10.2703 5.04655 10.6314 5.04655H14.7266C15.5339 5.04655 15.8695 6.07956 15.2164 6.55406L11.9033 8.96118C11.6112 9.17339 11.489 9.54953 11.6006 9.89288L12.8661 13.7877C13.1155 14.5554 12.2368 15.1939 11.5837 14.7194L8.27058 12.3123C7.97851 12.1001 7.58301 12.1001 7.29094 12.3123L3.97782 14.7194C3.32473 15.1939 2.446 14.5554 2.69546 13.7877L3.96095 9.89288C4.07252 9.54953 3.9503 9.17339 3.65823 8.96118L0.345111 6.55406C-0.307984 6.07956 0.0276632 5.04655 0.834933 5.04655H4.93017C5.29119 5.04655 5.61115 4.81408 5.72272 4.47073L6.98821 0.575927Z" fill="#FFBB00"/>
								</svg>
							</div>

							<div class="flex items-center gap-2.5 text-gray-100 font-medium">
								<div class="size-7.5 rounded-full overflow-hidden">
									<img src="/review-author.jpg" alt="Jack Schneider">
								</div>
								<p>Jack Schneider</p>
							</div>

							<div class="absolute md:bottom-7.5 md:left-7.5 md:right-7.5 bottom-5 left-5 right-5">
								<h3 class="font-semibold text-2xl leading-7">"The experience felt personal and straightforward. It’s rare to find something this simple and well thought out."</h3>
							</div>
						</div>
					</div>
				</Slide>

				<template #addons>
					<Navigation>
						<template #prev>
							<span class="lg:hidden">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="rotate-180" xmlns="http://www.w3.org/2000/svg">
									<path d="M10 7L14 12L10 17" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</span>
						</template>
						<template #next>
							<span class="lg:hidden">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10 7L14 12L10 17" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</span>
						</template>
					</Navigation>

					<div class="lg:hidden">
						<Pagination />
					</div>
				</template>
			</Carousel>

			<!-- See more -->
			<div class="text-center mt-20">
				<p class="font-medium text-gray-100 mb-2.5">Sounds like you?</p>
				<Button as="RouterLink" to="/register" variant="primary" size="large">
					Register now
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 7L14 12L10 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</Button>
			</div>
		</div>
	</section>
</template>

<script setup>
import Button from '@/components/Button.vue';

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const carouselConfig = {
  // itemsToShow: 1,
	gap: 20,
	breakpoints: {
		1024: {
			itemsToShow: 0,
			enabled: false,
		},
	},
  itemsToShow: 1,
	enabled: true,
}
</script>

<style>
.carousel__pagination {
	bottom: -34px;
	gap: 10px;
}

	.carousel__pagination-button {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: #777777;
		opacity: 0.2;
	}

		.carousel__pagination-button--active {
			opacity: 0.5;
		}

.carousel__next, .carousel__prev {
	inset-block-start: auto;
  transform: translateY(41px);
  bottom: 0;
}

	.carousel__next {
    inset-inline-end: 28%;
	}

	.carousel__prev {
    inset-inline-start: 28%;
	}
</style>