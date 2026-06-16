<template>
	<div>
		<div class="text-center container">
			<div class="rounded-lg p-2.5 bg-gray-200 inline-flex flex-col justify-center items-center border border-stroke-100">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M16.6654 5L7.4987 14.1667L3.33203 10" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>

			<h2 class="font-semibold text-[35px] my-2.5">Property published!</h2>
			<p class="text-gray-100">Clients can now see your property and request inquiries!</p>

			<div class="mt-7.5 inline-flex gap-2.5 items-center">
				<Button
					as="RouterLink"
					to="/admin"
					variant="secondary"
					size="large"
				>
					Dashboard
				</Button>

				<Button
					as="RouterLink"
					to="/"
					variant="primary"
					size="large"
				>
					View listing
				</Button>
			</div>

		</div>

		<!-- Image listing -->
		<div class="mt-15 flex gap-5 overflow-x-auto no-scrollbar max-md:pl-4">
			<div
				v-for="photo in modelValue.photos"
				:key="photo.id"
				class="shrink-0 w-97.5 h-65 rounded-lg overflow-hidden"
			>
				<img :src="photo.preview" class="w-full h-full object-cover" />
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
  modelValue: { type: Object, required: true },
})

import Button from '@/components/Button.vue'
</script>