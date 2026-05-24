<template>
  <section class="min-h-190 text-[29px] font-semibold text-white leading-9 hero-about-us relative flex flex-col justify-center bg-cover bg-center backdrop-blur-md">
		<div class="container z-20 relative">
			<div class="flex gap-12.5 max-w-234 mx-auto">
				<img :src="LogoVerticalWhite" alt="Beyond 60° Logo" class="w-14">
				<h5>Beyond 60° sets a new standard in luxury real estate access. We connect discerning clients with carefully selected properties that are privately shared, not publicly listed. Each residence is chosen for its uniqueness, character, and exceptional quality.</h5>
			</div>
		</div>

		<!-- Background blur effect -->
		<div class="progressive-blur bg-dark/10 absolute inset-0 w-full h-full"></div>
	</section>

	<!-- About us -->
	<section class="bg-cream py-17.5 md:py-25">
		<div class="container">
			<!-- Section tag and title  -->
			<div class="text-center mb-10">
				<!-- Section tag -->
				<div class="inline-flex mb-5 p-3 items-center gap-3.75 rounded-[90px] text-gray-100 font-semibold border border-stroke-100 bg-white">
					<!-- Icon -->
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.66667 13.3333C9.30961 14.4545 10.7803 14.4342 13.3333 13.3333M17.5 8.45857V14.9723C17.5 16.8285 16.0076 18.3333 14.1667 18.3333H5.83333C3.99238 18.3333 2.5 16.8285 2.5 14.9723V8.45857C2.5 7.44944 2.9497 6.49371 3.72488 5.8554L7.89155 2.42442C9.11859 1.41403 10.8814 1.41403 12.1084 2.42441L16.2751 5.85539C17.0503 6.49371 17.5 7.44944 17.5 8.45857Z" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<span>About us</span>
				</div>

				<!-- Title -->
				<h2 class="text-5xl font-semibold">A trusted partner for agents <br> and property owners</h2>
			</div>

			<div class="grid grid-cols-3 gap-5">
				<div
					class="border border-stroke-100 rounded-lg p-5 md:p-7.5 min-h-59 lg:min-h-83 bg-white relative"
					v-for="item in aboutInfo"
					:key="item.title"
				>
					<!-- Icon -->
					<img :src="item.icon" alt="" class="w-6 h-6">

					<div class="absolute md:bottom-7.5 md:left-7.5 md:right-7.5 bottom-5 left-5 right-5 space-y-5">
						<h3 class="font-semibold text-[29px] leading-8">{{ item.title}}</h3>
						<p class="font-medium text-gray-100">{{ item.description }}</p>
					</div>
				</div>
			</div>

			<!-- See more -->
			<div class="text-center mt-10">
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
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
				<!-- Card without image -->
				<div class="border border-stroke-100 rounded-lg p-5 md:p-7.5 h-63.5 md:h-75 bg-white relative">
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

				<!-- Card with image -->
				<div class="rounded-lg h-75 overflow-hidden max-lg:hidden">
					<img src="/collection/property-3.webp" alt="image" class="w-full h-full object-cover">
				</div>
			</div>

			<!-- Reviews (2 cards on 1 row) -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
				<!-- Card with image -->
				<div class="rounded-lg h-75 overflow-hidden max-lg:hidden">
					<img src="/collection/property-2.webp" alt="image" class="w-full h-full object-cover">
				</div>

				<!-- Card without image -->
				<div class="border border-stroke-100 rounded-lg p-5 md:p-7.5 h-63.5 md:h-75 bg-white relative">
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

			<!-- See more -->
			<div class="text-center mt-10">
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

	<section class="py-17.5 md:py-25">
		<div class="max-w-323 px-4 mx-auto">
			<!-- Founder content -->
			<div class="flex gap-7.5">
				<!-- Picture -->
				<div class="rounded-lg bg-stroke-100 w-full min-h-125 max-w-175"></div>

				<!-- Text content -->
				<div class="border border-stroke-100 rounded-lg p-5 md:p-7.5 bg-white relative font-semibold text-gray-100 text-2xl space-y-5 flex-1 flex flex-col">
					<h3 class="text-5xl text-black">A word from our founder</h3>
					<p class="mt-auto">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
				</div>
			</div>

			<!-- See more -->
			<div class="text-center mt-10">
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

	<!-- FAQ section -->
	<FAQSection :questions="questions" />

	<JoinSection />
</template>

<script setup>
import { ref } from 'vue'

import LogoVerticalWhite from '../assets/logo-vertical-white.svg'
import Button from '@/components/Button.vue'
import FAQSection from '@/components/FAQSection.vue'
import JoinSection from '@/components/JoinSection.vue'

import UsersIcon from '@/assets/icons/users.svg'
import BriefcaseIcon from '@/assets/icons/briefcase.svg'
import ChartIcon from '@/assets/icons/chart-arrow-up.svg'

const aboutInfo = ref([
	{
		icon: UsersIcon,
		title: 'Who we are',
		description: 'We are a client-focused real estate company combining market insight with a personalized approach. Our goal is to simplify complex decisions and guide you with clarity and confidence.',
	},
	{
		icon: BriefcaseIcon,
		title: 'What we do',
		description: 'We bridge the gap between property owners and professional agents, offering a curated, high-end approach that ensures quality, trust, and outstanding results.',
	},
	{
		icon: ChartIcon,
		title: 'Our vision',
		description: 'We aim to go beyond traditional real estate by delivering value-driven experiences that connect people with the right opportunities—today and for the future.',
	},
])

const questions = ref([
	{
		question: 'What is Beyond 60°?',
		answer: 'Beyond 60° is a curated platform that connects guests and property owners through privately shared, high-quality properties. We focus on discretion, simplicity, and direct communication.',
	},
	{
		question: 'How do I register?',
		answer: 'Simply click the "Register now" button and follow the prompts to create your account. Once registered, you will gain access to our exclusive listings.',
	},
	{
		question: 'Why are properties only visible to registered users?',
		answer: 'We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
	{
		question: 'How do bookings work?',
		answer: 'Beyond 60° does not charge guests any fees for using our platform. We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
	{
		question: 'Can I list my property on Beyond 60°?',
		answer: ' We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
	{
		question: 'Is there a fee to use the platform?',
		answer: 'Beyond 60° does not charge guests any fees for using our platform. We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
])
</script>