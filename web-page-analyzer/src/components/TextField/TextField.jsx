import MUITextField from '@mui/material/TextField';

function TextField({
	id,
	disabled,
	placeholder,
	label,
	type,
	value,
	onChange,
	variant = 'outlined',
}) {
	return (
		<div>
			<MUITextField
				id={id}
				disabled={disabled}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
				variant={variant}
				label={label}
				fullWidth
			/>
		</div>
	);
}

export default TextField;
