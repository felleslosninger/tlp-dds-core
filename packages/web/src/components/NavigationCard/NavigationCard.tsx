import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Heading, Body } from '@digdir/ds-core-react'
import tokens from '@digdir/ds-tokens/build/tokens'
import { ArrowRight } from 'react-feather'

export interface NavigationCardProps {
  title?: string
  desc?: string
  backgroundColor?: 'white' | 'first' | 'second' | 'third'
  iconBackgroundColor?: 'first' | 'second' | 'third'
  icon?: React.ReactNode
}

interface IconContainerProps {
  iconBackgroundColor?: 'first' | 'second' | 'third' | 'None'
}

const defaultTitle: string = 'Sammenhengende tjenester'
const defaultDesc: string =
  'Få veiledning og råd om hvordan skape sammenhengende tjenester i samarbeid mellom flere virksomheter.'

const Card = styled.a<NavigationCardProps>(
  (props) => css`
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
    background-color: white;
    box-sizing: border-box;

    :hover {
      box-shadow: 0 0 0 2px ${tokens.color.neutral.grey['800']};
      background-color: ${tokens.color.neutral.grey['200']};
      color: inherit;
    }

    :active {
      background-color: ${tokens.color.neutral.grey['300']};
    }

    ${props.backgroundColor === 'first' &&
    css`
      background: ${tokens.color.brand.first['200']};
      
      :hover {
        background: ${tokens.color.brand.first['300']};

        ${IconContainer} {
          background-color: ${tokens.color.brand.first['400']};
        }
      :active {
        background: ${tokens.color.brand.first['400']};

        ${IconContainer} {
          background-color: ${tokens.color.brand.first['500']};
        }
      }
    `}

    ${props.backgroundColor === 'second' &&
    css`
      background: ${tokens.color.brand.second['200']};
      :hover {
        background: ${tokens.color.brand.second['300']};

        ${IconContainer} {
          background-color: ${tokens.color.brand.second['400']};
        }
      }
      :active {
        background: ${tokens.color.brand.second['400']};

        ${IconContainer} {
          background-color: ${tokens.color.brand.second['500']};
        }
      }
    `}

    ${props.backgroundColor === 'third' &&
    css`
      background: ${tokens.color.brand.third['200']};
      :hover {
        background: ${tokens.color.brand.third['300']};

        ${IconContainer} {
          background-color: ${tokens.color.brand.third['400']};
        }
      }
      :active {
        background: ${tokens.color.brand.third['400']};

        ${IconContainer} {
          background-color: ${tokens.color.brand.third['500']};
        }
      }
    `}


    ${!props.iconBackgroundColor &&
    css`
      :hover,
      :active {
        ${IconContainer} {
          background-color: transparent;
        }
      }
    `}
  `,
)

const IconContainer = styled.div<IconContainerProps>(
  (props) => css`
    margin-bottom: 24px;
    transition: 0.15s all;

    ${props.iconBackgroundColor &&
    css`
      height: 72px;
      width: 72px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        height: 38px;
        width: 38px;
      }
    `}

    ${props.iconBackgroundColor === 'first' &&
    css`
      background-color: ${tokens.color.brand.first['300']};
    `}

    ${props.iconBackgroundColor === 'second' &&
    css`
      background-color: ${tokens.color.brand.second['300']};
    `}

    ${props.iconBackgroundColor === 'third' &&
    css`
      background-color: ${tokens.color.brand.third['300']};
    `}
  `,
)

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 32px;
  margin: 0 auto;
`

export const NavigationCard: FC<NavigationCardProps> = ({
  title = defaultTitle,
  desc = defaultDesc,
  backgroundColor = 'white',
  icon,
  iconBackgroundColor,
}) => {
  return (
    <Card
      backgroundColor={backgroundColor}
      iconBackgroundColor={iconBackgroundColor}
      icon={icon}
    >
      {icon && (
        <IconContainer iconBackgroundColor={iconBackgroundColor}>
          {icon}
        </IconContainer>
      )}
      <Heading level={3} size="600" mb={2}>
        {title}
      </Heading>
      <Body size="300" mb={2}>
        {desc}
      </Body>
      <ArrowContainer>
        <ArrowRight size={26} />
      </ArrowContainer>
    </Card>
  )
}
