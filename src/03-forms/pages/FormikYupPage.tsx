import { useFormik } from 'formik'
import * as yup from 'yup'
import '../styles/styles.css';

const FormikYupPage = () => {

    const { handleSubmit, handleReset, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: yup.object({
            firstName: yup.string().required('name is required').min(2, 'Must have 2 characters or more'),
            lastName: yup.string().required('last name is required').min(2, 'Must have 2 characters or more'),
            email: yup.string().required().email(),
        })
    });

  return (
    <div>
        <h1>Formik Yup Tutorial</h1>
        
        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" {...getFieldProps('firstName')} />
            <span>{touched.firstName && errors.firstName}</span>

            <label htmlFor="lastName">Last Name</label>
            <input type="text" {...getFieldProps('lastName')} />
            <span>{touched.lastName && errors.lastName}</span>

            <label htmlFor="email">Email</label>
            <input type="email" {...getFieldProps('email')} />
            <span>{touched.email && errors.email}</span>
            
            <button type='submit'>Create</button>
            <button onClick={handleReset}>Reset</button>
        </form>
    </div>
  )
}

export default FormikYupPage;