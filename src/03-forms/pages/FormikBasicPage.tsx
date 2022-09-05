import { useFormik, Formik, FormikErrors } from 'formik'
import '../styles/styles.css';

interface Values {
    firstName:string;
    lastName:string;
    email:string;
}

const FormikBasicPage = () => {

    const validate = ({firstName, lastName, email}:Values) => {
        const errors:FormikErrors<Values> = {};

        if(!firstName) {
            errors.firstName = 'Required';
        } else if(firstName.length < 2) {
            errors.firstName = 'Must be 2 characters or more';
        }

        if(!lastName) {
            errors.lastName = 'Required';
        } else if(lastName.length < 2) {
            errors.lastName = 'Must be 2 characters or more';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }
        
        // console.log(errors);
        
        return errors;
    }

    const { handleChange, handleSubmit, values, handleReset, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            console.log(values);
        },
        validate,
    });
    

  return (
    <div>
        <h1>Formik Basic Tutorial</h1>
        
        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                name='firstName'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
            />
            <span>{touched.firstName && errors.firstName}</span>

            <label htmlFor="firstName">Last Name</label>
            <input 
                type="text" 
                name='lastName'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
            />
            <span>{touched.lastName && errors.lastName}</span>

            <label htmlFor="firstName">Email</label>
            <input 
                type="email" 
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
            <span>{touched.email && errors.email}</span>
            {/* <span>{validate(values).firstName}</span> */}
            
            <button type='submit'>Create</button>
            <button onClick={handleReset}>Reset</button>
        </form>
    </div>
  )
}

export default FormikBasicPage