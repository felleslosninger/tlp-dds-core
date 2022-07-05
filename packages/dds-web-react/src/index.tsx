import { HTMLAttributes, ReactChild } from 'react'
export * from './components/NavigationCard/NavigationCard'
export * from './components/TeaserCard/TeaserCard'
export * from './components/Section/Section'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild
}
