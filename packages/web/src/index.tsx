import { HTMLAttributes, ReactChild } from 'react'
export * from './components/NavigationCard/NavigationCard'
export * from './components/TeaserCard/TeaserCard'
export * from './components/Section/Section'
export * from './components/CourseCard/CourseCard'
export * from './components/Header/Header'
export * from './components/Footer/Footer'
export * from './components/ImageSection/ImageSection'
export * from './components/ImageBanner/ImageBanner'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild
}
