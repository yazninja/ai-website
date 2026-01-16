<template>

	<UPage v-if="canUpload" class="flex flex-col h-[93vh] justify-center items-center">
		<!-- Center in page -->
		<UPageCard title="Upload File" class="max-w-md mx-auto ">
			<UFileUpload v-model="file" accept="image/png" icon="i-lucide-image" label="Drop your image here"
				description="PNG only (max. 50MB)" class="w-96 min-h-48" />
			<p v-if="error" class="text-red-500">{{ error }}</p>
			<UButton @click="uploadFile" label="Upload" color="neutral" :disabled="!file" />
		</UPageCard>
	</UPage>
	<div v-else>
		<UPageCard title="Unauthorized" class="max-w-md mx-auto">
			<p class="text-red-500">You are not authorized to upload files. Please provide a valid upload key.</p>
			<UInput v-model="uploadKey" @update:model-value="checkKey()" label="Upload Key"
				placeholder="Enter your upload key" class="mb-4" />
		</UPageCard>
	</div>

</template>

<script setup lang="ts">

const file = ref<File | null>(null);
const error = ref<string | null>(null);
const uploadKey = ref<string | null>(null);
const canUpload = ref(false);

function checkKey() {
	if (uploadKey.value === null) canUpload.value = false;
	else canUpload.value = btoa(uploadKey.value!) === "bWltYW8="
}

async function uploadFile() {
	if (file.value) {
		// Implement your upload logic here

		let res = await $fetch('https://r2.uchuujinai.com/images/uchuuthon.png', {
			headers: {
				Accept: 'text/plain',
				'Content-Type': 'image/png',
				'X-Custom-Auth-Key': uploadKey.value || ''
			},
			method: 'POST',
			mode: 'cors',

			body: await file.value.arrayBuffer()
		})
		console.log(res);


		console.log("Uploading file:", file.value.name);
	} else {
		console.log("No file selected.");
		error.value = "Please select a file to upload.";
	}
}
</script>