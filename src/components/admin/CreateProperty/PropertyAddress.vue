<template>
	<div>
		<div class="md:text-center text-gray-100 mb-5">
			<h2 class="font-semibold text-[35px] mb-2.5 text-black">What is the address of your property?</h2>
			<p class="font-medium inline-flex items-center gap-2">
				<!-- Icon -->
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="size-6 shrink-0">
					<path d="M8 18H16M8 18C8 20.2091 9.79086 22 12 22C14.2091 22 16 20.2091 16 18M8 18V15.7887C8 15.1349 7.66659 14.5363 7.19153 14.0871C5.84201 12.8111 5 11.0039 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9C19 11.0039 18.158 12.8111 16.8085 14.0871C16.3334 14.5363 16 15.1349 16 15.7887V18M10 9L12 11M12 11L14 9M12 11V18" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				Search or enter an address located in Iceland, Sweden, Norway, or Denmark</p>
		</div>

		<!-- Form -->
		<div class="p-3.75 md:p-5 flex flex-col gap-5 rounded-lg border border-stroke-100 bg-gray-200 max-w-152.5 mx-auto">
			<label class="flex flex-col gap-2.5 w-full">
				<span class="inline-flex gap-1 items-center">Street address <sup class="text-accent-red top-auto text-lg">*</sup></span>
				<input
					type="text"
					placeholder="Karl Johans gate"
					:value="modelValue.address.street"
					@input="update('street', $event.target.value)"
					class="w-full rounded-lg bg-white border border-stroke-100 p-3.75 h-13.25 placeholder:text-gray-100 text-black outline-none"
					required
				>
			</label>

			<label class="flex flex-col gap-2.5 w-full">
				<span class="inline-flex gap-1 items-center">Address complement</span>
				<input
					type="text"
					placeholder="E.g residence"
					class="w-full rounded-lg bg-white border border-stroke-100 p-3.75 h-13.25 placeholder:text-gray-100 text-black outline-none"
					:value="modelValue.address.complement"
					@input="update('complement', $event.target.value)"
				>
			</label>

			<label class="flex flex-col gap-2.5 w-full">
				<span class="inline-flex gap-1 items-center">Postal code <sup class="text-accent-red top-auto text-lg">*</sup></span>
				<input
					type="text" 
					placeholder="0154"
					class="w-full rounded-lg bg-white border border-stroke-100 p-3.75 h-13.25 placeholder:text-gray-100 text-black outline-none"
					:value="modelValue.address.postalCode"
					@input="update('postalCode', $event.target.value)"
					required
				>
			</label>

			<label class="flex flex-col gap-2.5 w-full">
				<span class="inline-flex gap-1 items-center">City <sup class="text-accent-red top-auto text-lg">*</sup></span>
				<input
					type="text"
					placeholder="Oslo"
					class="w-full rounded-lg bg-white border border-stroke-100 p-3.75 h-13.25 placeholder:text-gray-100 text-black outline-none"
					:value="modelValue.address.city"
					@input="update('city', $event.target.value)"
					required
				>
			</label>

			<label class="flex flex-col gap-2.5 w-full">
				<span class="inline-flex gap-1 items-center">Country <sup class="text-accent-red top-auto text-lg">*</sup></span>
				<div class="grid grid-cols-2 md:grid-cols-4 gap-2.5">
					<!-- Country item -->
					<label
						v-for="item in country"
						:key="item.label"
						:for="item.label"
						class="cursor-pointer"
					>
						<input
							type="radio"
							name="country"
							:id="item.label"
							:checked="item.label === 'Iceland'"
							class="hidden peer sr-only"
							:value="modelValue.address.country"
							@input="update('country', item.label)">
						<span
							class="flex justify-center items-center flex-col gap-3.75 p-3.75 text-sm xs:text-base text-gray-100 outline outline-stroke-100 rounded-lg peer-checked:bg-white peer-checked:text-black"
						>
							<img :src="item.flag" :alt="item.label" class="h-6">
							{{ item.label }}
						</span>
					</label>
				</div>
			</label>

			<!-- Map -->
			<div class="rounded-lg overflow-hidden h-62.5">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128084.04140816249!2d10.619970653317385!3d59.89375167161634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2z0J7RgdC70L4sINCd0L7RgNCy0LXQs9GW0Y8!5e0!3m2!1suk!2sua!4v1781265318401!5m2!1suk!2sua" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Object, required: true },
})

const emit = defineEmits(['update:modelValue'])

const update = (field, value) => {
  emit('update:modelValue', {
    ...props.modelValue,
    address: { ...props.modelValue.address, [field]: value },
  })
}

const country = ([
  {
    flag: '/flag/Iceland.png',
    label: 'Iceland',
  },
  {
    flag: '/flag/Sweden.png',
    label: 'Sweden',
  },
  {
    flag: '/flag/Norway.png',
    label: 'Norway',
  },
  {
    flag: '/flag/Denmark.png',
    label: 'Denmark',
  },
])
</script>