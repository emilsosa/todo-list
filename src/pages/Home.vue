<template>
	<div class="flex justify-center">
		<diev class="md:container md:mx-auto px-4">
			<AddTodo v-model="inputText" @add-item="onAddItem" />
			{{ errors }}
			<div>
				<TodoList :items="items"></TodoList>
			</div>
		</diev>
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
import AddTodo from '../components/AddTodo.vue';

export default defineComponent({
	name: 'Home',
	components: {
		FormInput,
		FormButton,
		TodoList,
		FormInputError,
		AddTodo,
	},
	setup() {
		const items = ref<string[]>([]);

		const { errors, values: formValues, validate } = useForm<{ inputText: string }>({
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
