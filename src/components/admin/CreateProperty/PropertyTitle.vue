<template>
	<div>
		<div class="text-gray-100 mb-5 max-w-200 mx-auto">
			<h2 class="font-semibold text-[35px] mb-2.5 text-black">Share your listing details</h2>
			<p class="font-medium inline-flex items-center gap-2">Add a clear title and description for your property.</p>
		</div>

		<!-- Form -->
		<div class="p-3.75 md:p-5 flex flex-col gap-5 rounded-lg border border-stroke-100 bg-gray-200 max-w-200 mx-auto">
			<label class="flex flex-col gap-2.5 w-full">
				<span class="inline-flex gap-1 items-center">Title <sup class="text-accent-red top-auto text-lg">*</sup></span>
				<input
					type="text"
					placeholder="e.g Fish Creek Villa"
					class="w-full rounded-lg bg-white border border-stroke-100 p-3.75 h-13.25 placeholder:text-gray-100/50 text-black outline-none"
					required
					maxlength="50"
					v-model="title"
				>
				<span class="text-sm font-medium text-gray-100">{{ title.length }}/50</span>
			</label>

			<label class="flex flex-col gap-2.5 w-full">
				<span class="inline-flex gap-1 items-center">Description <sup class="text-accent-red top-auto text-lg">*</sup></span>
				<textarea placeholder="Tell guests what they can expect from your property…" class="w-full rounded-lg bg-white border border-stroke-100 p-3.75 h-34.25 placeholder:text-gray-100/50 text-black outline-none resize-none" required></textarea>
			</label>

			<label class="flex flex-col gap-2.5 w-full relative">
				<span class="inline-flex gap-1 items-center">Base pirce per night <span class="text-gray-100">(USD)</span> <sup class="text-accent-red top-auto text-lg">*</sup></span>
				<input type="text" placeholder="e.g 1 100" class="w-full rounded-lg bg-white border border-stroke-100 p-3.75 pl-11.25 h-13.25 placeholder:text-gray-100 text-black outline-none" required>
				<IconPrice class="absolute left-3.75 bottom-4" />
			</label>
		</div>

	</div>
</template>

<script setup>
import { ref } from 'vue'
import IconPrice from '@/assets/icons/amenities/direction-down.svg?component'

const title = ref('')
</script>