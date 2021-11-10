import {TextField} from "@mui/material";

function CustomInput(props) {
    const {name, label, value, onChange, error = null} = props;
    return (
        <TextField
            variant="filled"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            error={error !== null}
            helperText={error}>
        </TextField>
    );
}

export default CustomInput;