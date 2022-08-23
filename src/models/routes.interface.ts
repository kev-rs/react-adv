import { LazyExoticComponent } from "react";

//TODO: see later
type JSX = () => JSX.Element;

export interface Route {
    path: string;
    component: LazyExoticComponent<JSX> | JSX;
    name: string;
    children?: Route[];
}

export interface Routes {
    routes: Route[];
}