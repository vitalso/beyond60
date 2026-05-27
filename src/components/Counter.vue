<template>
	<div class="inline-flex gap-3.75 items-center font-medium text-base">
		<button
			type="button"
			class="size-8.5 rounded-full inline-flex justify-center items-center bg-gray-200 cursor-pointer"
			:class="{ 'opacity-40 pointer-events-none': modelValue <= min }"
			@click="decrement"
		>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 12C18.75 12.4142 18.4142 12.75 18 12.75L6 12.75C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25L18 11.25C18.4142 11.25 18.75 11.5858 18.75 12Z" fill="#1E1E1E"/>
			</svg>
		</button>

		<span>{{ modelValue }}</span>

		<button
			type="button"
			class="size-8.5 rounded-full inline-flex justify-center items-center bg-gray-200 cursor-pointer"
			:class="{ 'opacity-40 pointer-events-none': modelValue >= max }"
			@click="increment"
		>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V11.25H6C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H11.25V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H12.75V6Z" fill="#1E1E1E"/>
			</svg>
		</button>
	</div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
  min: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    default: 99,
  },
})

const emit = defineEmits(['update:modelValue'])

const decrement = () => {
  if (props.modelValue > props.min) {
    emit('update:modelValue', props.modelValue - 1)
  }
}

const increment = () => {
  if (props.modelValue < props.max) {
    emit('update:modelValue', props.modelValue + 1)
  }
}
</script>