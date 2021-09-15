<template>{{ error }}</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'FormInputError',
	props: {
		error: {
			type: String,
			required: false
		}
	}
})
</script>

<style>
</style>