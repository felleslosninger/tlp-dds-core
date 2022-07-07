import { HTMLAttributes, ReactChild } from 'react'

export * from './components/Button/Button'
export * from './components/Heading/Heading'
export * from './components/Body/Body'
export * from './components/Ingress/Ingress'
export * from './components/Interface/Interface'
export * from './components/TitleIcon/TitleIcon'
export * from './components/globalStyles'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild
}
