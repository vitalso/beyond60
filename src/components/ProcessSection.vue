<template>
  <section class="bg-cream py-17.5 md:py-25 font-semibold">
		<div class="container z-2 relative">
			<!-- Section tag and title  -->
			<div class="text-center mb-10">
				<!-- Section tag -->
				<div class="inline-flex mb-5 p-3 items-center gap-3.75 rounded-[90px] text-gray-100 font-semibold border border-stroke-100 bg-white">
					<!-- Icon -->
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.167 12.708C14.5119 12.7082 14.7918 12.9881 14.792 13.333C14.792 13.6781 14.512 13.9578 14.167 13.958H10C9.65482 13.958 9.375 13.6782 9.375 13.333C9.37518 12.988 9.65493 12.708 10 12.708H14.167ZM14.167 9.375C14.512 9.37518 14.792 9.65493 14.792 10C14.792 10.3451 14.512 10.6248 14.167 10.625H5.83301C5.48798 10.6248 5.20801 10.3451 5.20801 10C5.20801 9.65493 5.48798 9.37518 5.83301 9.375H14.167ZM10 6.04199C10.3452 6.04199 10.625 6.32181 10.625 6.66699C10.6248 7.01202 10.3451 7.29199 10 7.29199H5.83301C5.48809 7.29182 5.20818 7.01191 5.20801 6.66699C5.20801 6.32192 5.48798 6.04217 5.83301 6.04199H10Z" fill="#777777"/>
					</svg>
					<span>How it works</span>
				</div>

				<!-- Title -->
				<slot name="title"></slot>
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
			
			<div class="max-w-200 mx-auto">
				<div class="mt-5 bg-white rounded-lg border border-stroke-100">
					<!-- Agents -->
					<div
						v-if="activeTab === 0"
					>
						<!-- Process steps for agents -->
						<div
							v-for="step in processSteps"
							:key="step.id"
							class="p-5 md:p-7.5 flex max-md:flex-col gap-12.5 font-semibold text-[29px] not-last:border-b border-stroke-100"
						>
							<!-- Step number -->
							<div class="size-12.5 rounded-full flex flex-col items-center justify-center bg-cream border border-stroke-100 ">{{ step.id }}</div>

							<!-- Step title and description -->
							<div class="space-y-5 md:space-y-12.5 flex-1">
								<h3>{{ step.title }}</h3>
								<p class="text-gray-100 font-medium text-base">{{ step.description }}</p>
							</div>
						</div>
					</div>

					<!-- Property owners -->
					<div
						v-if="activeTab === 1"
					>
						<div class="p-5 md:p-7.5 flex max-md:flex-col gap-12.5 font-semibold text-[29px] not-last:border-b border-stroke-100">
							<h3 class="text-3xl">Property Owners steps will be described here</h3>
						</div>
					</div>
				</div>
			</div>

			<!-- See more -->
			<div class="text-center mt-10">
				<p class="font-medium text-gray-100 mb-2.5">Interested</p>
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
import { ref } from 'vue'

import Button from '@/components/Button.vue';

const tabs = ref([
	{ label: 'Agenst', id: 0, active: true },
	{ label: 'Property owners', id: 1, active: false },
])

const activeTab = ref(0)

const processSteps = ref([
	{
		id: 1,
		title: 'Create your account',
		description: 'Register in just a few steps to unlock access to private listings and begin exploring exclusive properties.',
	},
	{
		id: 2,
		title: 'Find your stay',
		description: 'Browse a curated selection of homes and discover stays that match your preferences, lifestyle, and expectations.',
	},
	{
		id: 3,
		title: 'Send inquiries',
		description: 'Connect directly with property owners by sending inquiries, asking questions, and getting the details you need.',
	},
	{
		id: 4,
		title: 'Confirm your booking',
		description: 'Finalize your stay with confidence through a clear and straightforward booking process.',
	},
])
</script>