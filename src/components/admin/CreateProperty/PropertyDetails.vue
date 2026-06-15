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
					<input
						type="text"
						placeholder="e.g. 1100"
						class="text-xl appearance-none outline-none text-gray-100 max-w-20"
						:value="modelValue.details.size"
						@input="update('size', $event)"
					>
					m<sup>2</sup>
				</label>
			</div>

			<!-- Divider -->
			<hr class="h-px my-2.5 bg-stroke-100 border-0" />

			<div class="p-5 flex items-center font-medium justify-between text-xl gap-3.75">
				Guest
				<Counter
					:model-value="modelValue.details.guests"
					@update:model-value="update('guests', $event)"
					:max="20"
				/>
			</div>

			<!-- Divider -->
			<hr class="h-px my-2.5 bg-stroke-100 border-0" />

			<div class="p-5 flex items-center font-medium justify-between text-xl gap-3.75">
				Bedrooms
				<Counter
					:model-value="modelValue.details.bedrooms"
					@update:model-value="update('bedrooms', $event)"
					:max="20"
				/>
			</div>

			<!-- Divider -->
			<hr class="h-px my-2.5 bg-stroke-100 border-0" />

			<div class="p-5 flex items-center font-medium justify-between text-xl gap-3.75">
				Bathrooms
				<Counter
					:model-value="modelValue.details.bathrooms"
					@update:model-value="update('bathrooms', $event)"
					:max="20"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import Counter from '@/components/Counter.vue'

const props = defineProps({
  modelValue: { type: Object, required: true },
})

const emit = defineEmits(['update:modelValue'])

const update = (field, value) => {
  emit('update:modelValue', {
    ...props.modelValue,
    details: {
      ...props.modelValue.details,
      [field]: value,
    },
  })
}
</script>