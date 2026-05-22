<template>
	<ProcessSection class="md:pt-40 relative bg-process">
		<template #title>
			<h2 class="text-6xl text-dark font-semibold">A Simple process, <br> designed around you</h2>
		</template>
	</ProcessSection>

	<section class="py-17.5 md:py-25">
		<div class="container relative z-2">
			<!-- Section tag and title  -->
			<div class="text-center mb-10">
				<!-- Section tag -->
				<div class="inline-flex mb-5 p-3 items-center gap-3.75 rounded-[90px] text-gray-100 font-semibold border border-stroke-100 bg-white">
					<!-- Icon -->
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5.00002 18.3333C6.55625 18.3333 7.8634 17.2668 8.2305 15.8249C8.34404 15.3788 8.70645 15 9.16669 15H15M5.00002 18.3333C3.15907 18.3333 1.66669 16.8409 1.66669 15V4.16663C1.66669 2.78591 2.78598 1.66663 4.16669 1.66663H12.5C13.8807 1.66663 15 2.78591 15 4.16663V15M5.00002 18.3333H15C16.5563 18.3333 17.8634 17.2668 18.2305 15.8249C18.344 15.3788 17.9603 15 17.5 15H15M5.83335 10.8333L7.08335 9.58329M10.8334 7.91663C10.8334 9.06722 9.90061 9.99996 8.75002 9.99996C7.59943 9.99996 6.66669 9.06722 6.66669 7.91663C6.66669 6.76603 7.59943 5.83329 8.75002 5.83329C9.90061 5.83329 10.8334 6.76603 10.8334 7.91663Z" stroke="#777777" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
					<span>Qualifications</span>
				</div>

				<!-- Title -->
				<h2 class="text-5xl font-semibold">Access standards for agents <br> and owners</h2>
			</div>

			<!-- Tab component -->
			<div class="text-center">
				<div class="mx-auto rounded-[90px] border border-stroke-100 p-1.25 gap-2.5 inline-flex bg-white">
					<button
						v-for="tab in tabs" 
						:key="tab.id" 
						:active="activeTab === tab.id" 
						@click="activeTab = tab.id"
						class="p-2.5 rounded-[90px] text-lg text-gray-100 font-medium transition-colors duration-300 cursor-pointer"
						:class="activeTab === tab.id ? 'bg-black text-white' : 'hover:bg-gray-100/10'"
					>
						{{ tab.label }}
					</button>
				</div>
			</div>

			<div
				v-if="activeTab === 0"
				class="grid grid-cols-3 gap-5 mt-5"
			>
				<div class="space-y-5">
					<!-- Card without image -->
					<div class="border border-stroke-100 rounded-lg p-5 md:p-7.5 min-h-53 md:min-h-71 bg-white relative">
						<!-- Icon -->
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M5.44117 19.5488C7.19694 21.0756 9.49052 22 12 22C14.5095 22 16.8031 21.0756 18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linejoin="round"/>
							<circle cx="3" cy="3" r="3" transform="matrix(1 0 0 -1 9 12)" stroke="#1E1E1E" stroke-width="1.5" stroke-linejoin="round"/>
						</svg>

						<div class="absolute md:bottom-7.5 md:left-7.5 md:right-7.5 bottom-5 left-5 right-5 space-y-5">
							<h3 class="font-semibold text-[29px] leading-8">Identity <br> check</h3>
							<p class="font-medium text-gray-100">Agents must verify their identity and confirm affiliation with a recognised brokerage or real estate agency.</p>
						</div>
					</div>

					<!-- Card without image -->
					<div class="border border-stroke-100 rounded-lg p-5 md:p-7.5 min-h-53 md:min-h-71 bg-white relative">
						<!-- Icon -->
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M2.55928 11.6318C3.49086 11.1662 4.60597 11.2667 5.43916 11.8916L6.4499 12.6504C6.78107 12.8989 6.8487 13.3689 6.6003 13.7002C6.35177 14.0316 5.88088 14.0981 5.54951 13.8496L4.93623 13.3896C5.67935 16.6039 8.55963 18.9999 11.9997 19C15.0411 19 17.6473 17.1271 18.7233 14.4688C18.8788 14.0848 19.316 13.8993 19.6999 14.0547C20.0837 14.2101 20.2692 14.6474 20.114 15.0312C18.8165 18.2366 15.673 20.5 11.9997 20.5C7.56736 20.4999 3.90488 17.2042 3.32881 12.9297C3.29552 12.9429 3.26259 12.9574 3.23018 12.9736L2.33565 13.4209C1.96516 13.6061 1.51405 13.4554 1.32881 13.085C1.14392 12.7146 1.29442 12.2643 1.66475 12.0791L2.55928 11.6318ZM11.9997 5.5C12.4139 5.5 12.7497 5.83579 12.7497 6.25V7.10352C13.904 7.42998 14.7497 8.49122 14.7497 9.75C14.7497 10.1642 14.4139 10.5 13.9997 10.5C13.5856 10.4999 13.2497 10.1641 13.2497 9.75C13.2497 9.05964 12.6901 8.5 11.9997 8.5C11.3095 8.50013 10.7497 9.05973 10.7497 9.75C10.7497 10.4403 11.3095 10.9999 11.9997 11C13.5185 11 14.7497 12.2312 14.7497 13.75C14.7497 15.0088 13.904 16.07 12.7497 16.3965V17.25C12.7497 17.6642 12.4139 18 11.9997 18C11.5856 17.9999 11.2497 17.6641 11.2497 17.25V16.3965C10.0956 16.0699 9.24971 15.0087 9.24971 13.75C9.24971 13.3359 9.58561 13.0001 9.99971 13C10.4139 13 10.7497 13.3358 10.7497 13.75C10.7497 14.4403 11.3095 14.9999 11.9997 15C12.6901 15 13.2497 14.4404 13.2497 13.75C13.2497 13.0596 12.6901 12.5 11.9997 12.5C10.481 12.4999 9.24971 11.2687 9.24971 9.75C9.24971 8.4913 10.0956 7.43005 11.2497 7.10352V6.25C11.2497 5.83587 11.5856 5.50013 11.9997 5.5ZM11.9997 3C16.3505 3 19.9599 6.17508 20.6364 10.335L21.5495 9.65039C21.8809 9.40186 22.3518 9.46843 22.6003 9.7998C22.8487 10.1311 22.7811 10.6011 22.4499 10.8496L21.4392 11.6084C21.0318 11.9139 20.5565 12.0946 20.069 12.1445C19.5597 12.1966 19.0352 12.1061 18.5593 11.8682L17.6647 11.4209C17.2944 11.2357 17.1439 10.7854 17.3288 10.415C17.5141 10.0446 17.9652 9.89386 18.3356 10.0791L19.1394 10.4814C18.5395 7.08257 15.5709 4.5 11.9997 4.5C8.95845 4.50007 6.35318 6.3731 5.27705 9.03125C5.12163 9.4152 4.68346 9.60073 4.29951 9.44531C3.91583 9.28977 3.7311 8.85257 3.88643 8.46875C5.18388 5.26349 8.32647 3.00007 11.9997 3Z" fill="#1E1E1E"/>
						</svg>

						<div class="absolute md:bottom-7.5 md:left-7.5 md:right-7.5 bottom-5 left-5 right-5 space-y-5">
							<h3 class="font-semibold text-[29px] leading-8">Financial <br> qualification</h3>
							<p class="font-medium text-gray-100">Agents must demonstrate sufficient financial standing appropriate to luxury real estate activity.</p>
						</div>
					</div>
				</div>

				<div class="space-y-5 order-3">
					<!-- Card without image -->
					<div class="border border-stroke-100 rounded-lg p-5 md:p-7.5 min-h-53 md:min-h-71 bg-white relative">
						<!-- Icon -->
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6M2 10.3475C2 10.3475 5.11804 12.4244 9.97767 12.9109M22 10.3475C22 10.3475 18.882 12.4244 14.0223 12.9109M6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round"/>
							<path d="M14 12.1599V13.1599C14 13.1699 14 13.1699 14 13.1799C14 14.2699 13.99 15.1599 12 15.1599C10.02 15.1599 10 14.2799 10 13.1899V12.1599C10 11.1599 10 11.1599 11 11.1599H13C14 11.1599 14 11.1599 14 12.1599Z" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>

						<div class="absolute md:bottom-7.5 md:left-7.5 md:right-7.5 bottom-5 left-5 right-5 space-y-5">
							<h3 class="font-semibold text-[29px] leading-8">Active market presence</h3>
							<p class="font-medium text-gray-100">Agents must show ongoing engagement through current properties, clients, or recent professional activity.</p>
						</div>
					</div>

					<!-- Card without image -->
					<div class="border border-stroke-100 rounded-lg p-5 md:p-7.5 min-h-53 md:min-h-71 bg-white relative">
						<!-- Icon -->
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="6" cy="4" r="2" stroke="#1E1E1E" stroke-width="1.5"/>
							<ellipse cx="6" cy="8" rx="3" ry="2" stroke="#1E1E1E" stroke-width="1.5"/>
							<circle cx="18" cy="16" r="2" stroke="#1E1E1E" stroke-width="1.5"/>
							<path d="M22 12C22 6.47715 17.5228 2 12 2M12 22C6.47715 22 2 17.5228 2 12" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round"/>
							<ellipse cx="18" cy="20" rx="3" ry="2" stroke="#1E1E1E" stroke-width="1.5"/>
						</svg>

						<div class="absolute md:bottom-7.5 md:left-7.5 md:right-7.5 bottom-5 left-5 right-5 space-y-5">
							<h3 class="font-semibold text-[29px] leading-8">Network credibility validation</h3>
							<p class="font-medium text-gray-100">Agents must be endorsed or validated through trusted industry connections or clients.</p>
						</div>
					</div>
				</div>

				<div class="rounded-lg overflow-hidden relative p-5 flex flex-col justify-end order-2">
					<!-- Background image -->
					<img src="/access-image.webp" alt="image" class="w-full h-full object-cover absolute inset-0">
					<h3 class="text-white font-semibold text-[42px] relative z-2 leading-11">Every registration request is reviewed and approved by our team.</h3>
					<!-- Background blur effect -->
					<div class="progressive-blur bg-dark/20 absolute inset-0 w-full h-full"></div>
				</div>
			</div>

			<div
				v-if="activeTab === 1"
				class="mt-5"
			>
					<h3 class="text-3xl text-center">Standarts for owners will be described here</h3>
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
</template>

<script setup>
import { ref } from 'vue'

import Button from '@/components/Button.vue';
import ProcessSection from '@/components/ProcessSection.vue';
import FAQSection from '@/components/FAQSection.vue';

const tabs = ref([
	{ label: 'Agenst', id: 0, active: true },
	{ label: 'Property owners', id: 1, active: false },
])

const activeTab = ref(0)


const questions = ref([
	{
		question: 'What is Beyond 60°?',
		answer: 'Beyond 60° is a curated platform that connects guests and property owners through privately shared, high-quality properties. We focus on discretion, simplicity, and direct communication.',
	},
	{
		question: 'Is registration required to view properties?',
		answer: 'Simply click the "Register now" button and follow the prompts to create your account. Once registered, you will gain access to our exclusive listings.',
	},
	{
		question: 'How long does the approval process take?',
		answer: 'We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
	{
		question: 'Is there a fee to apply?',
		answer: 'Beyond 60° does not charge guests any fees for using our platform. We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
	{
		question: 'What types of properties are accepted?',
		answer: ' We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
	{
		question: 'Can agents submit properties on behalf of owners?',
		answer: 'Beyond 60° does not charge guests any fees for using our platform. We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
	{
		question: 'Why are applications reviewed individually?',
		answer: 'Beyond 60° does not charge guests any fees for using our platform. We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
	{
		question: 'Will my information remain private?',
		answer: 'Beyond 60° does not charge guests any fees for using our platform. We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
	{
		question: 'Can I apply from any country?',
		answer: 'Beyond 60° does not charge guests any fees for using our platform. We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
	{
		question: 'What happens after I am approved?',
		answer: 'Beyond 60° does not charge guests any fees for using our platform. We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
])
</script>