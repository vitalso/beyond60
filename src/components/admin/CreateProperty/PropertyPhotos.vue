<template>
	<div class="container">
		<div class="text-gray-100 mb-5 max-w-200 mx-auto">
			<h2 class="font-semibold text-[35px] mb-2.5 text-black">Upload at least 5 property photos</h2>
			<p class="font-medium inline-flex items-center gap-2">
				<!-- Icon -->
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="size-6 shrink-0">
					<path d="M8 18H16M8 18C8 20.2091 9.79086 22 12 22C14.2091 22 16 20.2091 16 18M8 18V15.7887C8 15.1349 7.66659 14.5363 7.19153 14.0871C5.84201 12.8111 5 11.0039 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9C19 11.0039 18.158 12.8111 16.8085 14.0871C16.3334 14.5363 16 15.1349 16 15.7887V18M10 9L12 11M12 11L14 9M12 11V18" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				You can categorize them and add more photos later by editing your listing.
			</p>
		</div>

		<!-- Form -->
		<div
			class="py-6.25 px-5 rounded-lg border border-stroke-100 bg-white max-w-200 mx-auto"
			v-show="props.modelValue.photos.length === 0"
		>
			<label
				class="flex flex-col items-center gap-5 cursor-pointer"
			>
				<div class="rounded-lg p-2.5 bg-gray-200 inline-flex flex-col justify-center items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M2.25 13C2.25 10.3766 4.37665 8.25 7 8.25L7.5 8.25C7.91421 8.25 8.25 8.58579 8.25 9C8.25 9.41421 7.91421 9.75 7.5 9.75L7 9.75C5.20508 9.75 3.75 11.2051 3.75 13L3.75 17C3.75 18.7949 5.20508 20.25 7 20.25L17 20.25C18.7949 20.25 20.25 18.7949 20.25 17L20.25 13C20.25 11.2051 18.7949 9.75 17 9.75L16.5 9.75C16.0858 9.75 15.75 9.41421 15.75 9C15.75 8.58579 16.0858 8.25 16.5 8.25L17 8.25C19.6234 8.25 21.75 10.3766 21.75 13L21.75 17C21.75 19.6234 19.6234 21.75 17 21.75L7 21.75C4.37665 21.75 2.25 19.6234 2.25 17L2.25 13ZM8.46973 6.53027C8.17683 6.23738 8.17683 5.76262 8.46973 5.46973L11.4697 2.46973C11.7626 2.17683 12.2374 2.17683 12.5303 2.46973L15.5303 5.46973C15.8232 5.76262 15.8232 6.23738 15.5303 6.53027C15.2374 6.82317 14.7626 6.82317 14.4697 6.53027L12.75 4.81055L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15L11.25 4.81055L9.53027 6.53027C9.23738 6.82317 8.76262 6.82317 8.46973 6.53027Z" fill="#777777"/>
					</svg>
				</div>

				<div>
					<h4 class="text-lg font-medium mb-2.5">Upload photos or drag and drop</h4>
					<p class="text-sm text-gray-100">Supported formats: JPEG, PNG and WEBP <span class="text-xs block text-center mt-1.25">Max file size: 20MBs</span></p>
				</div>

				<input
					type="file"
					class="hidden sr-only"
					multiple
					accept="image/jpeg, image/png, image/webp"
					@change="onFilesChange"
				/>
			</label>
		</div>

		<!-- Grid of uploaded photos -->
		<div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-200 mx-auto">
			<div
        v-for="(photo, index) in modelValue.photos"
        :key="photo.id"
        class="relative rounded-lg overflow-hidden cursor-grab"
        :class="photo.isCover ? 'sm:col-span-2 h-65 sm:h-100' : 'h-65'"
        draggable="true"
        @dragstart="onDragStart(index)"
        @dragover.prevent
        @drop="onDrop(index)"
      >
				<!-- Image -->
        <img
          :src="photo.preview"
          class="w-full h-full object-cover"
          :alt="photo.isCover ? 'Cover image' : 'Photo'"
        />

				<!-- Cover badge -->
				<span
					v-if="photo.isCover"
					class="absolute p-2.5 top-3.75 left-18.25 bg-white rounded-lg outline outline-stroke-100 text-gray-100 font-semibold text-base"
				>
					Cover image
				</span>

				<!-- Drag handle -->
				<div
					class="absolute top-3.75 left-3.75 bg-white rounded-lg border border-stroke-100 inline-flex flex-col items-center justify-center"
					:class="photo.isCover ? 'size-11 [&>svg]:size-5.75' : 'size-7.5 [&>svg]:size-5' "
				>
					<IconDrag v-if="photo.isCover" />
					<IconDragSmall v-else />
				</div>

				<!-- Option menu -->
				<div class="absolute top-3.75 right-3.75">
					<button
						type="button"
						class="bg-white rounded-lg border border-stroke-100 inline-flex flex-col items-center justify-center cursor-pointer"
						:class="photo.isCover ? 'size-11 [&>svg]:size-5.75' : 'size-7.5 [&>svg]:size-5' "
						@click.stop="toggleMenu(photo.id)"
					>
						<IconMoreVertical />
					</button>

					<!-- Dropdown menu -->
					<div
						v-if="openMenuId === photo.id"
						class="rounded-lg bg-white font-medium text-gray-100 text-base absolute top-0 right-13.75"
					>
						<button
							type="button"
							class="p-2.5 hover:bg-gray-200 w-full transition-all duration-200 rounded-lg whitespace-nowrap cursor-pointer text-left"
							@click="removePhoto(photo.id); openMenuId = null"
						>
							Remove
						</button>
						<button
							v-if="!photo.isCover"
							type="button"
							class="p-2.5 hover:bg-gray-200 w-full transition-all duration-200 rounded-lg whitespace-nowrap cursor-pointer text-left"
							@click="makeCover(photo.id); openMenuId = null"
						>
							Make cover image
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Add more photod -->
		<div
			class="text-center mt-5"
			v-show="props.modelValue.photos.length > 0"
		>
			<Button
				as="button"
				variant="secondary"
				size="large"
			>
				Add more
			</Button>
		</div>

	</div>
</template>

<script setup>
import { ref } from 'vue'
import IconDrag from '@/assets/icons/drag-icon.svg?component'
import IconDragSmall from '@/assets/icons/drag-icon-small.svg?component'
import IconMoreVertical from '@/assets/icons/more-vertical.svg?component'

import Button from '@/components/Button.vue'

const props = defineProps({
  modelValue: { type: Object, required: true },
})

const emit = defineEmits(['update:modelValue'])

// Add photos to the list with preview URLs
const onFilesChange = (event) => {
  const files = Array.from(event.target.files)

  const newPhotos = files.map((file, i) => ({
    id: Date.now() + i,
    file,
    preview: URL.createObjectURL(file), // blob URL for preview
    isCover: false,
  }))

  // First uploaded photo becomes the cover if the list is empty
  if (props.modelValue.photos.length === 0 && newPhotos.length > 0) {
    newPhotos[0].isCover = true
  }

  emit('update:modelValue', {
    ...props.modelValue,
    photos: [...props.modelValue.photos, ...newPhotos],
  })
}

const openMenuId = ref(null)
const toggleMenu = (id) => {
  openMenuId.value = openMenuId.value === id ? null : id
}

const removePhoto = (id) => {
  const updated = props.modelValue.photos.filter(p => p.id !== id)
  if (updated.length > 0 && !updated.some(p => p.isCover)) {
    updated[0].isCover = true
  }
  emit('update:modelValue', { ...props.modelValue, photos: updated })
}

const makeCover = (id) => {
  const updated = props.modelValue.photos.map(p => ({
    ...p,
    isCover: p.id === id,
  }))
  emit('update:modelValue', { ...props.modelValue, photos: updated })
}

// Drag & Drop
const dragIndex = ref(null)

const onDragStart = (index) => {
  dragIndex.value = index
}

const onDrop = (index) => {
  const updated = [...props.modelValue.photos]
  const [moved] = updated.splice(dragIndex.value, 1)
  updated.splice(index, 0, moved)
  dragIndex.value = null
  emit('update:modelValue', { ...props.modelValue, photos: updated })
}
</script>