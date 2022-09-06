import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import jsonForm from '../../data/config-form.json'
import Input from '../form/Input';

const initialValues:{[key:string]: any} = {};
const validationFields:{[key:string]: any} = {};

jsonForm.forEach(({ name, value, types, validations }) => {
    initialValues[name] = value;
    
    let validator = (yup as any)[types]();
    
    validations.forEach(({params, type}) => {
        if(!validator[type]) return;

        validator = validator[type](...params);
    })
    validationFields[name] = validator;
})

const validationSchema = yup.object({...validationFields})

const Sign_up = () => {
    console.log(jsonForm);
    
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
                            jsonForm.map(({name, label, value, ...rest}) => (
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