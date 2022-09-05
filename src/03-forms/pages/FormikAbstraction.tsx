import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { Input, Select } from '../components'
import { options } from '../data/options';
import '../styles/styles.css';

const FormikAbstraction = () => {

  return (
    <div>
        <h1>Formik Abstraction Tutorial</h1>

        <Formik
            initialValues={{firstName: '', lastName: '', email: '', terms: false, ocupation: ''}}
            validationSchema={yup.object({
                firstName: yup.string().required('*').min(2, '*'),
                lastName: yup.string().required('*').min(2, '*'),
                email: yup.string().required('*').email('*'),
                terms: yup.boolean().isTrue('*'),
                ocupation: yup.string().required('Select something').notOneOf(['jr'], 'This option is not available'),
            })}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(formik) => (
                <Form>
                    <Input label='First Name' name='firstName' />
                    <Input label='Last name' name='lastName' />
                    <Input label='Email' name='email' type='email' />
                    <Select label='Job Type' name='ocupation' options={options} />
                    <Input label='Terms & conditions' name='terms' type='checkbox' />

                    <button type='submit'>Create</button>
                    <button onClick={formik.handleReset}>Reset</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default FormikAbstraction;