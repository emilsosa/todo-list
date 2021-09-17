<template>
	<input
		:value="modelValue"
		:type="type"
		class="form-input"
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