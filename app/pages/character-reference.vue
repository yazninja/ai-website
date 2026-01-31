<script setup lang="ts">
// const items = [
// 	'https://media.uchuujinai.com/model-reference/1%20_%20Full%20Character%20Sheet.png',
// 	'https://media.uchuujinai.com/model-reference/Back%20No%20Hair.png',
// 	'https://media.uchuujinai.com/model-reference/Back.png',
// 	'https://media.uchuujinai.com/model-reference/Front%20Glow.png',
// 	'https://media.uchuujinai.com/model-reference/Front.png',
// 	'https://media.uchuujinai.com/model-reference/Side.png',
// 	'https://media.uchuujinai.com/model-reference/Side%20with%20Jacket.png',
// ]

const items = [
	{ title: 'Full Character Sheet', url: 'https://media.uchuujinai.com/model-reference/1%20_%20Full%20Character%20Sheet.png' },
	{ title: 'Back No Hair', url: 'https://media.uchuujinai.com/model-reference/Back%20No%20Hair.png' },
	{ title: 'Back', url: 'https://media.uchuujinai.com/model-reference/Back.png' },
	{ title: 'Front Glow', url: 'https://media.uchuujinai.com/model-reference/Front%20Glow.png' },
	{ title: 'Front', url: 'https://media.uchuujinai.com/model-reference/Front.png' },
	{ title: 'Side', url: 'https://media.uchuujinai.com/model-reference/Side.png' },
	{ title: 'Side with Jacket', url: 'https://media.uchuujinai.com/model-reference/Side%20with%20Jacket.png' },
	{ title: 'Mascot Reference', url: 'https://media.uchuujinai.com/model-reference/Mascot%20Reference.png' },
]

const carousel = useTemplateRef('carousel')
const activeIndex = ref(0)

function onClickPrev() {
	activeIndex.value--
}
function onClickNext() {
	activeIndex.value++
}
function onSelect(index: number) {
	activeIndex.value = index
}

function select(index: number) {
	activeIndex.value = index

	carousel.value?.emblaApi?.scrollTo(index)
}
</script>

<template>
	<div class="flex-1 w-full">
		<UCarousel ref="carousel" v-slot="{ item }" arrows :items="items" :prev="{ onClick: onClickPrev }"
			:next="{ onClick: onClickNext }" class="w-full max-w-xs lg:max-w-xl mx-auto" @select="onSelect">
			<div class="text-center mt-2 font-bold text-xl text-neutral-800 dark:text-neutral-200 my-4">{{ item.title }}
			</div>
			<NuxtImg :src="item.url" width="1200" height="1500" class="rounded-lg" />

		</UCarousel>

		<div class="flex gap-1 justify-between pt-4 max-w-xs mx-auto">
			<div v-for="(item, index) in items" :key="index"
				class="size-11 opacity-25 hover:opacity-100 transition-opacity"
				:class="{ 'opacity-100': activeIndex === index }" @click="select(index)">
				<img :src="item.url" width="44" height="44" class="rounded-lg">
			</div>
		</div>
	</div>
</template>