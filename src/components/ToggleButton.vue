<template>
	<div class="rounded-[90px] bg-white outline outline-stroke-100 p-1.25 gap-2.5 inline-flex items-center">
		<!-- Yes -->
		<label class="cursor-pointer">
			<input
				type="radio"
				class="peer sr-only hidden"
				:name="props.name"
				:checked="modelValue === true"
        @change="emit('update:modelValue', true)"
			/>
			<span class="text-sm font-semibold text-gray-100 inline-flex p-2.5 leading-3.75 rounded-[90px] peer-checked:text-white peer-checked:bg-black transition-all duration-200">Yes</span>
		</label>

		<!-- No -->
		<label class="cursor-pointer">
			<input
				type="radio"
				class="peer sr-only hidden"
				:name="props.name"
				:checked="modelValue === false"
        @change="emit('update:modelValue', false)"
			/>
			<span class="text-sm font-semibold text-gray-100 inline-flex p-2.5 leading-3.75 rounded-[90px] peer-checked:text-white peer-checked:bg-black transition-all duration-200">No</span>
		</label>
	</div>
</template>

<script setup>
const props = defineProps({
	modelValue: {
    type: Boolean,
    default: true,
  },
	name: {
		type: String,
	}
})

const emit = defineEmits(['update:modelValue'])
</script>