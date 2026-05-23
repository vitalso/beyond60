<template>
	<section class="py-0 md:py-12.5">
		<div class="max-w-323 md:px-4 mx-auto">
			<div class="rounded-tl-lg rounded-tr-lg overflow-hidden text-white min-h-150 join-discover px-5 pb-17.5 pt-25 md:p-12.5 flex flex-col justify-end relative">
				<div class="flex flex-col gap-5 items-start relative z-2">
					<!-- Section tag -->
					<div class="inline-flex gap-3.5 items-center p-3 rounded-[90px] text-base font-semibold border border-stroke-100/20 bg-white/5 backdrop-blur-lg">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5.66666 1.6665H14.3333C16.5425 1.6665 18.3333 3.45737 18.3333 5.6665V14.3332C18.3333 16.5423 16.5425 18.3332 14.3333 18.3332H5.66666C3.45752 18.3332 1.66666 16.5423 1.66666 14.3332V5.6665C1.66666 3.45737 3.45752 1.6665 5.66666 1.6665Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M10.8333 7.5L13.3333 10L10.8333 12.5M13.3333 10L6.66668 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						Get started
					</div>

					<h1 class="font-semibold text-5xl">Join to discover private homes <br> or showcase your own</h1>
					<p class="font-medium mb-2.5">Join to unlock a collection of private residences or showcase your property to a carefully <br> selected audience, all through a seamless and direct experience.</p>
					<Button as="RouterLink" to="/register" size="large" variant="secondary">
						Register now
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10 7L14 12L10 17" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</Button>
				</div>

				<!-- Blur effect -->
				<div class="progressive-blur absolute w-full h-1/2 top-1/2 left-0"></div>
			</div>
		</div>
	</section>
</template>

<script setup>
import Button from '@/components/Button.vue';
</script>