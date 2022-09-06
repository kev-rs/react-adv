import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    className?: string;
    tag?: string;
    [key:string]: any;
}

const Input = ({label, ...props}:Props) => {

    const [ field ] = useField(props);

  return (
    <>
        <label>{label}</label>
        <input {...field} {...props} />
        <ErrorMessage name={props.name} component={'span'} />
    </>
  )
}

export default Input