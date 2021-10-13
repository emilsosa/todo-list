<template>
	<transition>
		<div
			v-if="Object.keys(errors).length"
			class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
			role="alert"
		>
			<div class="font-bold">Holy smokes!</div>
			<span class="block sm:inline">Something seriously bad happened.</span>
		</div>
	</transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'Alert',
	props: {
		errors: {
			type: Object,
			required: true
		}
	}
});
</script>

<style>
</style>