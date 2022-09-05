import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import '../styles/styles.css';

const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components Tutorial</h1>

        <Formik
            initialValues={{firstName: '', lastName: '', email: '', terms: false, ocupation: ''}}
            validationSchema={yup.object({
                firstName: yup.string().required('*').min(2, '*'),
                lastName: yup.string().required('*').min(2, '*'),
                email: yup.string().required('*').email(),
                terms: yup.boolean().isTrue('*'),
                ocupation: yup.string().required('Select something').notOneOf(['jr'], 'This option is not available'),
            })}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({handleReset}) => (
                <Form>
                    <label htmlFor="firstName">
                        First Name
                        <ErrorMessage name='firstName' component='span' className='error-ts' />
                    </label>
                    <Field type='text' name='firstName' />
        
                    <label htmlFor="lastName">
                        Last Name
                        <ErrorMessage name='lastName' component='span' className='error-ts' />
                    </label>
                    <Field type='text' name='lastName' />
        
                    <label htmlFor="email">
                        Email
                        <ErrorMessage name='email' component='span' className='error-ts' />
                    </label>
                    <Field type='email' name='email' />

                    <label htmlFor="">Job Type</label>
                    <Field name='ocupation' as='select'>
                        <option value="">Select</option>
                        <option value="dev">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="senior">Senior</option>
                        <option value="jr">jr</option>
                    </Field>
                    <ErrorMessage name='ocupation' component='span' />

                    <label>
                        <ErrorMessage name='terms' component='span' />
                        Terms and conditions                    
                        <Field type='checkbox' name='terms'/>
                    </label>
                    
                    <button type='submit'>Create</button>
                    <button onClick={handleReset}>Reset</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default FormikComponents;