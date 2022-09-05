import { ChangeEvent, useState } from 'react';
import { Initial_State } from '../pages/Register';

export interface Validation {
    email?:string;
    name?:string;
    password?:string;
    password2?:string;
}

export interface Form {
    initialState: Initial_State;
    validator: any;
}

export const useForm = <T extends Form>({initialState, validator}:T) => {

    const [ value, setValue ] = useState(initialState);
    const [ msg, setMsg ] = useState<Validation>({} as Validation);

    const handleInput = (e:ChangeEvent<HTMLInputElement>):void => {
        setValue(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const reset = ():void => {
        setValue({...initialState});
    }

    const check = ({ name='', email, password1='', password2='' }:Initial_State):boolean => {
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(!mailFormat.test(email)) {
            setMsg(prev => ({...prev, email: 'Invalid Email'}))
            return false;
        }
        if(name.length < 2) {
            setMsg(prev => ({...prev, name: 'Name must be min 2 characters'}))
            return false;
        }

        if(password1 !== password2) {
            setMsg(prev => ({...prev, password2: 'Passwords not match'}))
            return false;
        }
        if(password1.length < 6) {
            setMsg(prev => ({...prev, password: 'Password must be min 6 characters'}))
            return false;
        }

        return true;
    }

    const isValidEmail = (email:string):boolean => {
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        return mailFormat.test(email)
    }

    return { value, ...value, handleInput, reset, check, msg, isValidEmail };
}

