import {Snackbar, Alert} from "@mui/material";
import {UseForm, Form} from "../useForm";
import CustomInput from "../controls/CustomInput";
import PopupForm from "../PopupForm";
import {useState} from "react";
import {createPost} from "../../services/post.services";
import {isEmptyObject} from "../../utils/common";
import {validate} from "../validations";


const initialValues = {
    title: '',
    content: '',
    user_email: ''
}

function PostForm(props) {
    const [loading, setLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({})
    const [snackBarState, setSnackBarState] = useState({
        open: false,
        message: ''
    });
    const {openPopup, setOpenPopup, handleClose} = props;
    const {values, handleInputChange} = UseForm(initialValues);

    const handleSubmit = () => {
        setLoading(true);
        const errors = validate(values);
        setFormErrors(errors);
        if (isEmptyObject(errors)) {
            createPost(values)
                .then(data => {
                    setOpenPopup(false);
                })
                .catch(e => {
                    console.log('Error', e);
                })
                .finally(() => setLoading(false));
            setSnackBarState({open: true, message: `Se creo el post ${values.title}`})
        }
        setLoading(false);
    }

    return (
        <PopupForm
            title="Crear Post"
            openPopup={openPopup}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            loading={loading}
        >
            <Form>
                <CustomInput
                    label="Nombre"
                    name="title"
                    value={values.title}
                    onChange={handleInputChange}
                    error={formErrors.title}
                />
                <CustomInput
                    name="content"
                    label="Contenido"
                    value={values.content}
                    onChange={handleInputChange}
                    error={formErrors.content}
                />
                <CustomInput
                    label="Email"
                    name="user_email"
                    value={values.user_email}
                    onChange={handleInputChange}
                    error={formErrors.user_email}
                />
            </Form>

            <Snackbar
                autoHideDuration={6000}
                open={snackBarState.open}
                message={snackBarState.message}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    {snackBarState.message}
                </Alert>
            </Snackbar>
        </PopupForm>
    );
}

export default PostForm;