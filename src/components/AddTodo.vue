<template>
	<div class="flex">
		<FormInput
			:model-value="modelValue"
			type="text"
			placeholder="What's missing to do?"
			class="rounded-none rounded-l"
			@update:model-value="$emit('update:modelValue', $event)"
			@keypress.enter.prevent="$emit('addItem')"
		></FormInput>
		<button class="btn btn-green rounded-none rounded-r" @click="$emit('addItem')">Add!</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormInput from '../components/FormInput.vue';

export default defineComponent({
	name: 'AddTodo',
	props: {
		modelValue: {
			type: String,
			required: true
		}
	},
	components: {
		FormInput,
	},
	emits: ['addItem', 'update:modelValue'],
	setup() {
		return {};
	}
});
</script>