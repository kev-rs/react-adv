import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password' | 'checkbox';
    placeholder?: string;
    [x:string]: any;
}

export const Input = ({label, ...props}:Props) => {

    const [ field ] = useField(props);
    
  return (
    <>
        {
            props.type !== 'checkbox' 
            ?
                <>
                    <label htmlFor={props.id || props.name}>{label}
                        <ErrorMessage name={props.name} component='span' className='error' />
                    </label>
                    <input className='' {...field} {...props} />
                </>
            :
                <>
                    <label>
                        <ErrorMessage name={props.name} component='span' className='error' />
                        {label}
                        <input className='' {...field} {...props} />
                    </label>
                </>
        }
    </>

  )
}

export default Input