const yup = require('yup');

function createUsersValidation(data) {
    const schema = yup.object().shape({
        name = yup.string().min(5).matches(/^[a-z]+$/).required('No se ha enviado el campo name que es obligatorio'),
        username = yup.string().min(5).matches(/^[a-z]+$/).required('No se ha enviado el campo username que es obligatorio'),
        password = yup.min(5).required('No se ha enviado el campo password que es obligatorio')
    });
    schema.validateSync(data);
} 