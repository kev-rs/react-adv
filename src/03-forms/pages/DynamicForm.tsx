import { Formik, Form } from 'formik'
import { Input } from '../components/Input2'
import formJson from '../data/config-form.json'
import * as yup from 'yup';

const initialValues:{[key:string]: any} = {};
const fieldsValidations:{[key:string]: any} = {};

formJson.forEach(({ types, validations, name, value }) => {
    initialValues[name] = value;
    if(!validations) return;

    let schema = (yup as any)[types]();

    validations.forEach((rule) => {
        const { params, type } = rule;
        if(!schema[type]) return;
        
        schema = schema[type](...params);
    })
    fieldsValidations[name] = schema;
})

const validationSchema = yup.object({...fieldsValidations})

export const DynamicForm = () => {

  return (
    <div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(formik) => (
                <Form>
                    {formJson.map(({type, options, ...rest}) => (
                        <Input key={rest.name} type={type} options={options} {...rest} />
                    ))}
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>

    </div>
  )
}

export default DynamicForm;

