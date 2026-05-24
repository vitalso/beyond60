<template>
  <section class="min-h-190 text-[29px] font-semibold text-white leading-9 hero-about-us relative flex flex-col justify-center bg-cover bg-center backdrop-blur-md">
		<div class="container z-20 relative">
			<div class="flex flex-col md:flex-row gap-5 md:gap-12.5 max-w-234 mx-auto">
				<img :src="LogoVerticalWhite" alt="Beyond 60° Logo" class="w-14 -rotate-90 md:rotate-0 max-md:translate-x-14 max-md:translate-y-10">
				<h5>Beyond 60° sets a new standard in luxury real estate access. We connect discerning clients with carefully selected properties that are privately shared, not publicly listed. Each residence is chosen for its uniqueness, character, and exceptional quality.</h5>
			</div>
		</div>

		<!-- Background blur effect -->
		<div class="progressive-blur bg-dark/10 absolute inset-0 w-full h-full"></div>
	</section>

	<!-- About us -->
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
					<span>About us</span>
				</div>

				<!-- Title -->
				<h2 class="text-5xl font-semibold">A trusted partner for agents <br> and property owners</h2>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-5">
				<div
					class="border border-stroke-100 rounded-lg p-5 lg:p-7.5 min-h-59 md:min-h-83 bg-white relative"
					v-for="item in aboutInfo"
					:key="item.title"
				>
					<!-- Icon -->
					<img :src="item.icon" alt="" class="w-6 h-6">

					<div class="absolute lg:bottom-7.5 lg:left-7.5 lg:right-7.5 bottom-5 left-5 right-5 space-y-5">
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

	<!-- Reviews section -->
	<ReviewsSection />

	<section class="py-17.5 md:py-25">
		<div class="max-w-323 px-4 mx-auto">
			<!-- Founder content -->
			<div class="flex max-md:flex-col gap-7.5">
				<!-- Picture -->
				<div class="rounded-lg bg-stroke-100 w-full min-h-75 sm:min-h-125 md:max-w-175"></div>

				<!-- Text content -->
				<div class="border border-stroke-100 rounded-lg p-5 md:p-7.5 bg-white relative font-semibold text-gray-100 text-2xl space-y-5 lg:max-w-132.5 flex flex-col">
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
import ReviewsSection from '@/components/ReviewsSection.vue'
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