import { Formik, Form } from 'formik'
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import configLogin from '../../data/login.json'
import Input from '../form/Input';

const initialValues:{[key:string]: any} = {};
const validationFields:{[key:string]: any} = {};

configLogin.forEach((rule) => {
    initialValues[rule.name] = rule.value;
    
    let validator = (yup as any)[rule.types]();
    
    rule.validations.forEach(({params, type}) => {
        if(!validator[type]) return;

        validator = validator[type](...params);
    })
    validationFields[rule.name] = validator;
})

const validationSchema = yup.object({...validationFields})

const Sign_in = () => {

  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/');
  }

  return (
    <div className='parent-form'>
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
                            configLogin.map(({name, label, value, ...rest}) => (
                                <Input key={name} name={name} label={label} {...rest} />
                            ))
                        }
                        <button 
                          type='submit' 
                          className='btn btn-primary'
                          onClick={handleLogin}
                        >Login</button>
                        <Link to='/auth/register'>Create Account</Link>
                    </Form>
                )}
            </Formik>
        </div>
    </div>
  )
}

export default Sign_in;