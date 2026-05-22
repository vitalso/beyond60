<template>
	<!-- Header -->
	<header
		class="mt-2.5 md:mt-7.5 absolute left-1/2 -translate-x-1/2 w-full z-11"
		:class="isMenuOpen ? 'fixed' : 'absolute'"
	>
		<div class="container flex">
			<div class="bg-white p-4 md:p-2.5 mx-auto rounded-[90px] border border-stroke-100 shadow-sm flex gap-4 lg:gap-8 max-md:w-full">
				<!-- Logo -->
				<RouterLink to="/" class="flex items-center gap-2.5 font-semibold">
					<img :src="Logo" alt="Beyond logo" class="max-w-8 max-h-8" />
					<span>Beyond 60°</span>
				</RouterLink>
				
				<!-- Navigation -->
				<nav
					class="md:flex gap-4 lg:gap-8 items-center font-semibold max-lg:text-sm"
					:class="isMenuOpen ? 'max-md:flex max-md:flex-col max-md:fixed max-md:justify-center -top-2.5 left-0 max-md:h-screen max-md:w-full max-md:bg-white max-md:shadow-md' : 'hidden'"
				>
					<RouterLink
						v-for="items in menuItems"
						:key="items.name"
						:to="items.path"
						class="hover:text-black transition-all text-gray-100 max-md:text-4xl"
					>
						{{ items.name }}
					</RouterLink>
				</nav>

				<!-- CTA button -->
				<div
					class="ml-auto gap-2.5 hidden md:flex"
					:class="isMenuOpen ? 'max-md:flex max-md:z-20 fixed top-[80vh] left-1/2 -translate-x-1/2' : 'hidden'"
				>
					<Button as="RouterLink" to="/login" variant="secondary">
						Log in
					</Button>

					<Button as="RouterLink" to="/register" variant="primary">
						Register
					</Button>
				</div>

				<!-- Mobile menu button -->
				<button
					type="button"
					class="ml-auto md:hidden cursor-pointer focus:outline-none transition-all hover:bg-cream rounded-full relative z-20"
					@click="toggleMenu"
				>
					<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21.25 19.0625C21.7678 19.0625 22.1875 19.4822 22.1875 20C22.1875 20.5178 21.7678 20.9375 21.25 20.9375H8.75C8.23223 20.9375 7.8125 20.5178 7.8125 20C7.8125 19.4822 8.23223 19.0625 8.75 19.0625H21.25ZM21.25 14.0625C21.7678 14.0625 22.1875 14.4822 22.1875 15C22.1875 15.5178 21.7678 15.9375 21.25 15.9375H8.75C8.23223 15.9375 7.8125 15.5178 7.8125 15C7.8125 14.4822 8.23223 14.0625 8.75 14.0625H21.25ZM21.25 9.0625C21.7678 9.0625 22.1875 9.48223 22.1875 10C22.1875 10.5178 21.7678 10.9375 21.25 10.9375H8.75C8.23223 10.9375 7.8125 10.5178 7.8125 10C7.8125 9.48223 8.23223 9.0625 8.75 9.0625H21.25Z" fill="#1E1E1E"/>
					</svg>
				</button>
			</div>
		</div>
	</header>
</template>

<script setup>
import { ref } from 'vue'
import Logo from '../assets/logo.svg'

import Button from './Button.vue'

const menuItems = [
	{ name: 'Home', path: '/' },
	{ name: 'How it works', path: '/how-it-works' },
	{ name: 'Properties', path: '/properties' },
	{ name: 'About us', path: '/about-us' },
	{ name: 'Contact', path: '/contact' },
]
const isMenuOpen = ref(false)
const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}
</script>