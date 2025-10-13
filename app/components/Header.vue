<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
	label: 'Home',
	icon: 'i-lucide-home',
	to: '/',
}, {
	label: 'Character Reference',
	to: '/character-reference',
	icon: 'i-lucide-book-open',
	active: route.path.startsWith('/character-reference')
}, {
	label: 'Art',
	to: '/art',
	icon: 'i-lucide-image',
	active: route.path.startsWith('/art')
}, {
	label: 'Twitch',
	icon: 'i-lucide-twitch',
	to: 'https://www.twitch.tv/Uchuujin_ai',
	target: '_blank'
}])
</script>

<template>
	<UHeader>
		<template #title>
			<NuxtImg class="h-12 w-auto" src="/logo.png" />
		</template>

		<UNavigationMenu :items="items" />

		<template #right>
			<UColorModeButton />
		</template>

		<template #body>
			<UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
		</template>
	</UHeader>
</template>
