<template>
  <section class="pt-30 md:pt-40 pb-7.5 font-semibold bg-cream bg-process relative">
    <div class="container z-2 relative">
      <!-- Title -->
      <div class="text-center">
			  <h2 class="text-5xl font-semibold mb-5">Find your perfect <br class="max-xs:hidden"> home with ease</h2>
			  <p class="font-medium text-gray-100 mb-10">Explore properties and find your perfect home with expert <br class="max-xs:hidden"> guidance and seamless search.</p>
      </div>

      <!-- Search form -->
      <div class="bg-white border border-stroke-100 rounded-3xl lg:rounded-[90px] max-w-250 mx-auto px-3 max-md:py-3 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-y-1 md:gap-y-5 gap-x-10 lg:gap-10">
        <!-- Where -->
        <div
          class="p-3.75 space-y-1.25 font-medium text-base relative divider last:after:hidden"
          @click="selectWhere"
        >
          <p class="text-gray-100">Where</p>
          <div class="inline-flex gap-2.5 items-center">
            <span>Iceland</span>
            <span class="size-1.5 rounded-full bg-stroke-100"></span>
            <button
              type="button"
              class="text-black cursor-pointer"
            >
              Select city
            </button>
          </div>

          <!-- Dropdown -->
          <SearchFormDropdown
            v-model="whereDropdown"
            @close="whereDropdown = false"
            @click.stop
            class="w-full sm:min-w-125"
          >
            <template #title>
              Where
            </template>

            <template #content>
              <!-- Country -->
              <div class="p-2.5 xs:p-5">
                <p class="font-medium mb-5">Country</p>

                <div class="grid grid-cols-4 gap-2.5">
                  <!-- Country item -->
                  <label
                    v-for="item in country"
                    :key="item.label"
                    :for="item.label"
                    class="cursor-pointer"
                  >
                    <input type="radio" name="country" :id="item.label" :value="item.label" :checked="item.label === 'Iceland'" class="hidden peer sr-only">
                    <span
                      class="flex justify-center items-center flex-col gap-3.75 p-3.75 text-sm xs:text-base text-gray-100 outline outline-stroke-100 rounded-lg peer-checked:bg-gray-200 peer-checked:text-black"
                    >
                      <img :src="item.flag" :alt="item.label" class="h-6">
                      {{ item.label }}
                    </span>
                  </label>
                </div>
              </div>

              <!-- Divider -->
              <div class="border-t border-t-stroke-100"></div>

              <!-- Cities -->
              <div class="p-2.5 xs:p-5">
                <p class="font-medium mb-5">Cities</p>

                <!-- Cities list -->
                <div class="rounded-lg overflow-hidden max-h-119.25 overflow-y-auto">
                  <label
                    v-for="city in cities"
                    :key="city.name"
                    :for="city.name"
                    class="flex gap-2.5 p-3.75 items-center text-gray-100 font-medium leading-5.75 hover:bg-gray-200 cursor-pointer has-checked:bg-gray-200"
                  >
                    <input type="checkbox" name="cities" :value="city.name" :id="city.name" class="hidden peer sr-only">
                    <span class="size-4 rounded-sm bg-white inline-flex justify-center items-center outline outline-gray-300 peer-checked:bg-blue-50 peer-checked:outline-blue-700 [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100">
                      <!-- Icon display when input is checked -->
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="#3398FF" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    <span class="text-black">{{ city.name }}</span>
                    <span>{{ city.properties }} properties</span>
                  </label>
                </div>
              </div>
            </template>
          </SearchFormDropdown>
        </div>

        <!-- When -->
        <div
          class="p-3.75 space-y-1.25 font-medium tetx-base relative divider last:after:hidden lg:after:block after:hidden"
          @click="selectWhen"
        >
          <p class="text-gray-100">When</p>
          <button
            type="button"
            class="text-black cursor-pointer"
          >
            <span v-if="!date">Add dates</span>
            <span v-else class="whitespace-nowrap text-sm">{{ formattedDate }}</span>
          </button>

          <!-- Dropdown -->
          <SearchFormDropdown
            v-model="whenDropdown"
            @close="whenDropdown = false"
            @click.stop
            class="w-full md:min-w-210 left-0 md:-left-full! max-mg:right-0"
          >
            <template #title>
              When
            </template>

            <template #content>
              <div class="max-lg:p-5">
              <VueDatePicker
                v-model="date"
                range
                :multi-calendars="isDesktop"
                :inline="isDesktop"
                auto-apply
                :time-config="{ enableTimePicker: false }"
              >
                <template #month-year="{ month, year, months, handleMonthYearChange, instance }">
                  <div class="custom-header w-full text-center mb-5 relative">
                    <button v-if="instance === 0" @click="handleMonthYearChange(false)" class="absolute left-0 cursor-pointer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 17L10 12L14 7" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>

                    <!-- Month and year label -->
                    <span class="month-label text-center text-lg font-semibold">{{ months[month]?.text }} {{ year }}</span>

                    <button v-if="instance === 0" v-show="!isDesktop" @click="handleMonthYearChange(true)" class="absolute right-0 cursor-pointer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 7L14 12L10 17" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>

                    <button v-if="instance === 1" @click="handleMonthYearChange(true)" class="absolute right-0 cursor-pointer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 7L14 12L10 17" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </template>

                <template #calendar-header="{ day }">
                  <div class="h-5 text-gray-100 text-sm font-medium">
                    {{ day }}
                  </div>
                </template>
              </VueDatePicker>
              </div>
            </template>
          </SearchFormDropdown>
        </div>

        <!-- Who -->
        <div
          class="p-3.75 space-y-1.25 font-medium tetx-base relative divider last:after:hidden"
          @click="selectGuests"
        >
          <p class="text-gray-100">Who</p>
          <button
            type="button"
            class="text-black cursor-pointer"
          >
            Add guests
          </button>

          <!-- Dropdown -->
          <SearchFormDropdown
            v-model="guestsDropdown"
            @close="guestsDropdown = false"
            @click.stop
            class="w-full xs:min-w-100"
          >
            <template #title>
              Who
            </template>

            <template #content>
              <div class="p-5 space-y-5">
                <!-- Guests -->
                <div class="flex justify-between items-center">
                  Guests
                  <Counter v-model="guests" :max="20" />
                </div>

                <!-- Bedrooms -->
                <div class="flex justify-between items-center">
                  Bedrooms
                  <Counter v-model="bedrooms" :max="5" />
                </div>

                <!-- Bathrooms -->
                <div class="flex justify-between items-center">
                  Bathrooms
                  <Counter v-model="bathrooms" :max="3" />
                </div>
              </div>
            </template>
          </SearchFormDropdown>
        </div>

        <!-- Action -->
        <div class="inline-flex gap-2.5">
          <Button
            as="button"
            variant="secondary"
            class="max-lg:justify-center max-lg:flex-1"
            @click="openAllFilters = true"
          >
						Filters

            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 15L8.33333 15" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.5 10L10 10" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.8335 10H17.5002" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.6665 15H17.4998" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.8335 5L16.6668 5" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.5 5H5" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <ellipse cx="1.66667" cy="1.66667" rx="1.66667" ry="1.66667" transform="matrix(1 0 0 -1 5 6.66669)" stroke="#1E1E1E" stroke-width="1.5"/>
              <ellipse cx="1.66667" cy="1.66667" rx="1.66667" ry="1.66667" transform="matrix(1 0 0 -1 12.5 11.6667)" stroke="#1E1E1E" stroke-width="1.5"/>
              <ellipse cx="1.66667" cy="1.66667" rx="1.66667" ry="1.66667" transform="matrix(1 0 0 -1 8.3335 16.6667)" stroke="#1E1E1E" stroke-width="1.5"/>
            </svg>
					</Button>

					<Button as="button" variant="primary" class="flex max-lg:justify-center max-lg:flex-1">
						Search

            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4165 15.4167L18.3332 18.3333M9.58317 17.5C5.21092 17.5 1.6665 13.9556 1.6665 9.58335C1.6665 5.2111 5.21092 1.66669 9.58317 1.66669C13.9554 1.66669 17.4998 5.2111 17.4998 9.58335C17.4998 13.9556 13.9554 17.5 9.58317 17.5Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
					</Button>
        </div>
      </div>
    </div>
  </section>

  <!-- List view -->
  <PropertiesListView
    v-if="viewType === 'list'"
    :apartments="apartments"
  />

  <!-- Map view -->
  <PropertiesMapView
    v-if="viewType === 'map'"
    :apartments="apartments"
  />

  <!-- Fixed button at button for switch between list/map view -->
  <Button
    as="button"
    variant="primary"
    size="xl"
    class="fixed bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
    :class="viewType == 'list' ? 'z-1' : 'z-999'"
    @click="toggleView"
  >
    Switch to {{ viewLabels[viewType] }} view

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 7L14 12L10 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </Button>

  <!-- All filters modal -->
  <div
    class="fixed w-full h-full inset-0 bg-dark/20 flex flex-col justify-center items-center z-20 px-4 py-[5%]"
    v-show="openAllFilters"
    @click="openAllFilters = false"
  >
    <div
      class="bg-white border border-stroke-100 w-full overflow-hidden max-w-250 pb-28 relative rounded-lg"
      @click.stop
    >
      <div class="bg-gray-200 p-3.75 border-b border-b-stroke-100 flex justify-between font-medium text-base">
				Filters

				<!-- Close button -->
				<button
					type="button"
					class="cursor-pointer"
					@click="openAllFilters = false"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7123 16.7729C16.0052 17.0658 16.4801 17.0658 16.7729 16.7729C17.0658 16.48 17.0658 16.0052 16.7729 15.7123L13.0607 12L16.7729 8.2877C17.0658 7.99481 17.0658 7.51993 16.7729 7.22704C16.48 6.93415 16.0052 6.93415 15.7123 7.22704L12 10.9393L8.28766 7.22699C7.99477 6.9341 7.5199 6.9341 7.227 7.22699C6.93411 7.51989 6.93411 7.99476 7.227 8.28765L10.9393 12L7.22699 15.7123C6.9341 16.0052 6.9341 16.4801 7.22699 16.773C7.51989 17.0659 7.99476 17.0659 8.28765 16.773L12 13.0606L15.7123 16.7729Z" fill="#1E1E1E"/>
					</svg>
				</button>
			</div>

      <!-- Content -->
      <div class="h-full overflow-y-auto">
        <!-- Price range -->
        <div class="px-5 py-8.75 space-y-5 not-last:border-b not-last:border-b-stroke-100">
          <p class="font-semibold text-lg">Price range</p>

          <Slider
            v-model="priceRange"
            :min="1000"
            :max="2000"
            :range="true"
            :tooltips="false"
          />
          
          <!-- Min & Max -->
          <div class="flex justify-between items-center">
            <span class="inline-flex outline outline-stroke-100 rounded-[90px] p-3 gap-2.5 text-gray-100 font-medium">
              Min
              <b class="text-black font-medium">${{ priceRange[0].toLocaleString() }}</b>
            </span>

            <span class="inline-flex outline outline-stroke-100 rounded-[90px] p-3 gap-2.5 text-gray-100 font-medium">
              Max
              <b class="text-black font-medium">${{ priceRange[1].toLocaleString() }}</b>
            </span>
          </div>
        </div>

        <!-- Size -->
        <div class="px-5 py-8.75 space-y-5 not-last:border-b not-last:border-b-stroke-100">
          <p class="font-semibold text-lg">Size <span class="text-gray-100">(sq ft)</span></p>

          <Slider
            v-model="sizeRange"
            :min="100"
            :max="1500"
            :range="true"
            :tooltips="false"
          />
          
          <!-- Min & Max -->
          <div class="flex justify-between items-center">
            <span class="inline-flex outline outline-stroke-100 rounded-[90px] p-3 gap-2.5 text-gray-100 font-medium">
              Min
              <b class="text-black font-medium">{{ sizeRange[0].toLocaleString() }} sq ft</b>
            </span>

            <span class="inline-flex outline outline-stroke-100 rounded-[90px] p-3 gap-2.5 text-gray-100 font-medium">
              Max
              <b class="text-black font-medium">{{ sizeRange[1].toLocaleString() }} sq ft</b>
            </span>
          </div>
        </div>

        <!-- Smoking -->
        <div class="px-5 py-8.75 space-y-5 not-last:border-b not-last:border-b-stroke-100">
          <p class="font-semibold text-lg">Smoking allowed</p>

          <!-- Toogle -->
          <ToggleButton v-model="smokingAllowed" :name="'smokingAllowed'" />
        </div>

        <!-- Pets -->
        <div class="px-5 py-8.75 space-y-5 not-last:border-b not-last:border-b-stroke-100">
          <p class="font-semibold text-lg">Pets allowed</p>

          <!-- Toogle -->
          <ToggleButton v-model="petsAllowed" :name="'petsAllowed'" />
        </div>

        <!-- Amenities -->
        <div class="px-5 py-8.75 space-y-5 not-last:border-b not-last:border-b-stroke-100">
          <p class="font-semibold text-lg">Amenities</p>

          <div class="space-y-2.5">
            <p class="text-base">Popular</p>

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
                <span class="inline-flex rounded-[90px] py-3 px-2.5 outline outline-stroke-100 bg-white text-gray-100 text-sm font-semibold leading-3.75 cursor-pointer peer-checked:bg-black peer-checked:text-white">{{ item.label }}</span>
              </label>
            </div>
          </div>

          <div class="space-y-2.5">
            <p class="text-base">Essentials</p>

            <div class="flex items-center gap-2.5 overflow-x-auto p-px no-scrollbar">
              <label
                v-for="item in essentials"
                :key="item.label"
                class="whitespace-nowrap"
              >
                <input
                  type="checkbox"
                  name="essentials"
                  class="peer sr-only hidden"
                  :value="item.value"
                >
                <span class="inline-flex rounded-[90px] py-3 px-2.5 outline outline-stroke-100 bg-white text-gray-100 text-sm font-semibold leading-3.75 cursor-pointer peer-checked:bg-black peer-checked:text-white">{{ item.label }}</span>
              </label>
            </div>
          </div>

          <div class="space-y-2.5">
            <p class="text-base">Features</p>

            <div class="flex items-center gap-2.5 overflow-x-auto p-px no-scrollbar">
              <label
                v-for="item in features"
                :key="item.label"
                class="whitespace-nowrap"
              >
                <input
                  type="checkbox"
                  name="features"
                  class="peer sr-only hidden"
                  :value="item.value"
                >
                <span class="inline-flex rounded-[90px] py-3 px-2.5 outline outline-stroke-100 bg-white text-gray-100 text-sm font-semibold leading-3.75 cursor-pointer peer-checked:bg-black peer-checked:text-white">{{ item.label }}</span>
              </label>
            </div>
          </div>

          <div class="space-y-2.5">
            <p class="text-base">Safety</p>

            <div class="flex items-center gap-2.5 overflow-x-auto p-px no-scrollbar">
              <label
                v-for="item in safety"
                :key="item.label"
                class="whitespace-nowrap"
              >
                <input
                  type="checkbox"
                  name="safety"
                  class="peer sr-only hidden"
                  :value="item.value"
                >
                <span class="inline-flex rounded-[90px] py-3 px-2.5 outline outline-stroke-100 bg-white text-gray-100 text-sm font-semibold leading-3.75 cursor-pointer peer-checked:bg-black peer-checked:text-white">{{ item.label }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="px-5 py-8.75 space-y-5 not-last:border-b not-last:border-b-stroke-100">
          <p class="font-semibold text-lg">Accessibility features</p>

          <div class="space-y-3.75">
            <p class="text-base">Guest entrance and parking</p>

            <div class="flex flex-col items-start gap-3.75">
              <label
                v-for="item in guestsEntrance"
                :key="item.label"
                class="flex gap-2.5 items-center text-gray-100 font-medium text-sm leading-5 cursor-pointer"
              >
                <input type="checkbox" name="guests_entrance" :value="item.label" class="hidden peer sr-only">
                <span class="size-4 rounded-sm bg-white inline-flex justify-center items-center outline outline-gray-300 peer-checked:bg-blue-50 peer-checked:outline-blue-700 [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100">
                  <!-- Icon display when input is checked -->
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#3398FF" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span>{{ item.label }}</span>
              </label>
            </div>
          </div>

          <div class="space-y-3.75">
            <p class="text-base">Bedroom</p>

            <div class="flex flex-col items-start gap-3.75">
              <label
                v-for="item in bedroomFeatures"
                :key="item.label"
                class="flex gap-2.5 items-center text-gray-100 font-medium text-sm leading-5 cursor-pointer"
              >
                <input type="checkbox" name="bedroom_features" :value="item.label" class="hidden peer sr-only">
                <span class="size-4 rounded-sm bg-white inline-flex justify-center items-center outline outline-gray-300 peer-checked:bg-blue-50 peer-checked:outline-blue-700 [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100">
                  <!-- Icon display when input is checked -->
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#3398FF" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span>{{ item.label }}</span>
              </label>
            </div>
          </div>

          <div class="space-y-3.75">
            <p class="text-base">Bathroom</p>

            <div class="flex flex-col items-start gap-3.75">
              <label
                v-for="item in bathroomFeatures"
                :key="item.label"
                class="flex gap-2.5 items-center text-gray-100 font-medium text-sm leading-5 cursor-pointer"
              >
                <input type="checkbox" name="bathroom_features" :value="item.label" class="hidden peer sr-only">
                <span class="size-4 rounded-sm bg-white inline-flex justify-center items-center outline outline-gray-300 peer-checked:bg-blue-50 peer-checked:outline-blue-700 [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100">
                  <!-- Icon display when input is checked -->
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#3398FF" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span>{{ item.label }}</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="border-t border-t-stroke-100 p-2.5 bg-white w-full absolute bottom-0 left-0 flex">
        <Button
          as="button"
          variant="primary"
          class="ml-auto"
          @click="openAllFilters = false"
        >
          Show 24 properties
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref , computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import Button from '@/components/Button.vue'

import { VueDatePicker } from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

import SearchFormDropdown from '@/components/SearchFormDropdown.vue'
import Counter from '@/components/Counter.vue'

import Slider from '@vueform/slider'
import '@vueform/slider/themes/default.css'
import ToggleButton from '@/components/ToggleButton.vue'

import PropertiesListView from '@/components/PropertiesListView.vue'
import PropertiesMapView from '@/components/PropertiesMapView.vue'

// Toogle the view list/map
const viewLabels = {
  list: 'map',
  map: 'list'
}

const viewType = ref('list')

const toggleView = () => {
  viewType.value = viewType.value === 'list' ? 'map' : 'list'
}

const apartments = ref([
  {
    id: 1,
    name: 'Northern Ember Villa',
    priceFrom: 2600,
    priceTo: null,
    guests: 7,
    bedrooms: 7,
    area: 1200,
    image: '/properties/1.webp',
    lat: 64.1355,
    lng: -21.8954
  },
  {
    id: 2,
    name: 'Skálavík Glass Retreat',
    priceFrom: 900,
    priceTo: 1200,
    guests: 7,
    bedrooms: 4,
    area: 1000,
    image: '/properties/2.webp',
    lat: 64.0669,
    lng: -21.9403
  },
  {
    id: 3,
    name: 'Reykjavík Fjord Residence',
    priceFrom: 800,
    priceTo: 1400,
    guests: 7,
    bedrooms: 10,
    area: 1200,
    image: '/properties/3.webp',
    lat: 63.9179,
    lng: -22.6823
  },
  {
    id: 4,
    name: 'Úlfljótsskáli Luxury Lodge',
    priceFrom: 900,
    priceTo: 1400,
    guests: 8,
    bedrooms: 4,
    area: 2000,
    image: '/properties/4.webp',
    lat: 65.6885,
    lng: -18.1059
  },
  {
    id: 5,
    name: 'Hof Luxury Villa',
    priceFrom: 1200,
    priceTo: 2000,
    guests: 10,
    bedrooms: 5,
    area: 3200,
    image: '/properties/5.webp',
    lat: 64.0837,
    lng: -21.9241
  },
  {
    id: 6,
    name: 'SJF Villa',
    priceFrom: 536,
    priceTo: 1000,
    guests: 6,
    bedrooms: 4,
    area: 2400,
    image: '/properties/6.webp',
    lat: 64.1659,
    lng: -21.6938
  },
  {
    id: 7,
    name: 'The Lakehouse',
    priceFrom: 1000,
    priceTo: 1800,
    guests: 8,
    bedrooms: 4,
    area: 1830,
    image: '/properties/7.webp',
    lat: 64.3236,
    lng: -22.0702
  },
  {
    id: 8,
    name: 'Fish Creek Villa',
    priceFrom: 3000,
    priceTo: 5000,
    guests: 12,
    bedrooms: 8,
    area: 4300,
    areaLabel: '4,300+ sq ft',
    image: '/properties/8.webp',
    lat: 63.9330,
    lng: -20.9977
  },
  {
    id: 9,
    name: 'Kleif Farm',
    priceFrom: 3250,
    priceTo: null,
    guests: 10,
    bedrooms: 5,
    area: 3550,
    image: '/properties/9.webp',
    lat: 66.0757,
    lng: -23.1353
  },
  {
    id: 10,
    name: 'Historic Villa in Downtown Reykjavík',
    priceFrom: 850,
    priceTo: 1500,
    guests: 10,
    bedrooms: 8,
    area: 2800,
    image: '/properties/10.webp',
    lat: 64.1120,
    lng: -21.9129
  },
  {
    id: 11,
    name: 'Luxurious Villa in Reykjavík',
    priceFrom: 900,
    priceTo: 1700,
    guests: 10,
    bedrooms: 5,
    area: 1500,
    image: '/properties/11.webp',
    lat: 64.1583,
    lng: -22.0000
  },
  {
    id: 12,
    name: 'Big Luxury Two Story Villa',
    priceFrom: 700,
    priceTo: 1300,
    guests: 10,
    bedrooms: 6,
    area: 2906,
    image: '/properties/12.webp',
    lat: 64.0973,
    lng: -22.0538
  }
])


// Dropdown 'Where'
const whereDropdown = ref(false)
const selectWhere = () => {
  whereDropdown.value = !whereDropdown.value
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

const cities = [
  { id: 1, name: 'Reykjavík',     properties: 10 },
  { id: 2, name: 'Hafnarfjörður', properties: 8  },
  { id: 3, name: 'Reykjanesbær', properties: 6  },
  { id: 4, name: 'Akureyri',      properties: 3  },
  { id: 5, name: 'Garðabær',      properties: 6  },
  { id: 6, name: 'Mosfellsbær',   properties: 7  },
  { id: 7, name: 'Akranes',       properties: 2  },
  { id: 8, name: 'Selfoss',       properties: 1  },
  { id: 9, name: 'Ísafjörður',    properties: 4  },
  { id: 10, name: 'Additional city',    properties: 4  },
  { id: 11, name: 'For display scrollbar',    properties: 4  },
  { id: 11, name: 'When list has a lot items',    properties: 4  },
]

// When dropdown (select date)
const whenDropdown = ref(false)
const date = ref(null)
const { width } = useWindowSize()
const isDesktop = computed(() => width.value >= 1024)

const selectWhen = () => {
  whenDropdown.value = !whenDropdown.value
}

const formattedDate = computed(() => {
  if (!date.value || !date.value[0]) return ''
  
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  
  const start = new Date(date.value[0]).toLocaleDateString('en-US', options)
  const end = date.value[1] 
    ? new Date(date.value[1]).toLocaleDateString('en-US', options) 
    : ''
  
  return end ? `${start} — ${end}` : start
})

// Guests and rooms drodown
const guestsDropdown = ref(false)
const selectGuests = () => {
  guestsDropdown.value = !guestsDropdown.value
}

const guests = ref(1)
const bedrooms = ref(1)
const bathrooms = ref(1)

// All filters
const openAllFilters = ref(false)

const priceRange = ref([1000, 2000])
const sizeRange = ref([100, 1500])

// Other filters
const smokingAllowed = ref(true)
const petsAllowed = ref(true)
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

const features = ([
  {
    label: 'Pool',
    value: 'pool',
  },
  {
    label: 'Hot tub',
    value: 'hot tub',
  },
  {
    label: 'EV charger',
    value: 'ev charger',
  },
  {
    label: 'Baby crib',
    value: 'baby crib',
  },
  {
    label: 'King bed',
    value: 'king bed',
  },
  {
    label: 'Gym',
    value: 'gym',
  },
  {
    label: 'Breakfast',
    value: 'breakfast',
  },
  {
    label: 'Indoor fireplace',
    value: 'indoor fireplace',
  }
])

const safety = ([
  {
    label: 'Smoke alarm',
    value: 'smoke alarm',
  },
  {
    label: 'Carbon monoxide alarm',
    value: 'carbon monoxide alarm',
  }
])

const guestsEntrance = ([
  { label: 'Step-free access' },
  { label: 'Disabled parking spot' },
  { label: 'Guest entrance wider than 32 inches' }
])

const bedroomFeatures = ([
  { label: 'Step-free access' },
  { label: 'Guest entrance wider than 32 inches' }
])

const bathroomFeatures = ([
  { label: 'Step-free access' },
  { label: 'Disabled parking spot' },
  { label: 'Guest entrance wider than 32 inches' },
  { label: 'Toilet grab bar' },
  { label: 'Shower grab bar' },
  { label: 'Step-free shower' },
  { label: 'Shower or bath chair' },
])
</script>

<style scoped>
/* Calendar styling */
:deep(.dp--theme-light) {
  --dp-font-family: "Mona Sans", sans-serif;
  /* --dp-menu-min-width: 800px; */
  --dp-border-color: #fff;
  --dp-menu-border-color: #fff;
  --dp-menu-padding: 24px;
  --dp-cell-padding: 0;
  --dp-font-size: 14px;
  --dp-two-calendars-spacing: 24px;
  --dp-row-margin: 4px 0px;
  /* --dp-text-color: #777777; */
  --dp-secondary-color: rgba(30, 30, 30, 0.2);

  --dp-primary-color: #1E1E1E;
  --dp-primary-text-color: #ffffff;
  --dp-border-radius: 8px;
  --dp-cell-border-radius: 50%;
  --dp-range-between-dates-background-color: #f5f3ef;

	--dp-cell-size: 30px;
	--dp-button-height: 30px;
}

:deep(.dp--input) {
  border: 1px solid #E5E5E5;
}

@media screen and (min-width: 1024px) {
  :deep(.dp--theme-light) {
    --dp-menu-min-width: 800px;
  }

  :deep(.dp--cell-inner) {
    width: 100%;
  }

  :deep(.dp--range-border-start) {
    border-radius: 16px 0 0 16px;
  }

  :deep(.dp--range-border-end) {
    border-radius: 0 16px 16px 0;
  }

  :deep(.dp--today) {
    border-radius: 16px;
  }

  :deep(.dp--today.dp--range-border-start) {
    border-radius: 16px 0 0 16px;
  }

  :deep(.dp--today.dp--range-border-end) {
    border-radius: 0 16px 16px 0;
  }

  :deep(.dp--today.dp--range-border-end.dp--range-border-end) {
    border-radius: 16px;
  }
}

/* Size range styling */
.slider-horizontal {
  --slider-height: 10px;
  --slider-bg: rgba(0, 117, 222, 0.2);
  --slider-connect-bg: rgba(0, 117, 222, 0.7);
  --slider-handle-width: 17px;
  --slider-handle-height: 17px;
  --slider-handle-bg: #F1EFEE;
  --slider-handle-shadow: none;
}
</style>