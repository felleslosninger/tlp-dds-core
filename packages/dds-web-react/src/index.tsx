import { HTMLAttributes, ReactChild } from 'react';
export * from './components/ImageSection';

export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** custom content, defaults to 'the snozzberries taste like snozzberries' */
    children?: ReactChild;
}
