<template>
	<footer class="max-w-360 mx-auto pt-10 px-5 md:px-6 border-t border-t-stroke-100">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
			<div class="space-y-5">
				<!-- Logo -->
				<RouterLink to="/" class="flex items-center gap-1 text-xl font-semibold">
					<img :src="Logo" alt="Beyond logo" class="max-w-8 max-h-8" />
					<span>Beyond 60°</span>
				</RouterLink>
				<p class="font-medium text-lg text-gray-100">A quiet network for <br> extraordinary places.</p>
				<Button as="RouterLink" to="/register" size="medium" variant="primary">
					Register now
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.33334 5.8335L11.6667 10.0002L8.33334 14.1668" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</Button>
				<!-- Social links -->
				<div class="flex gap-2.5">
					<a href="#" class="size-6 rounded-full border border-black inline-flex items-center justify-center">
						<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.33711 8.75282H1.69817C0.918948 8.75282 0.282349 8.11622 0.282349 7.33699V1.69805C0.282349 0.918825 0.918948 0.282227 1.69817 0.282227H7.33711C8.11634 0.282227 8.75294 0.918825 8.75294 1.69805V7.33699C8.75294 8.1197 8.11982 8.75282 7.33711 8.75282Z" stroke="#1E1E1E" stroke-width="0.564706"/>
							<path d="M2.9818 6.05697C3.39228 6.46745 3.93844 6.69357 4.51937 6.69357C5.10031 6.69357 5.64299 6.46745 6.05695 6.05697C6.46744 5.64648 6.69355 5.10033 6.69355 4.51939C6.69355 3.93845 6.46744 3.3923 6.05695 2.98181C5.64647 2.57133 5.10031 2.34521 4.51937 2.34521C3.93844 2.34521 3.39228 2.57133 2.9818 2.98181C2.57131 3.3923 2.3452 3.93845 2.3452 4.51939C2.3452 5.10033 2.57131 5.64648 2.9818 6.05697Z" stroke="#1E1E1E" stroke-width="0.564706"/>
							<path d="M7.11733 2.27387C7.34788 2.27387 7.53478 2.08697 7.53478 1.85642C7.53478 1.62586 7.34788 1.43896 7.11733 1.43896C6.88677 1.43896 6.69987 1.62586 6.69987 1.85642C6.69987 2.08697 6.88677 2.27387 7.11733 2.27387Z" stroke="#1E1E1E" stroke-width="0.564706"/>
						</svg>
					</a>

					<a href="#" class="size-6 rounded-full border border-black inline-flex items-center justify-center">
						<svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M3.20317 0H0L3.79784 4.99026L0.242949 9.17647H1.88541L4.5741 6.01031L6.96154 9.14738H10.1647L6.25652 4.0121L6.26344 4.02096L9.62845 0.0582956H7.98598L5.48706 3.00103L3.20317 0ZM1.76809 0.873955H2.76528L8.39661 8.27337H7.39943L1.76809 0.873955Z" fill="#1E1E1E"/>
						</svg>
					</a>

					<a href="#" class="size-6 rounded-full border border-black inline-flex items-center justify-center">
						<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2.51386 3.53174H0.448883V10.1168H2.51386V3.53174Z" stroke="#1E1E1E" stroke-width="0.564706"/>
							<path d="M8.09973 3.38906C8.0236 3.37955 7.94271 3.37479 7.86183 3.37003C6.70564 3.32245 6.05379 4.0076 5.82541 4.3026C5.76356 4.38349 5.73501 4.43107 5.73501 4.43107V3.55084H3.76044V10.1359H5.73501H5.82541C5.82541 9.46503 5.82541 8.79891 5.82541 8.12803C5.82541 7.76642 5.82541 7.40481 5.82541 7.04321C5.82541 6.59595 5.7921 6.12016 6.01573 5.71097C6.20605 5.36839 6.54862 5.1971 6.93402 5.1971C8.07594 5.1971 8.09973 6.22959 8.09973 6.32475C8.09973 6.32951 8.09973 6.33426 8.09973 6.33426V10.1645H10.1647V5.86798C10.1647 4.39776 9.41769 3.5318 8.09973 3.38906Z" stroke="#1E1E1E" stroke-width="0.564706"/>
							<path d="M1.48136 2.68026C2.14356 2.68026 2.68038 2.14344 2.68038 1.48124C2.68038 0.819044 2.14356 0.282227 1.48136 0.282227C0.819164 0.282227 0.282349 0.819044 0.282349 1.48124C0.282349 2.14344 0.819164 2.68026 1.48136 2.68026Z" stroke="#1E1E1E" stroke-width="0.564706"/>
						</svg>
					</a>
				</div>
			</div>

			<div>
				<h3 class="font-semibold text-xl mb-6">Company</h3>
				<ul class="space-y-3.5 text-lg font-medium text-gray-100">
					<li><RouterLink to="/">Home</RouterLink></li>
					<li><RouterLink to="/how-it-works">How it works</RouterLink></li>
					<li><RouterLink to="/properties">Properties</RouterLink></li>
					<li><RouterLink to="/about-us">About Us</RouterLink></li>
					<li><RouterLink to="/contact">Contact</RouterLink></li>
				</ul>
			</div>

			<div>
				<h3 class="font-semibold text-xl mb-6">Legal</h3>
				<ul class="space-y-3.5 text-lg font-medium text-gray-100">
					<li><RouterLink to="/privacy-policy">Privacy policy</RouterLink></li>
					<li><RouterLink to="/terms-of-service">Terms of service</RouterLink></li>
				</ul>
			</div>

			<div>
				<h3 class="font-semibold text-xl mb-6">Get in touch</h3>
				<ul class="space-y-3.5 text-lg font-medium text-gray-100">
					<li><a href="mailto:contact@beyond60°.com">contact@beyond60°.com</a></li>
					<li><a href="tel:+3547824619">+354 782 4619</a></li>
				</ul>
			</div>
		</div>

		<!-- Divider -->
		<div class="border-t border-stroke-100 my-10"></div>

		<!-- Logo in text format -->
		<div class="font-semibold text-7xl md:text-9xl lg:text-[168px] xl:text-[248px] text-center relative logo-text h-11 md:h-18 lg:h-26 xl:h-36 overflow-hidden">
			Beyond 60°
		</div>
	</footer>
</template>

<script setup>
import Logo from '../assets/logo.svg';
import { RouterLink } from 'vue-router';
import Button from './Button.vue';
</script>