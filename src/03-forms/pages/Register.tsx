import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm';

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

export const Register = () => {

    const { value, handleInput, reset, name, email, password1, password2, check, msg, isValidEmail } = useForm<Form>({} as Form);

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!check(value)) return;

        console.log(value);
    }

  return (
    <div>
        <form onSubmit={handleSubmit} noValidate>
            <input 
                type="text"
                name='name'
                placeholder="Name"
                onChange={handleInput}
                value={name || ''}
                className={`${name?.length <= 0 && 'has-error'}`}
            />
            {msg?.name && name?.length < 2 && <span>{msg.name}</span>}

            <input 
                type="email"
                name='email'
                placeholder="Email"
                onChange={handleInput}
                value={email || ''}
                className={`${!isValidEmail(email) && 'has-error'}`}
            />
            {msg?.email && !isValidEmail(email) && <span>{msg.email}</span>}

            <input 
                type="password"
                name='password1'
                placeholder="Password"
                onChange={handleInput}
                value={password1 || ''}
                className={`${password1?.length <= 0 && 'has-error'}`}
            />
            {msg?.password && password1?.length < 6 && <span>{msg?.password}</span>}

            <input 
                type="password"
                name='password2'
                placeholder="Repeat Password"
                onChange={handleInput}
                value={password2 || ''}
                className={`${password2?.length <= 0 && 'has-error'}`}
            />
            {msg?.password && password2?.length < 6 && <span>{msg?.password}</span>}
            {password2 !== password1 && <span>{msg?.password2}</span>}

            <button type='submit'>Create</button>
            <button onClick={reset}>Reset</button>
        </form>
    </div>
  )
}

export default Register