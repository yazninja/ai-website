<template>
	<div class="flex w-full justify-center items-center">
		<div class="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 p-4">
			<div v-for="(image, index) in images" :key="index" class="p-2 isolate relative group">
				<video v-if="image.url.endsWith('.mp4')" autoplay muted loop
					class="rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300 group-hover:brightness-50">
					<source :src="image.url" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<NuxtImg v-else :src="image.url" alt="Art Image"
					class="rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300 group-hover:brightness-50 w-full" />
				<div class="hidden hover:block group-hover:block">
					<div class="absolute top-2 left-2 text-white font-bold text-sm mt-2 break-words">{{
						image.credit?.title || image.url.split('/').pop() }}</div>
					<UButton size="sm" variant="solid" class="absolute top-2 right-4 rounded-full"
						@click="() => { navigateTo(image.url, { external: true, open: { target: '_blank' } }); }">View
						Full
					</UButton>
					<div v-if="image.credit"
						class="absolute bottom-2 left-2 text-white font-bold text-sm mt-2 break-words">
						<UIcon name="mdi-account-circle" class="inline-block mr-1" />
						<a v-if="image.credit.link" :href="image.credit.link" target="_blank" rel="noopener noreferrer"
							class="underline">{{ image.credit.name }}</a>
						<span v-else>{{ image.credit.name }}</span>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const images = [];
const URL_PREFIX = 'https://media.uchuujinai.com/'
const res = await $fetch('https://r2.uchuujinai.com/getAllImages');
const imageKeys = JSON.parse(res);
console.log(imageKeys, typeof imageKeys);

const credits = [
	{ key: 'roieoekaki.png', name: 'roieoekaki', link: 'https://skeb.jp/@roieoekaki', title: 'Old Pre-made Model' },
	{ key: '500_500px.png', name: '500_500px', link: 'https://skeb.jp/@500_500px', title: 'Old Pre-made Model' },
	{ key: 'Masyssxx.jpg', name: 'Masyssxx', link: '', title: 'Old Pre-made Model' },
	{ key: 'H1aMx.gif', name: 'H1aMx', link: 'https://skeb.jp/@H1aMx', title: 'Old Pre-made Model' },
	{ key: 'ASUKA2k.mp4', name: 'ASUKA2k', link: 'https://skeb.jp/@ASUKA2k', title: 'Version 0 Commission' },
	{ key: 'babu_2_.png', name: 'babu2', link: 'https://skeb.jp/@babu_2_', title: 'Version 0 Commission' },
	{ key: 'babu_2_(2).png', name: 'babu2', link: 'https://skeb.jp/@babu_2_', title: 'Version 0 Commission' },
	{ key: 'aka_fuji_.png', name: 'akafuji', link: 'https://skeb.jp/@aka_fuji_', title: 'Version 0 Commission' },
	{ key: 'rizame120.png', name: 'rizame120', link: 'https://skeb.jp/@rizame120', title: 'Version 0 Commission' },
	{ key: 'nasukeke_l_nuwa.png', name: 'nasukeke_l_nuwa', link: 'https://skeb.jp/@nasukeke_l_nuwa', title: 'Version 0 Commission' },
	{ key: 'Roushi_772.gif', name: 'Roushi_772', link: 'https://skeb.jp/@Roushi_772', title: 'Version 0 Commission' },

	{ key: 'shimazu_akadu.mp4', name: 'shimazu_akadu', link: 'https://skeb.jp/@shimazu_akadu', title: 'Version 0 Commission' },
	{ key: 'YzgHbpMVbQmjzfh.png', name: 'YzgHbpMVbQmjzfh', link: 'https://skeb.jp/@YzgHbpMVbQmjzfh', title: 'Version 0 Commission' },
	{ key: 'shir0_zzZ.png', name: 'shir0_zzZ', link: 'https://skeb.jp/@shir0_zzZ', title: 'Version 0 Commission' },
	{ key: 'wabu_mement.png', name: 'wabu_mement', link: 'https://skeb.jp/@wabu_mement', title: 'Version 0 Commission' },
	{ key: 'poroporosiisan.png', name: 'poroporosiisan', link: 'https://skeb.jp/@poroporosiisan', title: 'Version 0 Commission' },
	{ key: 'inoue.mp4', name: 'inoue', link: 'https://skeb.jp/@inoue', title: 'Version 0 Commission' },
	{ key: 'anone2259.png', name: 'anone2259', link: 'https://skeb.jp/@anone2259', title: 'Version 0 Commission' },
	{ key: 'anone2259(2).png', name: 'anone2259', link: 'https://skeb.jp/@anone2259', title: 'Version 0 Commission' },
	{ key: 'tanishi_0.png', name: 'tanishi_0', link: 'https://skeb.jp/@tanishi_0', title: 'Version 0 Commission' },
	{ key: 'Katutika_yuzuki.png', name: 'Katutika_yuzuki', link: 'https://skeb.jp/@Katutika_yuzuki', title: 'Version 0 Commission' },
	{ key: '86773_.png', name: '86773', link: 'https://skeb.jp/@86773', title: 'Version 0 Commission' },
	{ key: 'sweetpotechi103.png', name: 'sweetpotechi103', link: 'https://skeb.jp/@sweetpotechi103', title: 'Version 0 Commission' },
	{ key: 'lyriziak.png', name: 'lyriziak', link: 'https://lyriziak.carrd.co/', title: 'Version 0 Commission' },
	{ key: '00chyaa.gif', name: '00chyaa', link: 'https://vgen.co/00chyaa', title: 'Version 0 Commission' },

];



for (const key of imageKeys.objects) {
	const credit = credits.find(credit => credit.key === key.split('/').pop());
	console.log('Found credit for', key, credit);
	images.push({
		url: URL_PREFIX + key,
		credit: credit ? credit : null
	});
}

/*
ASUKA2k
https://skeb.jp/@ASUKA2k

babu2
https://skeb.jp/@babu_2_

akafuji
https://skeb.jp/@aka_fuji_

rizame120
https://skeb.jp/@rizame120

nasukeke_l_nuwa
https://skeb.jp/@nasukeke_l_nuwa

Roushi_772
https://skeb.jp/@Roushi_772

500_500px
https://skeb.jp/@500_500px

shimazu_akadu
https://skeb.jp/@shimazu_akadu

YzgHbpMVbQmjzfh
https://skeb.jp/@YzgHbpMVbQmjzfh

shir0_zzZ
https://skeb.jp/@shir0_zzZ

wabu_mement
https://skeb.jp/@wabu_mement

poroporosiisan
https://skeb.jp/@poroporosiisan

inoue
https://skeb.jp/@inoue

anone2259
https://skeb.jp/@anone2259

tanishi_0
https://skeb.jp/@tanishi_0

Katutika_yuzuki
https://skeb.jp/@Katutika_yuzuki

86773
https://skeb.jp/@86773

sweetpotechi103
https://skeb.jp/@sweetpotechi103

lyriziak
https://lyriziak.carrd.co/

00chyaa
https://vgen.co/00chyaa 
*/



</script>