import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import Input from '../components/Input2';

export interface Initial_State {
    name:string;
    email:string;
    password1:string;
    password2:string;
}

export interface Form {
    initialState: Initial_State;
    validator: any;
}

export const RegisterFormikPage = () => {

    const { value, handleInput, reset, name, email, password1, password2, check, msg, isValidEmail } = useForm<Form>({} as Form);

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!check(value)) return;

        console.log(value);
    }

  return (
    <div>
        <h1>Register</h1>
        <hr />

        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                confirm_password: '',
                terms: false,
            }}
            validationSchema={yup.object({
                name: yup.string().required().min(2).max(15),
                email: yup.string().required().email(),
                password: yup.string().required().min(6),
                confirm_password: yup.string().required('confirm password is a required field').min(6).oneOf([yup.ref('password'), null], 'Passwords must match'),
                terms: yup.boolean().isTrue('*'),
            })}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(formik) => (
                <Form>
                    <Input type='text' name='name' label='Name' placeholder='name' />
                    <Input type='email' name='email' label='Email' placeholder='user@mail.com' />
                    <Input type='password' name='password' label='Password' placeholder='Password' />                    
                    <Input type='password' name='confirm_password' label='confirm password' placeholder='Repeat Password' />
                    <Input type='checkbox' name='terms' label='Terms & Conditions' />

                    <button type='submit'>Create</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default RegisterFormikPage