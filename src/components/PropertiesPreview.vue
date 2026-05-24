<template>
	<section class="py-17.5 md:py-25">
		<div class="container">
			<!-- Section tag and title  -->
			<div class="text-center mb-10">
				<!-- Section tag -->
				<div class="inline-flex mb-5 p-3 items-center gap-3.75 rounded-[90px] text-gray-100 font-semibold border border-stroke-100 bg-white">
					<!-- Icon -->
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.66667 13.3333C9.30961 14.4545 10.7803 14.4342 13.3333 13.3333M17.5 8.45857V14.9723C17.5 16.8285 16.0076 18.3333 14.1667 18.3333H5.83333C3.99238 18.3333 2.5 16.8285 2.5 14.9723V8.45857C2.5 7.44944 2.9497 6.49371 3.72488 5.8554L7.89155 2.42442C9.11859 1.41403 10.8814 1.41403 12.1084 2.42441L16.2751 5.85539C17.0503 6.49371 17.5 7.44944 17.5 8.45857Z" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<span>Exclusive properties preview</span>
				</div>

				<!-- Title -->
				<h2 class="text-5xl text-dark font-semibold">An exclusive preview of our <br> private collection</h2>
			</div>

			<!-- Listing of collection properties -->
			 <Carousel v-bind="carouselConfig">
				<Slide
					v-for="property in collectionProperties"
					:key="property.title"
				>
					<div class="carousel__item">
						<div class="rounded-sm overflow-hidden max-w-100 h-100 relative after:bg-dark/10 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-['']">
							<img :src="property.image" :alt="property.title" class="w-full h-full object-cover">
						</div>
						<div class="pt-7.5 pb-5 border-b border-stroke-100">
							<h3 class="text-2xl font-semibold mb-2.5">{{ property.title }}</h3>
							<p class="text-gray-100 font-medium">{{ property.location }}</p>
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
			<div class="text-center mt-21 lg:mt-10">
				<p class="font-medium text-gray-100 mb-2.5">To see all properties</p>
				<Button as="RouterLink" to="/register" variant="primary" size="large">
					Register as agent
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 7L14 12L10 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</Button>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button.vue';

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 1,
	gap: 20,
	breakpoints: {
		1024: {
			itemsToShow: 3,
		},
		768: {
			itemsToShow: 2,
		},
		640: {
			itemsToShow: 1,
		},
	},
  //wrapAround: true
}

const collectionProperties = ref([
	{
		title: 'Northern Ember Villa',
		location: 'Snæfellsnes Peninsula, Iceland',
		image: '/collection/property-1.webp',
	},
	{
		title: 'Skálavík Glass Retrea',
		location: 'Hvalfjörður, Iceland',
		image: '/collection/property-2.webp',
	},
	{
		title: 'Reykjavík Fjord Residence',
		location: 'Mosfellsbær, Iceland',
		image: '/collection/property-3.webp',
	},
])
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