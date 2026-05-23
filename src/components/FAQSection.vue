<template>
	<section class="bg-cream py-17.5 md:py-25">
		<div class="container">
			<!-- Section tag and title  -->
			<div class="text-center mb-10">
				<!-- Section tag -->
				<div class="inline-flex mb-5 p-3 items-center gap-3.75 rounded-[90px] text-gray-100 font-semibold border border-stroke-100 bg-white">
					<!-- Icon -->
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.4026 8.4005L12.0333 8.80634V8.80634L11.4026 8.4005ZM7.58335 7.49984C7.58335 7.91405 7.91914 8.24984 8.33335 8.24984C8.74757 8.24984 9.08335 7.91405 9.08335 7.49984H8.33335H7.58335ZM9.25002 11.2498C9.25002 11.6641 9.58581 11.9998 10 11.9998C10.4142 11.9998 10.75 11.6641 10.75 11.2498H10H9.25002ZM10.75 13.3332C10.75 12.919 10.4142 12.5832 10 12.5832C9.58581 12.5832 9.25002 12.919 9.25002 13.3332H10H10.75ZM9.25002 14.1665C9.25002 14.5807 9.58581 14.9165 10 14.9165C10.4142 14.9165 10.75 14.5807 10.75 14.1665H10H9.25002ZM18.3334 9.99984H17.5834C17.5834 14.188 14.1882 17.5832 10 17.5832V18.3332V19.0832C15.0166 19.0832 19.0834 15.0164 19.0834 9.99984H18.3334ZM10 18.3332V17.5832C5.81186 17.5832 2.41669 14.188 2.41669 9.99984H1.66669H0.916687C0.916687 15.0164 4.98343 19.0832 10 19.0832V18.3332ZM1.66669 9.99984H2.41669C2.41669 5.81168 5.81186 2.4165 10 2.4165V1.6665V0.916504C4.98343 0.916504 0.916687 4.98325 0.916687 9.99984H1.66669ZM10 1.6665V2.4165C14.1882 2.4165 17.5834 5.81168 17.5834 9.99984H18.3334H19.0834C19.0834 4.98325 15.0166 0.916504 10 0.916504V1.6665ZM11.6667 7.49984H10.9167C10.9167 7.68344 10.8635 7.85233 10.7719 7.99466L11.4026 8.4005L12.0333 8.80634C12.276 8.42922 12.4167 7.97982 12.4167 7.49984H11.6667ZM8.33335 7.49984H9.08335C9.08335 6.99358 9.49376 6.58317 10 6.58317V5.83317V5.08317C8.66533 5.08317 7.58335 6.16515 7.58335 7.49984H8.33335ZM10 5.83317V6.58317C10.5063 6.58317 10.9167 6.99358 10.9167 7.49984H11.6667H12.4167C12.4167 6.16515 11.3347 5.08317 10 5.08317V5.83317ZM10 10.8332H9.25002V11.2498H10H10.75V10.8332H10ZM11.4026 8.4005L10.7719 7.99466C10.6709 8.15165 10.5432 8.31588 10.389 8.50755C10.2426 8.68946 10.0662 8.90341 9.90808 9.12067C9.59721 9.54792 9.25002 10.126 9.25002 10.8332H10H10.75C10.75 10.6199 10.8551 10.3686 11.121 10.0032C11.2513 9.8241 11.3944 9.65085 11.5577 9.44789C11.7131 9.25469 11.8853 9.03638 12.0333 8.80634L11.4026 8.4005ZM10 13.3332H9.25002V14.1665H10H10.75V13.3332H10Z" fill="#777777"/>
					</svg>
					<span>FAQs</span>
				</div>

				<!-- Title -->
				<h2 class="text-5xl font-semibold">Questions you might have</h2>
			</div>

			<div class="max-w-187.5 mx-auto">
				<div
					class="bg-white rounded-lg border border-stroke-100 p-5 font-medium text-gray-100 not-last:mb-2.5 cursor-pointer overflow-hidden transition-all duration-300"
					v-for="(item, index) in props.questions"
					:key="index"
				>
					<!-- Question -->
					<div
						class="flex gap-5 items-center"
						@click="toggleQuestion(index)"
					>
						<h3 class="text-lg text-black flex-1">{{ item.question }}</h3>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="ml-auto transition-all duration-300"
							:class="{ 'rotate-270': activeQuestion === index , 'rotate-90': activeQuestion !== index }"
						>
							<path d="M10 7L14 12L10 17" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
					<!-- Answer -->
					<div
						class="transition-all duration-300"
						:class="activeQuestion === index ? 'max-h-none pt-5' : 'max-h-0 overflow-hidden' "
					>
						{{ item.answer }}
					</div>
				</div>
			</div>

			<!-- See more -->
			<div class="text-center mt-10">
				<p class="font-medium text-gray-100 mb-2.5">Have more questions?</p>
				<Button as="RouterLink" to="/register" variant="primary" size="large">
					Help center
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

const props = defineProps({
	questions: { type: Array, default: () => [] }
})

const activeQuestion = ref(null)
const toggleQuestion = (index) => {
	activeQuestion.value = activeQuestion.value === index ? null : index
}
</script>