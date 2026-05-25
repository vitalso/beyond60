<template>
	<div class="mx-auto">
		<div
			class="size-25 rounded-full overflow-hidden mb-2.5"
		>
			<div
				v-if="!preview"
				@click="fileInput.click()"
				class="bg-cream h-full flex justify-center items-center flex-col cursor-pointer"
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2.23609 14.17C3.2272 18.6495 7.22233 22 12 22C16.8824 22 20.9476 18.501 21.8247 13.8738C21.9398 13.2668 22 12.6404 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 12.7452 2.08151 13.4713 2.23609 14.17ZM21.8247 13.8738L19.061 11.8839C17.5338 10.7843 15.4467 10.898 14.0479 12.1569L9.95209 15.8431C8.55331 17.102 6.4662 17.2157 4.93901 16.1161L2.23609 14.17M11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z" stroke="#1E1E1E" stroke-width="1.5"/>
				</svg>
			</div>

			<!-- Image preview -->
			<div
				v-else
				class="relative w-full overflow-hidden"
			>
				<img
					:src="preview"
					alt="Preview"
					class="object-cover"
				/>
			</div>
		</div>

		<input
			id="upload"
			ref="fileInput"
			type="file"
			:accept="accept"
			class="hidden"
			@change="onFileChange"
			required
		/>

		<label for="upload" class="cursor-pointer">
			<span class="inline-flex gap-1 items-center">Select photo <sup class="text-accent-red top-auto text-lg">*</sup></span>
		</label>    
	</div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  accept: { type: String, default: '.jpg,.jpeg,.png' },
  maxSizeMb: { type: Number, default: 5 },
})

const emit = defineEmits(['update:modelValue'])

const preview = ref(null)
const fileInput = ref(null)
const error = ref(null)

const processFile = (file) => {
  error.value = null

  // Check file type
  if (!['image/jpeg', 'image/png'].includes(file.type)) {
    error.value = 'Only JPG and PNG files are allowed'
    return
  }

  // Check file size
  if (file.size > props.maxSizeMb * 1024 * 1024) {
    error.value = `File size must be less than ${props.maxSizeMb}MB`
    return
  }

  // FileReader — read file as base64
  const reader = new FileReader()
  reader.onload = (e) => {
    preview.value = e.target.result  // → "data:image/jpeg;base64,..."
    emit('update:modelValue', file)
  }
  reader.readAsDataURL(file)
}

const onFileChange = (event) => {
  const file = event.target.files[0]
  if (file) processFile(file)
}
</script>