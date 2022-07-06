import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Heading, Body } from '../../../utils/Typography'
import tokens from '../../../utils/tokens'
import { ArrowRight } from 'react-feather'

export interface NavigationCardProps {
  title?: string
  desc?: string
  backgroundColor?: 'yellow' | 'white'
  icon?: React.ReactNode
}

const defaultTitle: string = 'Sammenhengende tjenester'
const defaultDesc: string =
  'Få veiledning og råd om hvordan skape sammenhengende tjenester i samarbeid mellom flere virksomheter.'

const Card = styled.a<NavigationCardProps>`
  box-shadow: 0 0 0 1px ${tokens.color.neutral.grey['400']};
  border-radius: 8px;
  padding: 40px 40px 72px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: 0.15s all;
  cursor: pointer;
  color: ${tokens.color.neutral.grey['800']};
  text-decoration: none;
  height: 100%;
  position: relative;

  &:hover {
    box-shadow: 0 0 0 2px ${tokens.color.neutral.grey['800']};
    color: inherit;
  }

  ${({ backgroundColor }) =>
    backgroundColor === 'yellow' &&
    css`
      background: ${tokens.color.brand.second['200']};
      &:hover {
        background: ${tokens.color.brand.second['300']};
      }
      &:active {
        background: ${tokens.color.brand.second['400']};
      }
    `}
`

const CardHeading = styled(Heading)`
  margin-top: 0;
`

const IconContainer = styled.div`
  margin-bottom: 24px;
`

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 32px;
  margin: 0 auto;
`

const CardBody = styled(Body)`
  margin-top: 0;
`

export const NavigationCard: FC<NavigationCardProps> = ({
  title = defaultTitle,
  desc = defaultDesc,
  backgroundColor = 'white',
  icon,
}) => {
  return (
    <Card backgroundColor={backgroundColor} icon={icon}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <CardHeading level={3} size="600">
        {title}
      </CardHeading>
      <CardBody size="300">{desc}</CardBody>
      <ArrowContainer>
        <ArrowRight size={26} />
      </ArrowContainer>
    </Card>
  )
}
