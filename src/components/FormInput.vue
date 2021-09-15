<template>
	<input
		:value="modelValue"
		:type="type"
		class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
		@input="$emit('update:modelValue', $event?.target?.value)"
	/>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

type InputType = 'text'

export default defineComponent({
	name: 'FormInput',
	props: {
		type: {
			type: String as PropType<InputType>,
			required: true
		},
		modelValue: {
			type: [String, Number],
			required: true
		}
	}
});
</script>