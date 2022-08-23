import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/index'
import { Route } from '../models/routes.interface';
import { lazy } from 'react'
import NoLazy from '../01-lazyload/pages/NoLazy';

export const routes:Route[] = [
    {
        path: 'lazyload',
        component: lazy(() => import(/* webpackChunkName: "LazyLayoutGG" */'../01-lazyload/layout/LazyLayout')),
        name: 'LazyLoadingNested',
        children: [
            {
                path: 'lazy1',
                component: LazyPage1,
                name: 'Lazy Page => 1',
            },
            {
                path: 'lazy2',
                component: LazyPage2,
                name: 'Lazy Page => 2',
            },
            {
                path: 'lazy3',
                component: LazyPage3,
                name: 'Lazy Page => 3',
            }
        ]
    },
    {
        path: 'nolazy',
        component: NoLazy,
        name: 'NoLazy',
    },
    
];

