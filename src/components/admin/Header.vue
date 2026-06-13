<template>
	<header class="outline outline-b outline-stroke-100">
		<div class="container mx-auto py-3.75 px-7.5 max-w-375 flex items-center">
			<!-- Logo -->
			<RouterLink to="/admin" class="flex items-center gap-2.5 font-semibold">
				<img :src="Logo" alt="Beyond logo" class="max-w-8 max-h-8" />
				<span>Beyond 60°</span>
			</RouterLink>

			<nav class="flex gap-2.5 p-1.25 rounded-lg bg-gray-200 mx-auto">
				<RouterLink
					v-for="item in menuItems"
					:key="item.name"
					:to="item.path"
					class="flex p-4 items-center rounded-lg gap-3 font-semibold text-gray-700! hover:bg-gray-100/10 transition-colors duration-200"
				>
					<img :src="item.icon" :alt="item.name" class="size-6" />
					{{ item.name }}
				</RouterLink>
			</nav>

			<!-- User Profile -->
			<div class="flex gap-3.75 items-center">
				<!-- Notification -->
				<button type="button" class="size-10 p-2 rounded-full bg-gray-200 flex flex-col items-center justify-center cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M5.67964 8.79403C6.05382 5.49085 8.77095 3 12 3C15.2291 3 17.9462 5.49085 18.3204 8.79403L18.6652 11.8385C18.7509 12.595 19.0575 13.3069 19.5445 13.88C20.5779 15.0964 19.7392 17 18.1699 17H5.83014C4.26081 17 3.42209 15.0964 4.45549 13.88C4.94246 13.3069 5.24906 12.595 5.33476 11.8385L5.67964 8.79403Z" stroke="#777777" stroke-width="1.5" stroke-linejoin="round"/>
						<path d="M15 19C14.5633 20.1652 13.385 21 12 21C10.615 21 9.43668 20.1652 9 19" stroke="#777777" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
				</button>

				<!-- User -->
				<div class="rounded-lg p-2 gap-2.5 flex items-center bg-gray-200">
					<!-- Picture -->
					<div class="size-6 overflow-hidden rounded-full">
						<img src="https://randomuser.me/api/portraits/men/24.jpg" alt="User profile picture" class="object-cover" />
					</div>
					<!-- Name -->
					<span class="font-medium text-gray-700">Bergur H.</span>
					<!-- Dropdown -->
					<button type="button" class="cursor-pointer size-5">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path d="M5.8335 8.33333L10.0002 11.6667L14.1668 8.33333" stroke="#777777" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
import Logo from '@/assets/logo.svg?url'

import Dashboard from '@/assets/icons/admin/grid.svg?url'
import Listings from '@/assets/icons/admin/home-graph.svg?url'
import Reservations from '@/assets/icons/admin/calendar-check.svg?url'
import Inquiries from '@/assets/icons/admin/chatting.svg?url'

const menuItems = [
	{ name: 'Dashboard', path: '/admin' , icon: Dashboard },
	{ name: 'Listings', path: '/admin/listings' , icon: Listings },
	{ name: 'Reservations', path: '/admin/reservations' , icon: Reservations },
	{ name: 'Inquiries', path: '/admin/inquiries' , icon: Inquiries },
]
</script>