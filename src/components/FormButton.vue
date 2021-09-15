<template>
	<button
		class="py-2 px-4 text-white font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none bg-green-400 hover:bg-green-800 transition-colors duration-75 ease-in"
	>
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'FormButton'
});
</script>

<style>
</style>