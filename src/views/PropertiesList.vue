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
          class="p-3.75 space-y-1.25 font-medium tetx-base relative divider last:after:hidden"
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
            class="min-w-125"
          >
            <template #title>
              Where
            </template>

            <template #content>
              <!-- Country -->
              <div class="p-5">
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
                      class="flex justify-center items-center flex-col gap-3.75 p-3.75 text-gray-100 outline outline-stroke-100 rounded-lg peer-checked:bg-gray-200 peer-checked:text-black"
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
              <div class="p-5">
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
            Add dates
          </button>

          <!-- Dropdown -->
          <SearchFormDropdown
            v-model="whenDropdown"
            @close="whenDropdown = false"
            @click.stop
            class="min-w-210 -left-full!"
          >
            <template #title>
              When
            </template>

            <template #content>
              <VueDatePicker
                v-model="date"
                range
                multi-calendars
                inline
                auto-apply
                :time-config="{ enableTimePicker: false }"
              >
                <template #month-year="{ month, year, months, handleMonthYearChange }">
                  <div class="custom-header w-full text-center mb-5 relative">
                    <button @click="handleMonthYearChange(false)" class="absolute left-0 cursor-pointer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 17L10 12L14 7" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>

                    <!-- Month and year label -->
                    <span class="month-label text-center text-lg font-semibold">{{ months[month]?.text }} {{ year }}</span>
                  </div>
                </template>

                <template #calendar-header="{ day }">
                  <div class="h-5 text-gray-100 text-sm font-medium">
                    {{ day }}
                  </div>
                </template>
              </VueDatePicker>
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
            class="min-w-100"
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
          <Button as="button" variant="secondary" class="max-lg:justify-center max-lg:flex-1">
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
  <div class="max-w-323 mx-auto mt-7.5 px-4 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
    <!-- Properties -->
    <div
      class="rounded-lg p-5 relative aspect-square flex flex-col justify-end items-start text-white overflow-hidden"
      v-for="item in visibleApartments"
      :key="item.id"
    >
      <img :src="item.image" :alt="item.title" class="absolute inset-0 object-cover h-full w-full">
      <!-- Details -->
      <div class="relative w-full z-1">
        <h3 class="font-semibold text-xl mb-2.5">{{ item.name }}</h3>
        <p class="font-medium text-lg">Starting from ${{ item.priceFrom }}<span v-if="item.priceTo !== null">-{{ item.priceTo }}</span></p>
        <!-- Additional info -->
        <div class="mt-3.75 pt-3.75 border-t border-stroke-100 flex gap-2.5">
          <div class="rounded-[90px] border border-white/20 p-2.5 inline-flex gap-2.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="10" cy="13.75" rx="5" ry="2.08333" stroke="white" stroke-width="1.25" stroke-linejoin="round"/>
              <circle cx="10" cy="6.66663" r="2.5" stroke="white" stroke-width="1.25" stroke-linejoin="round"/>
              <path d="M5.37378 11.0513C4.61416 11.4633 4.02847 11.9754 3.68335 12.5503C3.47768 12.6052 3.28854 12.667 3.1189 12.7349C2.78582 12.8681 2.55789 13.0113 2.42358 13.1382C2.29286 13.2618 2.29175 13.3285 2.29175 13.3335C2.29177 13.3393 2.29397 13.4052 2.42358 13.5278C2.55783 13.6548 2.78572 13.7978 3.1189 13.9312C3.19299 13.9608 3.27103 13.9888 3.35229 14.0161C3.4179 14.542 3.67507 15.0371 4.08667 15.481C3.55695 15.3902 3.07186 15.259 2.65503 15.0923C2.23459 14.9241 1.85252 14.7077 1.56519 14.436C1.2766 14.1631 1.04186 13.7906 1.04175 13.3335C1.04182 12.8762 1.27653 12.503 1.56519 12.23C1.85248 11.9585 2.23473 11.7428 2.65503 11.5747C3.39154 11.2801 4.34077 11.0941 5.37378 11.0513Z" fill="white"/>
              <path d="M14.6265 11.0513C15.6594 11.0941 16.6087 11.2801 17.3452 11.5747C17.7657 11.7429 18.1487 11.9583 18.436 12.23C18.7247 12.503 18.9584 12.8763 18.9585 13.3335C18.9584 13.7905 18.7245 14.1631 18.436 14.436C18.1487 14.7077 17.7657 14.9241 17.3452 15.0923C16.9282 15.2591 16.4425 15.3902 15.9126 15.481C16.3244 15.037 16.5813 14.5421 16.647 14.0161C16.7284 13.9887 16.8071 13.9609 16.8813 13.9312C17.2144 13.7979 17.4424 13.6547 17.5767 13.5278C17.7061 13.4053 17.7085 13.3393 17.7085 13.3335C17.7085 13.3285 17.7073 13.2618 17.5767 13.1382C17.4423 13.0113 17.2144 12.8681 16.8813 12.7349C16.7115 12.6669 16.5218 12.6053 16.3159 12.5503C15.9708 11.9755 15.3859 11.4632 14.6265 11.0513Z" fill="white"/>
              <path d="M14.1665 5.20837C15.432 5.20855 16.4575 6.23482 16.4575 7.50037C16.4573 8.76576 15.4319 9.79121 14.1665 9.79138C13.7619 9.79131 13.3822 9.68542 13.0522 9.50134C13.3382 9.19356 13.5781 8.84282 13.7612 8.45935C13.8858 8.51204 14.0227 8.54133 14.1665 8.54138C14.7415 8.54121 15.2073 8.0754 15.2075 7.50037C15.2075 6.92518 14.7417 6.45855 14.1665 6.45837C14.1649 6.45837 14.1632 6.45837 14.1616 6.45837C14.1403 6.02585 14.052 5.61101 13.9087 5.22302C13.9933 5.21353 14.0793 5.20839 14.1665 5.20837Z" fill="white"/>
              <path d="M5.83374 5.20837C5.92058 5.20839 6.00625 5.2136 6.09058 5.22302C5.94727 5.61095 5.85894 6.02593 5.83765 6.45837C5.83634 6.45837 5.83504 6.45837 5.83374 6.45837C5.25844 6.45837 4.79175 6.92507 4.79175 7.50037C4.79192 8.07551 5.25855 8.54138 5.83374 8.54138C5.9769 8.54134 6.11294 8.51161 6.23706 8.45935C6.42012 8.84292 6.66104 9.19347 6.94702 9.50134C6.61727 9.68519 6.23814 9.79133 5.83374 9.79138C4.5682 9.79138 3.54192 8.76587 3.54175 7.50037C3.54175 6.23471 4.56809 5.20837 5.83374 5.20837Z" fill="white"/>
            </svg>
            {{ item.guests }}
          </div>

          <div class="rounded-[90px] border border-white/20 p-2.5 inline-flex gap-2.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.1429 8.57141H8.57143C8.57143 7.81365 8.27041 7.08692 7.73459 6.55111C7.19877 6.01529 6.47205 5.71427 5.71429 5.71427H2.85714C2.3536 5.71638 1.86 5.85459 1.42857 6.11427V4.2857C1.42857 4.09626 1.35332 3.91458 1.21936 3.78062C1.08541 3.64667 0.903726 3.57141 0.714286 3.57141C0.524845 3.57141 0.343164 3.64667 0.209209 3.78062C0.0752549 3.91458 0 4.09626 0 4.2857V15.7143C0 15.9037 0.0752549 16.0854 0.209209 16.2193C0.343164 16.3533 0.524845 16.4286 0.714286 16.4286C0.903726 16.4286 1.08541 16.3533 1.21936 16.2193C1.35332 16.0854 1.42857 15.9037 1.42857 15.7143V14.2857H18.5714V15.7143C18.5714 15.9037 18.6467 16.0854 18.7806 16.2193C18.9146 16.3533 19.0963 16.4286 19.2857 16.4286C19.4752 16.4286 19.6568 16.3533 19.7908 16.2193C19.9247 16.0854 20 15.9037 20 15.7143V11.4286C20 10.6708 19.699 9.94407 19.1632 9.40825C18.6273 8.87243 17.9006 8.57141 17.1429 8.57141ZM2.85714 7.14284H5.71429C6.09317 7.14284 6.45653 7.29335 6.72444 7.56126C6.99235 7.82917 7.14286 8.19253 7.14286 8.57141H1.42857C1.42857 8.19253 1.57908 7.82917 1.84699 7.56126C2.1149 7.29335 2.47826 7.14284 2.85714 7.14284ZM1.42857 12.8571V9.99998H17.1429C17.5217 9.99998 17.8851 10.1505 18.153 10.4184C18.4209 10.6863 18.5714 11.0497 18.5714 11.4286V12.8571H1.42857Z" fill="white"/>
            </svg>
            {{ item.bedrooms }}
          </div>

          <div class="rounded-[90px] border border-white/20 p-2.5 inline-flex gap-2.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3401 6.66663V13.3333M4.03686 6.66663V13.3333M12.918 15.8333H6.45898M12.918 4.16663L6.45898 4.16663M3.22949 6.66663H4.84424C5.73604 6.66663 6.45898 5.92043 6.45898 4.99996V3.33329C6.45898 2.41282 5.73604 1.66663 4.84424 1.66663H3.22949C2.33769 1.66663 1.61475 2.41282 1.61475 3.33329V4.99996C1.61475 5.92043 2.33769 6.66663 3.22949 6.66663ZM14.5327 6.66663H16.1475C17.0393 6.66663 17.7622 5.92043 17.7622 4.99996V3.33329C17.7622 2.41282 17.0393 1.66663 16.1475 1.66663H14.5327C13.6409 1.66663 12.918 2.41282 12.918 3.33329V4.99996C12.918 5.92043 13.6409 6.66663 14.5327 6.66663ZM3.22949 18.3333H4.84424C5.73604 18.3333 6.45898 17.5871 6.45898 16.6666V15C6.45898 14.0795 5.73604 13.3333 4.84424 13.3333H3.22949C2.33769 13.3333 1.61475 14.0795 1.61475 15V16.6666C1.61475 17.5871 2.33769 18.3333 3.22949 18.3333ZM14.5327 18.3333H16.1475C17.0393 18.3333 17.7622 17.5871 17.7622 16.6666V15C17.7622 14.0795 17.0393 13.3333 16.1475 13.3333H14.5327C13.6409 13.3333 12.918 14.0795 12.918 15V16.6666C12.918 17.5871 13.6409 18.3333 14.5327 18.3333Z" stroke="white" stroke-width="1.25" stroke-linecap="round"/>
            </svg>
            {{ item.area }}
          </div>
        </div>
      </div>

      <!-- Blur effect at the bottom -->
      <div class="progressive-blur bg-dark/20 absolute left-0 bottom-0 w-full h-1/2"></div>
    </div>
  </div>

  <!-- Sentinel + Loading -->
  <div ref="sentinel" class="pb-17.5 flex justify-center">
    <!-- Loading -->
    <div
      v-if="isLoading"
      class="inline-flex p-3 items-center gap-3.75 rounded-[90px] text-black font-semibold border border-stroke-100 bg-white"
    >
      Loading properties
      <!-- Icon -->
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="animate-spin" xmlns="http://www.w3.org/2000/svg">
        <ellipse opacity="0.4" cx="1.66667" cy="1.66667" rx="1.66667" ry="1.66667" transform="matrix(1 0 0 -1 8.33325 18.3333)" fill="#1E1E1E"/>
        <ellipse opacity="0.4" cx="1.66667" cy="1.66667" rx="1.66667" ry="1.66667" transform="matrix(1 0 0 -1 8.33325 5)" fill="#1E1E1E"/>
        <ellipse cx="1.66667" cy="1.66667" rx="1.66667" ry="1.66667" transform="matrix(0.5 -0.866025 -0.866025 -0.5 16.3833 15.6099)" fill="#1E1E1E"/>
        <ellipse opacity="0.4" cx="1.66667" cy="1.66667" rx="1.66667" ry="1.66667" transform="matrix(0.5 -0.866025 -0.866025 -0.5 4.83643 8.94336)" fill="#1E1E1E"/>
        <ellipse opacity="0.4" cx="1.66667" cy="1.66667" rx="1.66667" ry="1.66667" transform="matrix(-0.5 -0.866025 -0.866025 0.5 18.05 7.27661)" fill="#1E1E1E"/>
        <ellipse opacity="0.4" cx="1.66667" cy="1.66667" rx="1.66667" ry="1.66667" transform="matrix(-0.5 -0.866025 -0.866025 0.5 6.50317 13.9434)" fill="#1E1E1E"/>
      </svg>
    </div>

    <!-- End -->
    <!--<p
      v-else-if="!hasMore"
      class="text-sm text-[--color-text-muted]"
    >
      All properties shown
    </p>-->

  </div>

  <!-- Fixed button at button for switch between list/map view -->
  <Button
    as="button"
    variant="primary"
    size="xl"
    class="fixed bottom-10 left-1/2 -translate-x-1/2 z-1 whitespace-nowrap"
    @click="toggleView"
  >
    Switch to {{ viewLabels[viewType] }} view

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 7L14 12L10 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </Button>
</template>

<script setup>
import { ref , computed , onMounted , onUnmounted } from 'vue'
import Button from '@/components/Button.vue'

import { VueDatePicker } from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

import SearchFormDropdown from '@/components/SearchFormDropdown.vue'
import Counter from '@/components/Counter.vue'

// Toogle the view list/map
const viewLabels = {
  list: 'list',
  map: 'map'
}

const viewType = ref('map')

const toggleView = () => {
  viewType.value = viewType.value === 'list' ? 'map' : 'list'
}

const batchSize = 3
const apartments = ref([
  {
    id: 1,
    name: 'Northern Ember Villa',
    priceFrom: 2600,
    priceTo: null,
    guests: 7,
    bedrooms: 7,
    area: 1200,
    image: '/properties/1.webp'
  },
  {
    id: 2,
    name: 'Skálavík Glass Retreat',
    priceFrom: 900,
    priceTo: 1200,
    guests: 7,
    bedrooms: 4,
    area: 1000,
    image: '/properties/2.webp'
  },
  {
    id: 3,
    name: 'Reykjavík Fjord Residence',
    priceFrom: 800,
    priceTo: 1400,
    guests: 7,
    bedrooms: 10,
    area: 1200,
    image: '/properties/3.webp'
  },
  {
    id: 4,
    name: 'Úlfljótsskáli Luxury Lodge',
    priceFrom: 900,
    priceTo: 1400,
    guests: 8,
    bedrooms: 4,
    area: 2000,
    image: '/properties/4.webp'
  },
  {
    id: 5,
    name: 'Hof Luxury Villa',
    priceFrom: 1200,
    priceTo: 2000,
    guests: 10,
    bedrooms: 5,
    area: 3200,
    image: '/properties/5.webp'
  },
  {
    id: 6,
    name: 'SJF Villa',
    priceFrom: 536,
    priceTo: 1000,
    guests: 6,
    bedrooms: 4,
    area: 2400,
    image: '/properties/6.webp'
  },
  {
    id: 7,
    name: 'The Lakehouse',
    priceFrom: 1000,
    priceTo: 1800,
    guests: 8,
    bedrooms: 4,
    area: 1830,
    image: '/properties/7.webp'
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
    image: '/properties/8.webp'
  },
  {
    id: 9,
    name: 'Kleif Farm',
    priceFrom: 3250,
    priceTo: null,
    guests: 10,
    bedrooms: 5,
    area: 3550,
    image: '/properties/9.webp'
  },
  {
    id: 10,
    name: 'Historic Villa in Downtown Reykjavík',
    priceFrom: 850,
    priceTo: 1500,
    guests: 10,
    bedrooms: 8,
    area: 2800,
    image: '/properties/10.webp'
  },
  {
    id: 11,
    name: 'Luxurious Villa in Reykjavík',
    priceFrom: 900,
    priceTo: 1700,
    guests: 10,
    bedrooms: 5,
    area: 1500,
    image: '/properties/11.webp'
  },
  {
    id: 12,
    name: 'Big Luxury Two Story Villa',
    priceFrom: 700,
    priceTo: 1300,
    guests: 10,
    bedrooms: 6,
    area: 2906,
    image: '/properties/12.webp'
  }
])
const visibleCount = ref(6)
const isLoading = ref(false)
const sentinel = ref(null)

const visibleApartments = computed(() =>
  apartments.value.slice(0, visibleCount.value)
)

const hasMore = computed(() =>
  visibleCount.value < apartments.value.length
)

const loadMore = () => {
  if (isLoading.value || !hasMore.value) return

  isLoading.value = true

  setTimeout(() => {
    visibleCount.value = Math.min(
      visibleCount.value + batchSize,
      apartments.value.length
    )
    isLoading.value = false
  }, 1000) // remove setTimeout when added real API
}

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) loadMore()
    },
    { threshold: 0.1 }
  )

  if (sentinel.value) observer.observe(sentinel.value)
})

onUnmounted(() => observer?.disconnect())

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
const date = ref(new Date())

const selectWhen = () => {
  whenDropdown.value = !whenDropdown.value
}

// Guests and rooms drodown
const guestsDropdown = ref(false)
const selectGuests = () => {
  guestsDropdown.value = !guestsDropdown.value
}

const guests = ref(1)
const bedrooms = ref(1)
const bathrooms = ref(1)
</script>

<style scoped>
:deep(.dp--theme-light) {
  --dp-font-family: "Mona Sans", sans-serif;
  --dp-menu-min-width: 800px;
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
</style>