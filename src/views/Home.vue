<template>
	<HeroSection />

	<section class="bg-cream py-50 md:py-75 font-semibold text-2xl">
		<div class="container">
			<div class="max-w-225 mx-auto flex items-center gap-3 md:gap-12.5 max-md:flex-wrap">
				<img :src="LogoVertical" alt="Beyond 60° Logo" class="max-md:-rotate-90 translate-x-1/2">
				<h5>Beyond 60° sets a new standard in luxury real estate access. We connect discerning clients with carefully selected properties that are privately shared, not publicly listed. Each residence is chosen for its uniqueness, character, and exceptional quality.</h5>
			</div>
		</div>
	</section>

	<PropertiesPreview />

	<!-- Process section -->
	<section class="bg-cream py-17.5 md:py-25 font-semibold">
		<div class="container">
			<!-- Section tag and title  -->
			<div class="text-center mb-10">
				<!-- Section tag -->
				<div class="inline-flex mb-5 p-3 items-center gap-3.75 rounded-[90px] text-gray-100 font-semibold border border-stroke-100 bg-white">
					<!-- Icon -->
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.167 12.708C14.5119 12.7082 14.7918 12.9881 14.792 13.333C14.792 13.6781 14.512 13.9578 14.167 13.958H10C9.65482 13.958 9.375 13.6782 9.375 13.333C9.37518 12.988 9.65493 12.708 10 12.708H14.167ZM14.167 9.375C14.512 9.37518 14.792 9.65493 14.792 10C14.792 10.3451 14.512 10.6248 14.167 10.625H5.83301C5.48798 10.6248 5.20801 10.3451 5.20801 10C5.20801 9.65493 5.48798 9.37518 5.83301 9.375H14.167ZM10 6.04199C10.3452 6.04199 10.625 6.32181 10.625 6.66699C10.6248 7.01202 10.3451 7.29199 10 7.29199H5.83301C5.48809 7.29182 5.20818 7.01191 5.20801 6.66699C5.20801 6.32192 5.48798 6.04217 5.83301 6.04199H10Z" fill="#777777"/>
					</svg>
					<span>How it works</span>
				</div>

				<!-- Title -->
				<h2 class="text-5xl text-dark font-semibold">A Simple process, <br> designed around you</h2>
			</div>

			<!-- Tab component -->
			<div class="text-center">
				<div class="mx-auto rounded-[90px] border border-stroke-100 p-1.25 gap-2.5 inline-flex bg-white">
					<button
						v-for="tab in tabs" 
						:key="tab.id" 
						:active="activeTab === tab.id" 
						@click="activeTab = tab.id"
						class="p-2.5 rounded-[90px] text-lg text-gray-100 font-medium transition-colors duration-300 cursor-pointer"
						:class="activeTab === tab.id ? 'bg-black text-white' : 'hover:bg-gray-100/10'"
					>
						{{ tab.label }}
					</button>
				</div>
			</div>
			
			<div class="max-w-200 mx-auto">
				<div class="mt-5 bg-white rounded-lg border border-stroke-100">
					<!-- Agents -->
					<div
						v-if="activeTab === 0"
					>
						<!-- Process steps for agents -->
						<div
							v-for="step in processSteps"
							:key="step.id"
							class="p-5 md:p-7.5 flex max-md:flex-col gap-12.5 font-semibold text-[29px] not-last:border-b border-stroke-100"
						>
							<!-- Step number -->
							<div class="size-12.5 rounded-full flex flex-col items-center justify-center bg-cream border border-stroke-100 ">{{ step.id }}</div>

							<!-- Step title and description -->
							<div class="space-y-5 md:space-y-12.5 flex-1">
								<h3>{{ step.title }}</h3>
								<p class="text-gray-100 font-medium text-base">{{ step.description }}</p>
							</div>
						</div>
					</div>

					<!-- Property owners -->
					<div
						v-if="activeTab === 1"
					>
						<div class="p-5 md:p-7.5 flex max-md:flex-col gap-12.5 font-semibold text-[29px] not-last:border-b border-stroke-100">
							<h3 class="text-3xl">Property Owners steps will be described here</h3>
						</div>
					</div>
				</div>
			</div>

			<!-- See more -->
			<div class="text-center mt-10">
				<p class="font-medium text-gray-100 mb-2.5">Interested</p>
				<Button as="RouterLink" to="/register" variant="primary" size="large">
					Register now
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 7L14 12L10 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</Button>
			</div>
		</div>
	</section>

	<section class="py-17.5 md:py-25 text-white relative overlay">
		<div class="container relative z-2">
			<!-- Section tag and title  -->
			<div class="text-center mb-15">
				<!-- Section tag -->
				<div class="inline-flex gap-2.5 items-center mb-5 p-3.75 rounded-[90px] text-lg font-semibold border border-stroke-100/20 bg-white/5 backdrop-blur-lg">
					<!-- Icon -->
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.20966 14.6147C4.39648 14.9883 4.69943 15.2912 5.07294 15.478L5.7829 15.8325L5.07294 16.188C4.69949 16.3747 4.39648 16.6779 4.20966 17.0513L3.85419 17.7612L3.49872 17.0513C3.31189 16.6779 3.0089 16.3747 2.63544 16.188L1.9245 15.8325L2.63544 15.478C3.00893 15.2912 3.3119 14.9883 3.49872 14.6147L3.85419 13.9038L4.20966 14.6147ZM12.1872 3.90479C12.4272 3.90479 12.6449 4.02104 12.778 4.21436L12.8298 4.30225L14.0095 6.66064C14.3359 7.31265 14.8742 7.85169 15.527 8.17822L17.8854 9.35791C18.1312 9.481 18.2818 9.7256 18.2819 9.99951C18.2819 10.2738 18.1309 10.5191 17.8854 10.6421L15.527 11.8218H15.5261C14.8743 12.1482 14.3359 12.6867 14.0095 13.3394L12.8298 15.6968C12.7067 15.9424 12.4622 16.0933 12.1872 16.0933C11.9468 16.0932 11.7293 15.9784 11.5964 15.7847L11.5456 15.6968L10.3659 13.3394C10.0395 12.6867 9.50115 12.1483 8.84833 11.8218L6.48993 10.6421C6.24391 10.5188 6.09247 10.2741 6.09247 9.99951C6.09259 9.72511 6.24408 9.48113 6.48993 9.35791L8.84833 8.17822C9.41972 7.89245 9.90345 7.44428 10.2341 6.8999L10.3659 6.66064L11.5456 4.30225C11.6686 4.05635 11.9132 3.90491 12.1872 3.90479ZM11.862 4.83643L10.8337 6.89404C10.5041 7.55234 9.98644 8.11189 9.35809 8.49365L9.08173 8.646L7.02411 9.67432L6.37372 9.99951L7.02411 10.3247L9.08173 11.354C9.74041 11.6835 10.2995 12.2018 10.6813 12.8306L10.8337 13.106L12.1872 15.813L12.5124 15.1626L13.5417 13.105C13.9183 12.3528 14.5405 11.7306 15.2927 11.354L18.0016 9.99951L17.3513 9.67432L15.2936 8.646C14.6346 8.31649 14.0758 7.79871 13.694 7.17041L13.5417 6.89404L12.5124 4.83643L12.1872 4.18604L11.862 4.83643ZM4.20966 2.94775C4.39646 3.32136 4.69931 3.62423 5.07294 3.81104L5.7829 4.1665L5.07294 4.52197C4.69933 4.70878 4.39646 5.01163 4.20966 5.38525L3.85419 6.09521L3.49872 5.38525C3.31191 5.01165 3.00906 4.70878 2.63544 4.52197L1.9245 4.1665L2.63544 3.81104C3.00904 3.62423 3.31191 3.32138 3.49872 2.94775L3.85419 2.23682L4.20966 2.94775Z" fill="white" stroke="white" stroke-width="0.727273"/>
					</svg>
					<span>Our uniqueness</span>
				</div>

				<!-- Title -->
				<h2 class="text-5xl font-semibold">The principles that define our <br> curated approach</h2>
			</div>

			<!-- Our principles -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				<div
					v-for="princeple in principles"
					:key="princeple.title"
					class="pl-5 border-l border-l-white last:max-lg:justify-self-center last:max-lg:col-span-2 last:max-md:justify-self-auto last:max-md:col-span-1"
				>
					<h3 class="mb-12.5 md:mb-25 p-1.25 rounded-sm text-2xl inline-block font-semibold bg-white/5 backdrop-blur-lg">{{ princeple.title }}</h3>
					<ul class="list-disc list-inside space-y-5 text-lg font-medium">
						<li v-for="item in princeple.list" :key="item">{{ item }}</li>
					</ul>
				</div>
			</div>

			<!-- See more -->
			<div class="text-center mt-15">
				<p class="font-medium text-white/80 mb-2.5">Learn more</p>
				<Button as="RouterLink" to="/register" variant="secondary" size="large">
					About us
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 7L14 12L10 17" stroke="#1e1e1e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</Button>
			</div>
		</div>

		<!-- Background video -->
		<!--<video class="absolute top-0 left-0 w-full h-full object-cover z-1" loop muted autoplay playsinline poster="/hero-image.jpg">
			<source src="/footage.mp4" type="video/mp4">
		</video>-->
	</section>

	<section class="py-17.5 md:py-25">
		<div class="container relative z-2">
			<!-- Section tag and title  -->
			<div class="text-center mb-10">
				<!-- Section tag -->
				<div class="inline-flex mb-5 p-3 items-center gap-3.75 rounded-[90px] text-gray-100 font-semibold border border-stroke-100 bg-white">
					<!-- Icon -->
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15.2509 15.7733L15.7679 15.4671C16.8397 14.8323 17.5 13.6593 17.5 12.3899V7.60977C17.5 6.34034 16.8397 5.16733 15.7679 4.53261L11.732 2.14254C10.6603 1.50782 9.33975 1.50782 8.26795 2.14254L4.23205 4.53261C3.16025 5.16733 2.5 6.34034 2.5 7.60977V12.3899C2.5 13.6593 3.16025 14.8323 4.23205 15.4671L4.74913 15.7733M15.2509 15.7733L11.732 17.8571C10.6603 18.4919 9.33975 18.4919 8.26795 17.8571L4.74913 15.7733M15.2509 15.7733C14.2026 13.915 12.2436 12.6648 9.99999 12.6648C7.75635 12.6648 5.79739 13.915 4.74913 15.7733" stroke="#777777" stroke-width="1.5" stroke-linejoin="round"/>
						<circle cx="2.5" cy="2.5" r="2.5" transform="matrix(1 0 0 -1 7.5 10)" stroke="#777777" stroke-width="1.5" stroke-linejoin="round"/>
					</svg>
					<span>Trust & credibility</span>
				</div>

				<!-- Title -->
				<h2 class="text-5xl font-semibold">Built on trust, not volume</h2>
			</div>

			<!-- Reviews (3 cards on 1 row) -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
				<!-- Card without image -->
				<div class="border border-stroke-100 rounded-lg p-5 md:p-7.5 h-53 md:h-65.5 bg-white relative">
					<!-- Icon -->
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.71964 14L9.95486 15.2749C10.8195 16.1674 12.259 16.0202 12.9373 14.9701L15.5016 11M20.3458 10.1503V17.9668C20.3458 20.1943 18.6107 22 16.4704 22H6.78194C4.64163 22 2.90656 20.1943 2.90656 17.9668V10.1503C2.90656 8.93937 3.42939 7.7925 4.33063 7.02652L9.17486 2.90935C10.6014 1.69689 12.6509 1.69688 14.0775 2.90935L18.9217 7.02652C19.823 7.7925 20.3458 8.93937 20.3458 10.1503Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>

					<div class="absolute md:bottom-7.5 md:left-7.5 md:right-7.5 bottom-5 left-5 right-5 space-y-5">
						<h3 class="font-semibold text-[29px] leading-8">100% curated listings</h3>
						<p class="font-medium text-gray-100">Every property added to the platform is individually reviewed before being shared.</p>
					</div>
				</div>

				<!-- Card without image -->
				<div class="border border-stroke-100 rounded-lg p-5 md:p-7.5 h-53 md:h-65.5 bg-white relative">
					<!-- Icon -->
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<ellipse cx="10" cy="17.5" rx="7" ry="3.5" stroke="#1E1E1E" stroke-width="1.5" stroke-linejoin="round"/>
						<circle cx="10" cy="7" r="4" stroke="#1E1E1E" stroke-width="1.5" stroke-linejoin="round"/>
						<path d="M15.3402 4.26562C17.2517 4.43755 18.7502 6.04374 18.7504 8C18.7504 10.0709 17.0713 11.7498 15.0004 11.75C14.6088 11.75 14.2312 11.6894 13.8763 11.5781C14.3281 11.1953 14.7212 10.7465 15.0433 10.2471C16.2659 10.2239 17.2504 9.22814 17.2504 8C17.2503 7.07941 16.6966 6.28874 15.9047 5.94043C15.7989 5.34729 15.6066 4.7847 15.3402 4.26562Z" fill="#1E1E1E"/>
						<path d="M15.7523 13.2705C17.1923 13.3418 18.5097 13.6142 19.5316 14.04C20.1285 14.2888 20.6608 14.6039 21.0551 14.9922C21.452 15.3833 21.7503 15.8937 21.7504 16.5C21.7504 17.1063 21.4519 17.6167 21.0551 18.0078C20.6608 18.3961 20.1284 18.7112 19.5316 18.96C19.2142 19.0922 18.8675 19.2081 18.4984 19.3096C18.8125 18.7588 18.9877 18.1695 18.9974 17.5547C19.4628 17.3561 19.7959 17.1418 20.0023 16.9385C20.2122 16.7316 20.2504 16.5839 20.2504 16.5C20.2503 16.4161 20.2122 16.2684 20.0023 16.0615C19.7895 15.8519 19.443 15.6284 18.9545 15.4248C18.7072 15.3218 18.4322 15.2278 18.1342 15.1445C17.5698 14.4181 16.7529 13.7792 15.7523 13.2705Z" fill="#1E1E1E"/>
					</svg>


					<div class="absolute md:bottom-7.5 md:left-7.5 md:right-7.5 bottom-5 left-5 right-5 space-y-5">
						<h3 class="font-semibold text-[29px] leading-8">0 intermediaries</h3>
						<p class="font-medium text-gray-100">All inquiries and communication happen directly between guests and owners.</p>
					</div>
				</div>

				<!-- Card with image -->
				<div class="rounded-lg h-65.5 overflow-hidden max-lg:hidden">
					<img src="/collection/property-3.webp" alt="image" class="w-full h-full object-cover">
				</div>
			</div>

			<!-- Reviews (2 cards on 1 row) -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
				<!-- Card with image -->
				<div class="rounded-lg h-75 overflow-hidden max-lg:hidden">
					<img src="/collection/property-2.webp" alt="image" class="w-full h-full object-cover">
				</div>

				<!-- Card without image -->
				<div class="border border-stroke-100 rounded-lg p-5 md:p-7.5 h-63.5 md:h-75 bg-white relative">
					<!-- Icons -->
					<div class="flex mb-2.5">
						<svg v-for="n in 5" :key="n" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.98821 0.575927C7.23767 -0.191832 8.32385 -0.191831 8.57331 0.575927L9.83881 4.47073C9.95037 4.81408 10.2703 5.04655 10.6314 5.04655H14.7266C15.5339 5.04655 15.8695 6.07956 15.2164 6.55406L11.9033 8.96118C11.6112 9.17339 11.489 9.54953 11.6006 9.89288L12.8661 13.7877C13.1155 14.5554 12.2368 15.1939 11.5837 14.7194L8.27058 12.3123C7.97851 12.1001 7.58301 12.1001 7.29094 12.3123L3.97782 14.7194C3.32473 15.1939 2.446 14.5554 2.69546 13.7877L3.96095 9.89288C4.07252 9.54953 3.9503 9.17339 3.65823 8.96118L0.345111 6.55406C-0.307984 6.07956 0.0276632 5.04655 0.834933 5.04655H4.93017C5.29119 5.04655 5.61115 4.81408 5.72272 4.47073L6.98821 0.575927Z" fill="#FFBB00"/>
						</svg>
					</div>

					<div class="flex items-center gap-2.5 text-gray-100 font-medium">
						<div class="size-7.5 rounded-full overflow-hidden">
							<img src="/review-author.jpg" alt="Jack Schneider">
						</div>
						<p>Jack Schneider</p>
					</div>

					<div class="absolute md:bottom-7.5 md:left-7.5 md:right-7.5 bottom-5 left-5 right-5">
						<h3 class="font-semibold text-2xl leading-7">"The experience felt personal and straightforward. It’s rare to find something this simple and well thought out."</h3>
					</div>
				</div>
			</div>

			<!-- See more -->
			<div class="text-center mt-10">
				<p class="font-medium text-gray-100 mb-2.5">Sounds like you?</p>
				<Button as="RouterLink" to="/register" variant="primary" size="large">
					Register now
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 7L14 12L10 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</Button>
			</div>
		</div>
	</section>

	<!-- FAQ section -->
	<section class="bg-cream py-17.5 md:py-25">
		<div class="container">
			<!-- Section tag and title  -->
			<div class="text-center mb-10">
				<!-- Section tag -->
				<div class="inline-flex mb-5 p-3 items-center gap-3.75 rounded-[90px] text-gray-100 font-semibold border border-stroke-100 bg-white">
					<!-- Icon -->
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.4026 8.4005L12.0333 8.80634V8.80634L11.4026 8.4005ZM7.58335 7.49984C7.58335 7.91405 7.91914 8.24984 8.33335 8.24984C8.74757 8.24984 9.08335 7.91405 9.08335 7.49984H8.33335H7.58335ZM9.25002 11.2498C9.25002 11.6641 9.58581 11.9998 10 11.9998C10.4142 11.9998 10.75 11.6641 10.75 11.2498H10H9.25002ZM10.75 13.3332C10.75 12.919 10.4142 12.5832 10 12.5832C9.58581 12.5832 9.25002 12.919 9.25002 13.3332H10H10.75ZM9.25002 14.1665C9.25002 14.5807 9.58581 14.9165 10 14.9165C10.4142 14.9165 10.75 14.5807 10.75 14.1665H10H9.25002ZM18.3334 9.99984H17.5834C17.5834 14.188 14.1882 17.5832 10 17.5832V18.3332V19.0832C15.0166 19.0832 19.0834 15.0164 19.0834 9.99984H18.3334ZM10 18.3332V17.5832C5.81186 17.5832 2.41669 14.188 2.41669 9.99984H1.66669H0.916687C0.916687 15.0164 4.98343 19.0832 10 19.0832V18.3332ZM1.66669 9.99984H2.41669C2.41669 5.81168 5.81186 2.4165 10 2.4165V1.6665V0.916504C4.98343 0.916504 0.916687 4.98325 0.916687 9.99984H1.66669ZM10 1.6665V2.4165C14.1882 2.4165 17.5834 5.81168 17.5834 9.99984H18.3334H19.0834C19.0834 4.98325 15.0166 0.916504 10 0.916504V1.6665ZM11.6667 7.49984H10.9167C10.9167 7.68344 10.8635 7.85233 10.7719 7.99466L11.4026 8.4005L12.0333 8.80634C12.276 8.42922 12.4167 7.97982 12.4167 7.49984H11.6667ZM8.33335 7.49984H9.08335C9.08335 6.99358 9.49376 6.58317 10 6.58317V5.83317V5.08317C8.66533 5.08317 7.58335 6.16515 7.58335 7.49984H8.33335ZM10 5.83317V6.58317C10.5063 6.58317 10.9167 6.99358 10.9167 7.49984H11.6667H12.4167C12.4167 6.16515 11.3347 5.08317 10 5.08317V5.83317ZM10 10.8332H9.25002V11.2498H10H10.75V10.8332H10ZM11.4026 8.4005L10.7719 7.99466C10.6709 8.15165 10.5432 8.31588 10.389 8.50755C10.2426 8.68946 10.0662 8.90341 9.90808 9.12067C9.59721 9.54792 9.25002 10.126 9.25002 10.8332H10H10.75C10.75 10.6199 10.8551 10.3686 11.121 10.0032C11.2513 9.8241 11.3944 9.65085 11.5577 9.44789C11.7131 9.25469 11.8853 9.03638 12.0333 8.80634L11.4026 8.4005ZM10 13.3332H9.25002V14.1665H10H10.75V13.3332H10Z" fill="#777777"/>
					</svg>
					<span>FAQs</span>
				</div>

				<!-- Title -->
				<h2 class="text-5xl font-semibold">Questions you might have</h2>
			</div>

			<div class="max-w-187.5 mx-auto">
				<div
					class="bg-white rounded-lg border border-stroke-100 p-5 font-medium text-gray-100 not-last:mb-2.5 cursor-pointer overflow-hidden transition-all duration-300"
					v-for="(item, index) in questions"
					:key="item.index"
				>
					<!-- Question -->
					<div
						class="flex gap-5"
						@click="toggleQuestion(index)"
					>
						<h3 class="text-lg text-black">{{ item.question }}</h3>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="ml-auto transition-all duration-300"
							:class="{ 'rotate-270': activeQuestion === index , 'rotate-90': activeQuestion !== index }"
						>
							<path d="M10 7L14 12L10 17" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
					<!-- Answer -->
					<div
						class="transition-all duration-300"
						:class="activeQuestion === index ? 'max-h-none pt-5' : 'max-h-0 overflow-hidden' "
					>
						{{ item.answer }}
					</div>
				</div>
			</div>

			<!-- See more -->
			<div class="text-center mt-10">
				<p class="font-medium text-gray-100 mb-2.5">Have more questions?</p>
				<Button as="RouterLink" to="/register" variant="primary" size="large">
					Help center
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 7L14 12L10 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</Button>
			</div>
		</div>
	</section>

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
import { ref } from 'vue'
import HeroSection from '@/components/HeroSection.vue';
import LogoVertical from '@/assets/logo-vertical.svg';

import Button from '@/components/Button.vue';
import PropertiesPreview from '@/components/PropertiesPreview.vue';

const tabs = ref([
	{ label: 'Agenst', id: 0, active: true },
	{ label: 'Property owners', id: 1, active: false },
])

const activeTab = ref(0)

const processSteps = ref([
	{
		id: 1,
		title: 'Create your account',
		description: 'Register in just a few steps to unlock access to private listings and begin exploring exclusive properties.',
	},
	{
		id: 2,
		title: 'Find your stay',
		description: 'Browse a curated selection of homes and discover stays that match your preferences, lifestyle, and expectations.',
	},
	{
		id: 3,
		title: 'Send inquiries',
		description: 'Connect directly with property owners by sending inquiries, asking questions, and getting the details you need.',
	},
	{
		id: 4,
		title: 'Confirm your booking',
		description: 'Finalize your stay with confidence through a clear and straightforward booking process.',
	},
])

const principles = ref([
	{
		title: 'Curated exclusivity',
		list: [
			'Every property is hand-selected',
			'No open or mass listings',
			'Strict quality standards'
		],
	},
	{
		title: 'Private access only',
		list: [
			'Properties revealed after registration',
			'Controlled member access',
			'No public exposure'
		],
	},
	{
		title: 'Exceptional standards',
		list: [
			'Focus on design and character',
			'Only rare, distinctive homes',
			'Quality over quantity, always'
		],
	},
])

const questions = ref([
	{
		question: 'What is Beyond 60°?',
		answer: 'Beyond 60° is a curated platform that connects guests and property owners through privately shared, high-quality properties. We focus on discretion, simplicity, and direct communication.',
	},
	{
		question: 'How do I register?',
		answer: 'Simply click the "Register now" button and follow the prompts to create your account. Once registered, you will gain access to our exclusive listings.',
	},
	{
		question: 'Why are properties only visible to registered users?',
		answer: 'We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
	{
		question: 'How do bookings work?',
		answer: 'Beyond 60° does not charge guests any fees for using our platform. We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
	{
		question: 'Can I list my property on Beyond 60°?',
		answer: ' We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
	{
		question: 'Is there a fee to use the platform?',
		answer: 'Beyond 60° does not charge guests any fees for using our platform. We connect you directly with property owners, and any payment arrangements are made between you and the owner.',
	},
])

const activeQuestion = ref(null)
const toggleQuestion = (index) => {
	activeQuestion.value = activeQuestion.value === index ? null : index
}
</script>