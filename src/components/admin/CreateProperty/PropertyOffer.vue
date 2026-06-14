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
						<IconPetsAllowed />
					</template>
					<template #iconNo>
						<IconPetsNotAllowed />
					</template>
				</ToggleButton>
			</div>

			<div>
				<p class="mb-2.5 text-lg">Smoking allowed</p>
				<!-- Toogle -->
				<ToggleButton v-model="smokingAllowed" :name="'smokingAllowed'">
					<template #iconYes>
						<IconSmokingAllowed />
					</template>
					<template #iconNo>
						<IconSmokingNotAllowed />
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

				<div class="flex items-center gap-2.5 flex-wrap">
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
						<span class="inline-flex items-center gap-2.5 rounded-[90px] py-3 px-2.5 outline outline-stroke-100 bg-white text-gray-100 text-base font-semibold leading-3.75 cursor-pointer peer-checked:bg-black peer-checked:text-white">
							<component :is="item.icon" />
							{{ item.label }}
						</span>
					</label>
				</div>
			</div>

			<div>
				<p class="mb-2.5 text-lg">Essentials</p>

				<div class="flex items-center gap-2.5 flex-wrap">
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
						<span class="inline-flex items-center gap-2.5 rounded-[90px] py-3 px-2.5 outline outline-stroke-100 bg-white text-gray-100 text-base font-semibold leading-3.75 cursor-pointer peer-checked:bg-black peer-checked:text-white">
							<component :is="item.icon" />
							{{ item.label }}
						</span>
					</label>
				</div>
			</div>

			<div>
				<p class="mb-2.5 text-lg">Features</p>

				<div class="flex items-center gap-2.5 flex-wrap">
					<label
						v-for="item in features"
						:key="item.label"
						class="whitespace-nowrap"
					>
						<input
							type="checkbox"
							name="popular"
							class="peer sr-only hidden"
							:value="item.value"
						>
						<span class="inline-flex items-center gap-2.5 rounded-[90px] py-3 px-2.5 outline outline-stroke-100 bg-white text-gray-100 text-base font-semibold leading-3.75 cursor-pointer peer-checked:bg-black peer-checked:text-white">
							<component :is="item.icon" />
							{{ item.label }}
						</span>
					</label>
				</div>
			</div>
		</div>

		<!-- Divider -->
		<hr class="h-px mt-10 max-w-200 mx-auto bg-stroke-100 border-0" />

		<div class="mt-10 space-y-5 font-medium max-w-200 mx-auto">
			<h3 class="text-2xl">Safety</h3>

			<div>
				<p class="mb-2.5 text-lg">Smoke alarm</p>
				<!-- Toogle -->
				<ToggleButton v-model="smokeAlarm" :name="'smokeAlaram'">
					<template #iconYes>
						<IconSmokeAlarm />
					</template>
					<template #iconNo>
						<IconSmokeAlarmNot />
					</template>
				</ToggleButton>
			</div>

			<div>
				<p class="mb-2.5 text-lg">Carbon monoxide alarm</p>
				<!-- Toogle -->
				<ToggleButton v-model="monoxideAlarm" :name="'monoxideAlaram'">
					<template #iconYes>
						<IconMonoxideAlarm />
					</template>
					<template #iconNo>
						<IconMonoxideAlarmNot />
					</template>
				</ToggleButton>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import ToggleButton from '@/components/ToggleButton.vue'

// Icons
import IconPetsAllowed from '@/assets/icons/amenities/pets.svg?component'
import IconPetsNotAllowed from '@/assets/icons/amenities/no-pets-allowed.svg?component'
import IconSmokingAllowed from '@/assets/icons/amenities/no-smoke.svg?component'
import IconSmokingNotAllowed from '@/assets/icons/amenities/no-smoke-allowed.svg?component'
import IconSmokeAlarm from '@/assets/icons/amenities/smoke-detector.svg?component'
import IconSmokeAlarmNot from '@/assets/icons/amenities/smoke-detector-no.svg?component'
import IconMonoxideAlarm from '@/assets/icons/amenities/detector.svg?component'
import IconMonoxideAlarmNot from '@/assets/icons/amenities/detector-no.svg?component'

const petsAllowed = ref(true)
const smokingAllowed = ref(true)
const smokeAlarm = ref(true)
const monoxideAlarm = ref(true)

// Icons
import IconAirConditioning from '@/assets/icons/amenities/Air-conditioning.svg?component'
import IconFreeParking from '@/assets/icons/amenities/Free-parking.svg?component'
import IconTV from '@/assets/icons/amenities/TV.svg?component'
import IconKitchen from '@/assets/icons/amenities/Kitchen.svg?component'
import IconIron from '@/assets/icons/amenities/Iron.svg?component'
import IconHairDryer from '@/assets/icons/amenities/Hair-dryer.svg?component'

const popular = ([
  {
	label: 'Air conditioning',
	value: 'air conditioning',
	icon: IconAirConditioning,
  },
  {
	label: 'Free parking',
	value: 'free parking',
	icon: IconFreeParking,
  },
  {
	label: 'TV',
	value: 'tv',
	icon: IconTV,
  },
  {
	label: 'Kitchen',
	value: 'kitchen',
	icon: IconKitchen,
  },
  {
	label: 'Iron',
	value: 'iron',
	icon: IconIron,
  },
  {
	label: 'Hair dryer',
	value: 'hair dryer',
	icon: IconHairDryer,
  },
])

// Icons
import IconWifi from '@/assets/icons/amenities/Wifi.svg?component'
import IconWasher from '@/assets/icons/amenities/Washer.svg?component'
import IconDryer from '@/assets/icons/amenities/Dryer.svg?component'
import IconHeating from '@/assets/icons/amenities/Heating.svg?component'
import IconDedicatedWorkspace from '@/assets/icons/amenities/Dedicated-workspace.svg?component'

const essentials = ([
  {
	label: 'Wi-Fi',
	value: 'wifi',
		icon: IconWifi,
  },
  {
	label: 'Washer',
	value: 'washer',
		icon: IconWasher,
  },
  {
	label: 'Dryer',
	value: 'dryer',
		icon: IconDryer,
  },
  {
	label: 'Heating',
	value: 'heating',
		icon: IconHeating,
  },
  {
	label: 'Dedicated workspace',
	value: 'dedicated workspace',
		icon: IconDedicatedWorkspace,
  }
])

// Icons
import IconPool from '@/assets/icons/amenities/Pool.svg?component'
import IconHotTub from '@/assets/icons/amenities/Hot-tub.svg?component'
import IconEVCharger from '@/assets/icons/amenities/ev-charger.svg?component'
import IconBabyCrib from '@/assets/icons/amenities/Baby-crib.svg?component'
import IconKingBed from '@/assets/icons/amenities/King-bed.svg?component'
import IconGym from '@/assets/icons/amenities/Gym.svg?component'
import IconBreakfast from '@/assets/icons/amenities/Breakfast.svg?component'
import IconIndoorFireplace from '@/assets/icons/amenities/Indoor-fireplace.svg?component'

const features = ([
  {
	label: 'Pool',
	value: 'pool',
		icon: IconPool,
  },
  {
	label: 'Hot tub',
	value: 'hot tub',
		icon: IconHotTub,
  },
  {
	label: 'EV charger',
	value: 'ev charger',
		icon: IconEVCharger,
  },
  {
	label: 'Baby crib',
	value: 'baby crib',
		icon: IconBabyCrib,
  },
  {
	label: 'King bed',
	value: 'king bed',
		icon: IconKingBed,
  },
  {
	label: 'Gym',
	value: 'gym',
		icon: IconGym,
  },
  {
	label: 'Breakfast',
	value: 'breakfast',
		icon: IconBreakfast,
  },
  {
	label: 'Indoor fireplace',
	value: 'indoor fireplace',
		icon: IconIndoorFireplace,
  }
])
</script>