<template>
	<section class="min-h-200 font-medium text-lg text-white relative flex flex-col bg-sign-up-hero max-xs:pt-40 xs:justify-center bg-cover bg-center bg-no-repeat">
		<div class="container z-10 relative">
			<div class="flex flex-col gap-5 max-w-200 mx-auto text-center">
				<h1 class="font-semibold text-5xl md:text-6xl">Register and rent or find luxury properties with Beyond 60°</h1>
				<p>Request access to privately shared luxury homes and exclusive <br class="max-md:hidden"> real estate opportunities worldwide.</p>
			</div>
		</div>

		<!-- Background blur effect -->
		<div class="progressive-blur bg-dark/10 absolute inset-0 w-full h-full"></div>
	</section>

	<section class="bg-process relative pb-15 -mt-50 sm:-mt-57.5 sign-up-form overflow-hidden">
		<div class="container z-1 relative">
			<!-- Tab component for toggle between two forms for Agents and Owners -->
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

			<!-- Form with changed content via tabs -->
			<div class="max-w-150 mx-auto px-5 py-7.5 md:p-7.5 rounded-lg bg-default-bg mt-5 border border-stroke-100">
				<div
					v-if="activeTab === 0"
				>
					<!-- Form for agents -->
					<form action="#" class="text-lg font-medium flex flex-col gap-7.5 items-start">
						<FileUpload v-model="photo" :max-size-mb="5" />

						<label for="full-name" class="flex flex-col gap-2.5 w-full">
							<span class="inline-flex gap-1 items-center">Full name <sup class="text-accent-red top-auto text-lg">*</sup></span>
							<input type="text" id="full-name" placeholder="John Doe" class="w-full rounded-lg bg-white border border-stroke-100 p-3.5 placeholder:text-gray-100 text-gray-100 outline-none" required>
						</label>

						<label for="email" class="flex flex-col gap-2.5 w-full">
							<span class="inline-flex gap-1 items-center">Email <sup class="text-accent-red top-auto text-lg">*</sup></span>
							<input type="text" id="email" placeholder="johndoe@gmail.com" class="w-full rounded-lg bg-white border border-stroke-100 p-3.5 placeholder:text-gray-100 text-gray-100 outline-none" required>
						</label>

						<label for="phone" class="flex flex-col gap-2.5 w-full">
							<span class="inline-flex gap-1 items-center">Phone <sup class="text-accent-red top-auto text-lg">*</sup></span>
							<input type="tel" id="phone" placeholder="(123) 456 789" class="w-full rounded-lg bg-white border border-stroke-100 p-3.5 placeholder:text-gray-100 text-gray-100 outline-none" required>
						</label>

						<label for="nationality" class="flex flex-col gap-2.5 w-full relative">
							<!-- Custom icon for select input -->
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="absolute right-4 top-14 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
								<g opacity="0.5">
									<path d="M7 10L12 14L17 10" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</g>
							</svg>
							
							<span class="inline-flex gap-1 items-center">Nationality <sup class="text-accent-red top-auto text-lg">*</sup></span>
							<select id="nationality" v-model="nationality" class="w-full rounded-lg bg-white border border-stroke-100 p-3.5 placeholder:text-gray-100 text-gray-100 outline-none appearance-none cursor-pointer" required>
								<option value="" selected disabled class="text-gray-100">Select</option>
								<option
									v-for="item in countries"
									:key="item.label"
									:value="item.value"
								>
									{{ item.label }}
								</option>
							</select>
						</label>

						<label for="location" class="flex flex-col gap-2.5 w-full relative">
							<!-- Custom icon for select input -->
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="absolute right-4 top-14 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
								<g opacity="0.5">
									<path d="M7 10L12 14L17 10" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</g>
							</svg>
							
							<span class="inline-flex gap-1 items-center">Location <sup class="text-accent-red top-auto text-lg">*</sup></span>
							<select id="location" v-model="location" class="w-full rounded-lg bg-white border border-stroke-100 p-3.5 placeholder:text-gray-100 outline-none appearance-none cursor-pointer" required>
								<option value="" selected disabled class="text-gray-100">Select</option>
								<option
									v-for="item in countries"
									:key="item.label"
									:value="item.value"
								>
									{{ item.label }}
								</option>
							</select>
						</label>

						<label for="comment" class="flex flex-col gap-2.5 w-full">
							<span class="inline-flex gap-1 items-center">Tell us a little about yourself and your clients</span>
							<textarea
								name="comment"
								id="comment"
								placeholder="Anything you want to say?"
								class="rounded-lg bg-white border border-stroke-100 p-3.5 placeholder:text-gray-100 outline-none w-full h-30 resize-none"
							></textarea>
						</label>

						<!-- 'photo' just for example toggle disabled state for button -->
						<Button
							as="button"
							variant="primary"
							size="large"
							:disabled="!photo"
						>
							Send application
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 7L14 12L10 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</Button>
					</form>
				</div>

				<div
					v-if="activeTab === 1"
				>
					<!-- Form for property owner -->
					<form action="#" class="text-lg font-medium flex flex-col gap-7.5 items-start">
						<FileUpload v-model="photo" :max-size-mb="5" />

						<label for="full-name-owner" class="flex flex-col gap-2.5 w-full">
							<span class="inline-flex gap-1 items-center">Full name <sup class="text-accent-red top-auto text-lg">*</sup></span>
							<input type="text" id="full-name-owner" placeholder="John Doe" class="w-full rounded-lg bg-white border border-stroke-100 p-3.5 placeholder:text-gray-100 text-gray-100 outline-none" required>
						</label>

						<label for="email-owner" class="flex flex-col gap-2.5 w-full">
							<span class="inline-flex gap-1 items-center">Email <sup class="text-accent-red top-auto text-lg">*</sup></span>
							<input type="text" id="email-owner" placeholder="johndoe@gmail.com" class="w-full rounded-lg bg-white border border-stroke-100 p-3.5 placeholder:text-gray-100 text-gray-100 outline-none" required>
						</label>

						<label for="phone-owners" class="flex flex-col gap-2.5 w-full">
							<span class="inline-flex gap-1 items-center">Phone <sup class="text-accent-red top-auto text-lg">*</sup></span>
							<input type="tel" id="phone-owner" placeholder="(123) 456 789" class="w-full rounded-lg bg-white border border-stroke-100 p-3.5 placeholder:text-gray-100 text-gray-100 outline-none" required>
						</label>

						<label for="nationality-owner" class="flex flex-col gap-2.5 w-full relative">
							<!-- Custom icon for select input -->
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="absolute right-4 top-14 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
								<g opacity="0.5">
									<path d="M7 10L12 14L17 10" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</g>
							</svg>
							
							<span class="inline-flex gap-1 items-center">Nationality <sup class="text-accent-red top-auto text-lg">*</sup></span>
							<select id="nationality-owner" v-model="nationalityOwner" class="w-full rounded-lg bg-white border border-stroke-100 p-3.5 placeholder:text-gray-100 text-gray-100 outline-none appearance-none cursor-pointer" required>
								<option value="" selected disabled class="text-gray-100">Select</option>
								<option
									v-for="item in countries"
									:key="item.label"
									:value="item.value"
								>
									{{ item.label }}
								</option>
							</select>
						</label>

						<label for="location-owner" class="flex flex-col gap-2.5 w-full relative">
							<!-- Custom icon for select input -->
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="absolute right-4 top-14 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
								<g opacity="0.5">
									<path d="M7 10L12 14L17 10" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</g>
							</svg>
							
							<span class="inline-flex gap-1 items-center">Location <sup class="text-accent-red top-auto text-lg">*</sup></span>
							<select id="location-owner" v-model="locationOwner" class="w-full rounded-lg bg-white border border-stroke-100 p-3.5 placeholder:text-gray-100 outline-none appearance-none cursor-pointer" required>
								<option value="" selected disabled class="text-gray-100">Select</option>
								<option
									v-for="item in countries"
									:key="item.label"
									:value="item.value"
								>
									{{ item.label }}
								</option>
							</select>
						</label>

						<label for="comment-owner" class="flex flex-col gap-2.5 w-full">
							<span class="inline-flex gap-1 items-center">Tell us a little about yourself and your clients</span>
							<textarea
								name="comment-owner"
								id="comment-owner"
								placeholder="Anything you want to say?"
								class="rounded-lg bg-white border border-stroke-100 p-3.5 placeholder:text-gray-100 outline-none w-full h-30 resize-none"
							></textarea>
						</label>

						<!-- 'nationalityOwner' just for example toggle disabled state for button -->
						<Button
							as="button"
							variant="primary"
							size="large"
							:disabled="!nationalityOwner"
						>
							Send application
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 7L14 12L10 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</Button>
					</form>
				</div>
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
import FileUpload from '@/components/FileUpload.vue'
const photo = ref(null)

const countries = ref([
  { value: 'ua', label: 'Ukraine'},
  { value: 'de', label: 'Germany'},
  { value: 'fr', label: 'France'},
  { value: 'it', label: 'Italy'},
  { value: 'es', label: 'Spain'},
  { value: 'pl', label: 'Poland'},
  { value: 'nl', label: 'Netherlands'},
  { value: 'se', label: 'Sweden'},
  { value: 'no', label: 'Norway'},
  { value: 'ch', label: 'Switzerland'},
])

const nationality = ref('')
const location = ref('')

const nationalityOwner = ref('')
const locationOwner = ref('')
</script>