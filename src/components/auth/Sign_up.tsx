import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import jsonForm from '../../data/config-form.json'
import Input from '../form/Input';

const initialValues:{[key:string]: any} = {};
const validationSchema:{[key:string]: any} = {};

jsonForm.forEach(({ name, value, type, validations }) => {
    initialValues[name] = value;
    
    let validator = (yup as any)[type]();
    validations.forEach(({params, type}) => {
        if(!validator[type]) return;

        validator = validator[type](...params);
    })
    validationSchema[name] = validator;
})

const Sign_up = () => {
  return (
    <>
        <h1 className='title'>Register</h1>

        <div className='form-2'>    
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(value) => {
                    console.log(value);
                }}
            >
                {(formik) => (
                    <Form className='form'>
                        {
                            jsonForm.map(({name, label, ...rest}) => (
                                <Input key={name} name={name} label={label} {...rest} />
                            ))
                        }
                        <button type='submit' className='btn btn-primary'>Create</button>
                    </Form>
                )}
            </Formik>
        </div>
    </>
  )
}

export default Sign_up