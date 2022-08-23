import { LazyExoticComponent } from "react";

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

