import { useField, ErrorMessage } from 'formik';
import { Option } from '../interfaces/form.interfaces';

interface Props {
    label: string;
    name: string;
    options?: Option[];
    [x:string]: any;
}

export const Select = ({label, options, ...props}:Props) => {

    const [ field ] = useField(props);

  return (
    <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props}>
            {options?.map(({id, value, text}) => (
                <option value={value} key={id}>{text}</option>
            ))}
        </select>
        <ErrorMessage name={props.name} component='span' className='error' />
    </>
  )
}

export default Select