import {useState} from "react";
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles((theme)=> ({
    root: {
        '& .MuiFormControl-root': {
            width: '100%',
            margin: "0.5rem auto",
        }
    }
}))

function UseForm(initialValues) {
    const [values, setValues] = useState(initialValues)

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        handleInputChange
    };
}

function Form(props) {
    const classes = useStyle();

    return (
        <form className={classes.root}>
            {props.children}
        </form>
    );
}

export { UseForm, Form };