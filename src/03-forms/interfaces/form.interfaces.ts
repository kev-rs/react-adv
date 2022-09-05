export interface Option {
    value?: string;
    text: string;
}

export interface Options {
    [key:string]: Option;
}