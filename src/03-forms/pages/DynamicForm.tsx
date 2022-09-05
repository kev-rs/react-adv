import { Formik, Form } from 'formik'
import { Input } from '../components/Input2'
import formJson from '../data/config-form.json'
import * as yup from 'yup';



const initialValues:{[key:string]: any} = {};
const fieldsValidations:{[key:string]: any} = {};

formJson.forEach((input) => {
    initialValues[input.name] = input.value
    if(!input.validations) return;

    let schema = yup.string()

    input.validations.forEach((rule) => {
        if(rule.type === 'required') schema = schema.required(rule.error_message);
        if(rule.type === 'minLength') schema = schema.min((rule as any).value || 2, `Minimo ${(rule as any).value || 2} length`)
        if(rule.type === 'email') schema = schema.email();
        if(rule.type === 'notOneOf') schema = schema.notOneOf((rule as any).value, 'Option not available');
        //TODO: other rules
    })
    fieldsValidations[input.name] = schema;
})

const validationSchema = yup.object({...fieldsValidations})

export const DynamicForm = () => {

    console.log(formJson);

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

