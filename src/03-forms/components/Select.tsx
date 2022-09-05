import { useField, ErrorMessage } from 'formik';
import { Options } from '../interfaces/form.interfaces';

interface Props {
    label: string;
    name: string;
    options?: Options;
    [x:string]: any;
}

export const Select = ({label, options, ...props}:Props) => {

    const [ field ] = useField(props);

  return (
    <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props}>
            {Object.entries(options!).map(([key, value]) => (
                <option value={value.value} key={key}>{value.text}</option>
            ))}
        </select>
        <ErrorMessage name={props.name} component='span' className='error' />
    </>
  )
}

export default Select