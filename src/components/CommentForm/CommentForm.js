import {UseForm, Form} from "../useForm";
import CustomInput from "../controls/CustomInput";
import PopupForm from "../PopupForm";
import {useState} from "react";
import {createComment} from "../../services/post.services";
import {isEmptyObject} from "../../utils/common";
import {validate} from "../validations";


const initialValues = {
    title: '',
    content: '',
    user_email: ''
}

function CommentForm(props) {
    const [loading, setLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({})
    const {openPopup, setOpenPopup, handleClose, post, setSnackBarState, addCommentToCount} = props;
    const {values, handleInputChange} = UseForm(initialValues);

    const handleSubmit = () => {
        setLoading(true);
        const errors = validate(values);
        setFormErrors(errors);
        if (isEmptyObject(errors)) {
            console.log(post)
            createComment(post.id, values)
                .then(data => {
                    setOpenPopup(false);
                    addCommentToCount()
                })
                .catch(e => {
                    console.log('Error', e);
                })
                .finally(() => setLoading(false));
            setSnackBarState({open: true, message: `Se creó el comentario ${values.title}`})
        }
        setLoading(false);
    }

    return (
        <PopupForm
            title="Crear Comentario"
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
        </PopupForm>
    );
}

export default CommentForm;