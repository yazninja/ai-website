<template>
	<UPage>
		<NuxtImg preload src="https://media.uchuujinai.com/site-assets/home-bg.png" alt="Uchuujin AI"
			class="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-30 dark:opacity-20" />
		<ClientOnly>
			<TwichEmbed />
			<CardContainer>
				<CardBody
					class="mt-5 group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50/60 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-transparent dark:backdrop-blur-md dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] gap-2 flex flex-col">
					<CardItem :translate-z="50" class="text-3xl font-bold text-center">
						Uchuujin_Ai
					</CardItem>
					<CardItem :translate-z="75" :translate-x="50">
						🛸 Daily Twitch live screeching sessions
						<br />
						🎮 Loves horror games but screams A LOT
					</CardItem>
					<CardItem :translate-z="100" :rotate-z="-1">
						<FancyLinkButton gradient-color="#6441a5" left-icon="i-logos-twitch"
							description="Catch me LIVE on Twitch" to="https://twitch.tv/uchuujin_ai" />
					</CardItem>
					<CardItem :translate-z="100" :rotate-z="1">
						<FancyLinkButton gradient-color="#5865f2" left-icon="i-logos-discord-icon"
							description="Join my Discord server for updates!"
							to="https://discord.com/invite/FcmBnxJte4" />
					</CardItem>
					<CardItem :translate-z="100" :rotate-z="-1">
						<FancyLinkButton gradient-color="#ee0f0f" left-icon="i-logos-youtube-icon" description="YouTube"
							to="https://www.youtube.com/@uchuujin_ai" />
					</CardItem>
					<CardItem :translate-z="100" :rotate-z="1">
						<FancyLinkButton gradient-color="#ee0f0f" left-icon="i-logos-youtube-icon"
							description="VODs-only Channel" to="https://www.youtube.com/@UchuujinAiVODs" />
					</CardItem>
					<CardItem :translate-z="100" :rotate-z="-1">
						<FancyLinkButton gradient-color="#e0245e" left-icon="i-arcticons-throne"
							description="Throne Wishlist" to="https://throne.com/uchuujin_ai" />
					</CardItem>
					<CardItem :translate-z="100" :rotate-z="1">
						<FancyLinkButton gradient-color="#1da1f2" left-icon="i-logos-x" description="⚫ X (Twitter) ⚫"
							to="https://x.com/uchuujin_ai" />
					</CardItem>
					<CardItem :translate-z="100" :rotate-z="-1">
						<FancyLinkButton gradient-color="#000000" left-icon="i-logos-tiktok-icon"
							description="⚫ TikTok ⚫" to="https://www.tiktok.com/@uchuujin_ai" />
					</CardItem>
					<CardItem :translate-z="100" :rotate-z="1">
						<FancyLinkButton gradient-color="#e1306c" left-icon="i-logos-instagram-icon"
							description="🟠 Instagram 🟠" to="https://www.instagram.com/uchuujin_ai/" />
					</CardItem>
					<CardItem :translate-z="100" :rotate-z="-1">
						<FancyLinkButton gradient-color="#1877f2" left-icon="i-logos-facebook"
							description="🔵 Facebook 🔵" to="https://www.facebook.com/uchuujin.aiii/" />
					</CardItem>
				</CardBody>
			</CardContainer>
		</ClientOnly>
	</UPage>
</template>

<script setup lang="ts">
const isDark = useColorMode().value === 'dark'

useSeoMeta({
	title: 'Uchuujin AI - VTuber',
	description: "I’m Ai (Eye) wawawawa I'm an alien raaaawr (っ °Д °;)っ I play variety games! Howdydo~ ψ(｀∇´)ψ",
	ogImage: 'https://media.uchuujinai.com/site-assets/logo.png',
	ogType: 'profile',
	ogSiteName: 'uchuujinai.com',
	ogLocale: "en_US",
	ogImageAlt: 'Uchuujin AI Logo',
	twitterCard: 'summary_large_image',
	themeColor: "#86d408"
})

</script>