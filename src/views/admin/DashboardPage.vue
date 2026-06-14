<template>
	<div class="min-h-[calc(100vh-96px)] flex flex-col justify-between">
		<div class="py-7.5 md:py-20">
			<div class="container">
				<!-- Steps for create property form -->
				<component
					:is="currentStep.component"
					v-model="formData"
				/>
			</div>
		</div>

		<!-- Bottom navigation -->
		<div class="relative">
			<!-- Progress bar -->
			<div class="w-full h-0.75 bg-gray-200 absolute top-0 left-0">
				<!-- Progress -->
				<div class="h-full bg-black" :style="{ width: `${progress}%` }"></div>
			</div>
		
			<div class="container mx-auto py-5 px-7.5 max-w-375 flex items-center justify-between">

				<Button
					as="button"
					variant="secondary"
					size="large"
					class="text-gray-100"
					@click="prev"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M14 7L10 12L14 17" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					Back
				</Button>

				<Button
					as="button"
					variant="primary"
					size="large"
					@click="next"
				>
					Next
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M10 7L14 12L10 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</Button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref , computed } from 'vue'
import Button from '@/components/Button.vue'

import PropertyAddress from '@/components/admin/CreateProperty/PropertyAddress.vue'
import PropertyDetails from '@/components/admin/CreateProperty/PropertyDetails.vue'
import PropertyOffer from '@/components/admin/CreateProperty/PropertyOffer.vue'
import PropertyPhotos from '@/components/admin/CreateProperty/PropertyPhotos.vue'
import PropertyTitle from '@/components/admin/CreateProperty/PropertyTitle.vue'

const steps = [
	{ id: 'Address', component: PropertyAddress },
	{ id: 'Details', component: PropertyDetails },
	{ id: 'Offer', component: PropertyOffer },
	{ id: 'Photos', component: PropertyPhotos },
	{ id: 'Title', component: PropertyTitle },
]

const currentIndex = ref(0)
const currentStep = computed(() => steps[currentIndex.value])
const isFirst = computed(() => currentIndex.value === 0)
const isLast  = computed(() => currentIndex.value === steps.length - 1)
const progress = computed(() => ((currentIndex.value + 1) / steps.length) * 100)

const next = () => { if (!isLast.value)  currentIndex.value++ }
const prev = () => { if (!isFirst.value) currentIndex.value-- }

const formData = ref({
	address: { street: '', complement: '', postalCode: '', city: '', country: '' },
  // personal: { name: '', email: '' },
  // property: { title: '', price: null },
})

// const submit = () => console.log(formData.value)


</script>