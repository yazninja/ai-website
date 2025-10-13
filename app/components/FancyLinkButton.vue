<template>
	<NuxtLink :to="props.to" target="_blank" rel="noopener noreferrer">
		<div :class="[
			'cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl group relative flex w-full overflow-hidden rounded-xl border dark:border-neutral-600 bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white',
			$props.class,
		]" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
			<div :class="cn('relative z-10', props.slotClass)">
				<div class="flex items-center justify-around gap-2 px-4 py-3">
					<Icon v-if="props.leftIcon" :name="props.leftIcon" class="size-6" />
					<div class="flex-grow-1 w-full text-center">
						<div v-if="props.description" class=" text-sm opacity-75">{{ props.description }}
						</div>
					</div>

				</div>
			</div>
			<div class="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				:style="{
					background: backgroundStyle,
					opacity: gradientOpacity,
				}"></div>
		</div>
	</NuxtLink>
</template>

<script setup lang="ts">

const props = withDefaults(
	defineProps<{
		class?: HTMLAttributes["class"];
		slotClass?: HTMLAttributes["class"];
		gradientSize?: number;
		gradientColor?: string;
		gradientOpacity?: number;
		leftIcon?: string;
		description?: string;
		to?: string;
	}>(),
	{
		class: "",
		slotClass: "w-full",
		gradientSize: 200,
		gradientColor: "#262626",
		gradientOpacity: 0.8,
		to: "#",
	},
);

const mouseX = ref(-props.gradientSize * 10);
const mouseY = ref(-props.gradientSize * 10);

function handleMouseMove(e: MouseEvent) {
	const target = e.currentTarget as HTMLElement;
	const rect = target.getBoundingClientRect();
	mouseX.value = e.clientX - rect.left;
	mouseY.value = e.clientY - rect.top;
}

function handleMouseLeave() {
	mouseX.value = -props.gradientSize * 10;
	mouseY.value = -props.gradientSize * 10;
}

onMounted(() => {
	mouseX.value = -props.gradientSize * 10;
	mouseY.value = -props.gradientSize * 10;
});

const backgroundStyle = computed(() => {
	return `radial-gradient(
    circle at ${mouseX.value}px ${mouseY.value}px,
    ${props.gradientColor} 0%,
    rgba(0, 0, 0, 0) 70%
  )`;
});
</script>