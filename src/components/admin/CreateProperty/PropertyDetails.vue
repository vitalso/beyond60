<template>
	<div>
		<div class="text-gray-100 mb-2.5 max-w-175 mx-auto">
			<h2 class="font-semibold text-[35px] mb-2.5 text-black">Share your property details</h2>
			<p class="font-medium inline-flex items-center gap-2">Help guests understand your space better.</p>
		</div>

		<div class="max-w-175 mx-auto">
			<div class="p-5 flex items-center font-medium justify-between text-xl gap-3.75">
				<span class="font-medium">Size</span>
				<label>
					<input type="text" placeholder="e.g. 1100" class="text-xl appearance-none outline-none text-gray-100 max-w-20">
					m<sup>2</sup>
				</label>
			</div>

			<!-- Divider -->
			<hr class="h-px my-2.5 bg-stroke-100 border-0" />

			<div class="p-5 flex items-center font-medium justify-between text-xl gap-3.75">
				Guest
				<Counter v-model="guests" :max="20" />
			</div>

			<!-- Divider -->
			<hr class="h-px my-2.5 bg-stroke-100 border-0" />

			<div class="p-5 flex items-center font-medium justify-between text-xl gap-3.75">
				Bedrooms
				<Counter v-model="bedrooms" :max="20" />
			</div>

			<!-- Divider -->
			<hr class="h-px my-2.5 bg-stroke-100 border-0" />

			<div class="p-5 flex items-center font-medium justify-between text-xl gap-3.75">
				Bathrooms
				<Counter v-model="bathrooms" :max="20" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Counter from '@/components/Counter.vue'

const guests = ref(1)
const bedrooms = ref(1)
const bathrooms = ref(1)
</script>