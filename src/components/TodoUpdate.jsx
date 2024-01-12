import React, { useRef } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';
import { useState } from 'react';

const TodoUpdate = ({ todo, handleUpdateTodo }) => {
	const { updateDescription, onInputChange } = useForm({
		updateDescription: todo.description,
	});

	const [disabled, setDisabled] = useState(true);
	const foscusInputRef = useRef();

	const onSubmitUpdate = (e) => {
		e.preventDefault();

		const id = todo.id;
		const description = updateDescription;

		handleUpdateTodo(id, description);

		setDisabled(!disabled);
		foscusInputRef.current.focus();
	};

	return (
		<form onSubmit={onSubmitUpdate}>
			<input
				type="text"
				className={`input-update ${todo.done ? 'text-decoration-dashed' : ''}`}
				name="updateDescription"
				value={updateDescription}
				onChange={onInputChange}
				placeholder="¿Qué hay que hacer?"
				readOnly={disabled}
				ref={foscusInputRef}
			/>

			<button className="btn-edit" type="submit">
				<FaEdit />
			</button>
		</form>
	);
};

export default TodoUpdate;
