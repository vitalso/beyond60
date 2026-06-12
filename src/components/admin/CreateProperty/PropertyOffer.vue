<template>
	<div>
		<div class="text-gray-100 mb-2.5 max-w-200 mx-auto">
			<h2 class="font-semibold text-[35px] mb-2.5 text-black">What else does your property offer?</h2>
			<p class="font-medium inline-flex items-center gap-2">Tell guests what’s included in your space.</p>
		</div>

		<div class="mt-10 space-y-5 font-medium max-w-200 mx-auto">
			<h3 class="text-2xl">Pets and smoking</h3>
			<div>
				<p class="mb-2.5 text-lg">Pets allowed</p>
				<!-- Toogle -->
        <ToggleButton v-model="petsAllowed" :name="'petsAllowed'">
					<template #iconYes>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path d="M16.3184 12.8672C15.1142 11.5993 13.5806 10.9011 12.0001 10.9011C10.4196 10.9011 8.88595 11.5994 7.68178 12.8672C6.53334 14.0763 5.7315 15.7547 5.42385 17.5931C5.22759 18.7657 5.58595 19.8944 6.40706 20.6898C7.26103 21.5169 8.37651 21.7683 9.46762 21.3795C10.2764 21.0914 11.1284 20.9452 12.0001 20.9452C12.8717 20.9452 13.7238 21.0913 14.5327 21.3795C14.8692 21.4995 15.2079 21.5585 15.5407 21.5585C16.2869 21.5584 17.0026 21.2617 17.5932 20.6897C18.4143 19.8944 18.7726 18.7657 18.5764 17.593C18.2687 15.7547 17.4669 14.0763 16.3184 12.8672ZM16.5495 19.6123C16.1084 20.0397 15.5851 20.1622 15.0361 19.9666C14.0653 19.6206 13.0438 19.4452 12 19.4452C10.9563 19.4452 9.93482 19.6206 8.96404 19.9666C8.41514 20.1623 7.89178 20.0397 7.45064 19.6124C6.98236 19.1587 6.78792 18.5295 6.90318 17.8406C7.43062 14.6887 9.57412 12.4011 12 12.4011C14.4259 12.4011 16.5694 14.6887 17.0969 17.8406C17.2122 18.5296 17.0178 19.1588 16.5495 19.6123ZM15.5804 10.3501C16.4092 10.3501 17.2001 9.88912 17.7503 9.08526C18.2492 8.35654 18.5239 7.40142 18.5239 6.39586C18.5239 5.39025 18.2492 4.43512 17.7503 3.7064C17.2001 2.90254 16.4092 2.44153 15.5804 2.44153C14.7517 2.44153 13.9609 2.9025 13.4106 3.70636C12.9117 4.43508 12.637 5.39025 12.637 6.39581C12.637 7.40137 12.9117 8.3565 13.4106 9.08522C13.9609 9.88912 14.7517 10.3501 15.5804 10.3501ZM15.5804 3.94148C16.2632 3.94148 17.0239 4.94943 17.0239 6.39581C17.0239 7.84214 16.2632 8.85009 15.5804 8.85009C14.8978 8.85009 14.137 7.84214 14.137 6.39581C14.137 4.94943 14.8978 3.94148 15.5804 3.94148ZM8.41973 10.3501C9.24848 10.3501 10.0394 9.88912 10.5896 9.08526C11.0885 8.35654 11.3632 7.40142 11.3632 6.39586C11.3632 5.39029 11.0885 4.43512 10.5896 3.7064C10.0394 2.90254 9.24848 2.44153 8.41973 2.44153C7.59098 2.44153 6.80006 2.90254 6.24984 3.7064C5.75095 4.43512 5.47626 5.39025 5.47626 6.39586C5.47626 7.40142 5.75095 8.35654 6.24984 9.08526C6.80006 9.88912 7.59098 10.3501 8.41973 10.3501ZM8.41973 3.94148C9.10242 3.94148 9.86315 4.94943 9.86315 6.39581C9.86315 7.84214 9.10242 8.85009 8.41973 8.85009C7.737 8.85009 6.97626 7.84214 6.97626 6.39581C6.97626 4.94943 7.73695 3.94148 8.41973 3.94148ZM23.0865 10.0436C22.8001 9.27853 22.2361 8.72578 21.5392 8.52703C20.8422 8.32828 20.0716 8.5005 19.4249 8.99943C18.8358 9.45384 18.3868 10.1408 18.1607 10.9337C17.9346 11.7267 17.9537 12.5471 18.2145 13.2439C18.5009 14.0089 19.0649 14.5617 19.7618 14.7605C19.9516 14.8146 20.1468 14.8412 20.3435 14.8412C20.8692 14.8412 21.4055 14.6511 21.8762 14.2881C22.4653 13.8337 22.9143 13.1467 23.1404 12.3537C23.3664 11.5608 23.3474 10.7404 23.0865 10.0436ZM21.6979 11.9424C21.4166 12.9289 20.6691 13.4592 20.1732 13.318C19.6778 13.1767 19.3219 12.3317 19.6032 11.3451C19.8544 10.464 20.4778 9.94706 20.9611 9.94706C21.019 9.94706 21.075 9.95447 21.128 9.96956C21.4487 10.061 21.6126 10.3846 21.6817 10.5695C21.8288 10.9623 21.8347 11.4627 21.6979 11.9424ZM5.8395 10.9338C5.61342 10.1408 5.16445 9.45389 4.57532 8.99943C3.9285 8.5005 3.15792 8.32842 2.46098 8.52703C1.76414 8.72573 1.20014 9.27848 0.913683 10.0436C0.65287 10.7404 0.633699 11.5608 0.859824 12.3537C1.08595 13.1467 1.53487 13.8336 2.124 14.2881C2.59471 14.6512 3.13092 14.8412 3.65667 14.8412C3.85335 14.8412 4.04864 14.8146 4.23839 14.7605C4.93528 14.5617 5.49918 14.009 5.78564 13.2439C6.04645 12.5471 6.06557 11.7267 5.8395 10.9338ZM3.82706 13.3179C3.33145 13.459 2.58365 12.929 2.30231 11.9423C2.16553 11.4627 2.17143 10.9623 2.31848 10.5694C2.38771 10.3846 2.55164 10.0609 2.87226 9.96951C3.36825 9.82837 4.11562 10.3585 4.39696 11.3451C4.67831 12.3317 4.32239 13.1767 3.82706 13.3179Z"/>
						</svg>
					</template>
					<template #iconNo>
						<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_63_7694)">
								<mask id="mask0_63_7694" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
									<path d="M1.5 1.5H22.5V22.5H1.5V1.5Z" fill="white"/>
								</mask>
								<g mask="url(#mask0_63_7694)">
									<path d="M2.32031 2.32031L21.6797 21.6797" stroke="#777777" stroke-width="1.35" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M16.6793 21.0234C16.3153 22.6327 14.6945 20.7759 12 20.7759C8.91928 20.7759 7.24219 23.2031 7.24219 20.1021C7.24219 18.2984 8.10253 15.6576 9.25823 13.7637" stroke="#777777" stroke-width="1.35" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M13.4355 5.76562C13.4355 7.46453 14.3537 8.8418 15.4863 8.8418C16.6189 8.8418 17.5371 7.46453 17.5371 5.76562C17.5371 4.06672 16.6189 2.68945 15.4863 2.68945C14.3537 2.68945 13.4355 4.06672 13.4355 5.76562Z" stroke="#777777" stroke-width="1.35" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M18.1112 11.7592C17.6394 13.1509 18.0099 14.5339 18.9387 14.8481C19.8675 15.1623 21.0029 14.2888 21.4748 12.897C21.9466 11.5053 21.5761 10.1223 20.6473 9.80813C19.7184 9.49391 18.583 10.3674 18.1112 11.7592Z" stroke="#777777" stroke-width="1.35" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M5.88881 11.7592C6.36062 13.1509 5.99012 14.5339 5.06132 14.8481C4.13248 15.1623 2.99705 14.2888 2.52525 12.897C2.05344 11.5053 2.42394 10.1223 3.35274 9.80813C4.28158 9.49391 5.41701 10.3674 5.88881 11.7592Z" stroke="#777777" stroke-width="1.35" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M8.88281 8.81189C9.87949 8.60246 10.6465 7.31839 10.6465 5.76562C10.6465 4.06671 9.72831 2.68945 8.5957 2.68945C7.4631 2.68945 6.54492 4.06671 6.54492 5.76562C6.54492 5.97632 6.55903 6.18205 6.58594 6.38085" stroke="#777777" stroke-width="1.35" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
								</g>
							</g>
							<defs>
							<clipPath id="clip0_63_7694">
							<rect width="21" height="21" fill="white" transform="translate(1.5 1.5)"/>
							</clipPath>
							</defs>
						</svg>
					</template>
				</ToggleButton>
			</div>

			<div>
				<p class="mb-2.5 text-lg">Smoking allowed</p>
				<!-- Toogle -->
        <ToggleButton v-model="smokingAllowed" :name="'smokingAllowed'">
					<template #iconYes>
						<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
						<g clip-path="url(#clip0_63_7716)">
							<path d="M14.8865 9.00916C15.8239 9.00916 16.5866 9.87133 16.5866 10.931H17.8306C17.8306 9.09592 16.5099 7.60291 14.8865 7.60291C13.9491 7.60291 13.1864 6.74073 13.1864 5.68103H11.9424C11.9424 7.51614 13.2631 9.00916 14.8865 9.00916Z" fill="#777777"/>
							<path d="M14.9277 2.02478V3.43103C17.7172 3.43103 19.9866 5.99645 19.9866 9.14978V10.931H21.2306V9.14978C21.2306 5.221 18.4032 2.02478 14.9277 2.02478Z" fill="#777777"/>
							<rect x="0.872308" y="12.8723" width="19.4862" height="3.79385" stroke="#777777" stroke-width="1.74462"/>
							<rect x="16.6797" y="12.9231" width="1.24615" height="3.69231" fill="#777777"/>
						</g>
						<defs>
							<clipPath id="clip0_63_7716">
								<rect width="21.2308" height="24" fill="white"/>
							</clipPath>
						</defs>
					</svg>
					</template>
					<template #iconNo>
						<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
						<g clip-path="url(#clip0_63_7728)">
							<path d="M9.38487 12.3425L5.00109 7.3869L4.12146 8.38126L7.62562 12.3425H0V17.1132H5.92295H11.8459L16.1467 21.975L17.0264 20.9807L13.6052 17.1132H21.2308V12.3425H9.38487ZM10.6289 13.7487H16.6798V15.7069H12.5228H12.3612L10.6289 13.7487ZM1.24399 15.7069V13.7487H8.86961L10.6019 15.7069H1.24399ZM19.9868 15.7069H17.9238V13.7487H19.9868V15.7069Z" fill="#777777"/>
							<path d="M14.8865 9.00916C15.8239 9.00916 16.5866 9.87133 16.5866 10.931H17.8306C17.8306 9.09592 16.5099 7.60291 14.8865 7.60291C13.9491 7.60291 13.1864 6.74073 13.1864 5.68103H11.9424C11.9424 7.51614 13.2631 9.00916 14.8865 9.00916Z" fill="#777777"/>
							<path d="M14.9277 2.02478V3.43103C17.7172 3.43103 19.9866 5.99645 19.9866 9.14978V10.931H21.2306V9.14978C21.2306 5.221 18.4032 2.02478 14.9277 2.02478Z" fill="#777777"/>
						</g>
						<defs>
							<clipPath id="clip0_63_7728">
								<rect width="21.2308" height="24" fill="white"/>
							</clipPath>
						</defs>
					</svg>
					</template>
				</ToggleButton>
			</div>
		</div>

		<!-- Divider -->
		<hr class="h-px mt-10 max-w-200 mx-auto bg-stroke-100 border-0" />

		<div class="mt-10 space-y-5 font-medium max-w-200 mx-auto">
			<h3 class="text-2xl">Amenities</h3>
			<div>
				<p class="mb-2.5 text-lg">Popular Amenities</p>

				<div class="flex items-center gap-2.5 overflow-x-auto p-px no-scrollbar">
					<label
						v-for="item in popular"
						:key="item.label"
						class="whitespace-nowrap"
					>
						<input
							type="checkbox"
							name="popular"
							class="peer sr-only hidden"
							:value="item.value"
						>
						<span class="inline-flex rounded-[90px] py-3 px-2.5 outline outline-stroke-100 bg-white text-gray-100 text-base font-semibold leading-3.75 cursor-pointer peer-checked:bg-black peer-checked:text-white">{{ item.label }}</span>
					</label>
				</div>
			</div>

			<div>
				<p class="mb-2.5 text-lg">Essentials</p>

				<div class="flex items-center gap-2.5 overflow-x-auto p-px no-scrollbar">
					<label
						v-for="item in essentials"
						:key="item.label"
						class="whitespace-nowrap"
					>
						<input
							type="checkbox"
							name="popular"
							class="peer sr-only hidden"
							:value="item.value"
						>
						<span class="inline-flex rounded-[90px] py-3 px-2.5 outline outline-stroke-100 bg-white text-gray-100 text-base font-semibold leading-3.75 cursor-pointer peer-checked:bg-black peer-checked:text-white">{{ item.label }}</span>
					</label>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import ToggleButton from '@/components/ToggleButton.vue'

const petsAllowed = ref(true)
const smokingAllowed = ref(true)

const popular = ([
  {
    label: 'Air conditioning',
    value: 'air conditioning',
  },
  {
    label: 'Free parking',
    value: 'free parking',
  },
  {
    label: 'TV',
    value: 'tv',
  },
  {
    label: 'Kitchen',
    value: 'kitchen',
  },
  {
    label: 'Iron',
    value: 'iron',
  },
  {
    label: 'Hair dryer',
    value: 'hair dryer',
  },
])

const essentials = ([
  {
    label: 'Wi-Fi',
    value: 'wifi',
  },
  {
    label: 'Washer',
    value: 'washer',
  },
  {
    label: 'Dryer',
    value: 'dryer',
  },
  {
    label: 'Heating',
    value: 'heating',
  },
  {
    label: 'Dedicated workspace',
    value: 'dedicated workspace',
  }
])
</script>