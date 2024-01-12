import React from 'react';
import { useForm } from '../hooks/useForm';

const TodoAdd = ({ handleNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});
	const onFormSubmit = (e) => {
		e.preventDefault();

		// Compruebo si description.length es mayor a 1. Si es igual a 0 o menos es porque no he escrito nada
		if (description.length <= 1) {
			return;
		}

		// Creo el esquema del new todo, es decir, de la tarea
		let newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type="text"
				className="input-add"
				name="description"
				value={description}
				onChange={onInputChange}
				placeholder="¿Qué hay que hacer?"
			/>

			<button className="btn-add" type="submit">
				Agregar
			</button>
		</form>
	);
};

export default TodoAdd;
