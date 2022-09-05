import { useField, ErrorMessage } from 'formik';
import Select from './Select';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password' | 'checkbox' | string;
    placeholder?: string;
    [x:string]: any;
}

export const Input = ({label, options, ...props}:Props) => {

    const [ field ] = useField({...props, type: 'select'});

  return (
    <>
        {props.type === 'checkbox'
            &&
                <>
                    <label>
                        <ErrorMessage name={props.name} component='span' />
                        {label}
                        <input {...props} {...field} />
                    </label>
                </>
                
        }
        {props.type === 'select'
            ? 
                <Select options={options} label={label} name={props.name} />
            :
                <>
                    <label>{label}</label>
                    <input {...props} {...field} />
                    <ErrorMessage name={props.name} component='span' />
                </>
        }
        
    </>
  )
}

export default Input