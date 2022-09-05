// import { Options } from "../interfaces/form.interfaces";

interface Options {
    [key:string]: any;
}

export const options:Options = {
    '1': {value: '', text: 'Select'},
    '2': {value: 'dev', text: 'Developer'},
    '3': {value: 'designer', text: 'Designer'},
    '4': {value: 'senior', text: 'Senior'},
    '5': {value: 'jr', text: 'jr'}
}