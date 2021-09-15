<template>
	<div class="rounded shadow max-w-sm">
		<FormInput
			v-model="inputText"
			type="text"
			placeholder="What's missing to do?"
			@keypress.enter.prevent="onAddItem"
			:errors="errors.inputText"
		></FormInput>
		<FormInputError :error="errors.inputText"></FormInputError>
		<FormButton @click="onAddItem">Add!</FormButton>
	</div>
	<div>
		<TodoList :items="items"></TodoList>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FormInput from '../components/FormInput.vue';
import FormButton from '../components/FormButton.vue'
import TodoList from '../components/TodoList.vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import FormInputError from '../components/FormInputError.vue';

interface AddTodoForm {
	inputText: string
}

export default defineComponent({
	name: 'Home',
	components: {
		FormInput,
		FormButton,
		TodoList,
		FormInputError
	},
	setup() {
		const items = ref<string[]>([]);

		const { errors, values: formValues, validate } = useForm<AddTodoForm>({
			initialValues: {
				inputText: ''
			}
		});

		const { value: inputText, resetField: resetInputText } = useField<string>('inputText', yup.string().required().max(255), { validateOnValueUpdate: false })

		const onAddItem = async () => {
			const validationResult = await validate()
			if (validationResult.valid) {
				items.value.push(formValues.inputText);
				resetInputText();
			}
		}

		return { inputText, items, onAddItem, errors }
	}
})
</script>

<style>
</style>
