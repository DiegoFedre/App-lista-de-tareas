import { useState } from 'react';

export const useForm = (initialForm = {}) => {
	const [formState, setFormState] = useState(initialForm);

	const onInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	// Con esta funcion voy a resetear el form
	const onResetForm = () => {
		setFormState(initialForm);
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
	};
};
