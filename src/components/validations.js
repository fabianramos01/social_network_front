const requiredErrorMessage = 'Campo requerido';

export const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.title) {
        errors.title = requiredErrorMessage;
    }
    if (!values.content) {
        errors.content = requiredErrorMessage;
    }
    if (!values.user_email) {
        errors.user_email = requiredErrorMessage;
    } else if (!regex.test(values.user_email)) {
        errors.user_email = 'Email inválido';
    }
    return errors
}