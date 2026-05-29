<template>
	<div
		ref="dropdown"
		class="bg-white rounded-lg border border-stroke-100 absolute top-[calc(100%+10px)] left-0 z-10 overflow-hidden"
		v-show="modelValue"
	>
		<!-- Heading -->
		<div class="bg-gray-200 p-3.75 border-b border-b-stroke-100 flex justify-between font-medium text-base">
			<slot name="title" />

			<!-- Close button -->
			<button
				type="button"
				class="cursor-pointer"
				@click="close"
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7123 16.7729C16.0052 17.0658 16.4801 17.0658 16.7729 16.7729C17.0658 16.48 17.0658 16.0052 16.7729 15.7123L13.0607 12L16.7729 8.2877C17.0658 7.99481 17.0658 7.51993 16.7729 7.22704C16.48 6.93415 16.0052 6.93415 15.7123 7.22704L12 10.9393L8.28766 7.22699C7.99477 6.9341 7.5199 6.9341 7.227 7.22699C6.93411 7.51989 6.93411 7.99476 7.227 8.28765L10.9393 12L7.22699 15.7123C6.9341 16.0052 6.9341 16.4801 7.22699 16.773C7.51989 17.0659 7.99476 17.0659 8.28765 16.773L12 13.0606L15.7123 16.7729Z" fill="#1E1E1E"/>
				</svg>
			</button>
		</div>
		
		<!-- Content -->
		<slot name="content" />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
	modelValue: {
		type: Boolean,
		default:false
	}
})

const emit = defineEmits(['update:modelValue'])

const dropdown = ref(null)
onClickOutside(dropdown, () => emit('update:modelValue', false))

const close = () => emit('update:modelValue', false)
</script>