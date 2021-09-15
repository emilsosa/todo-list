<template>
	<ul>
		<li v-for="(item, index) in items" :key="index">{{ item }}</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	props: {
		items: {
			type: Array as PropType<string[]>
		}
	}
})
</script>

<style>
</style>