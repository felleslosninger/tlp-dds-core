import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Link } from '../Link/Link'
import { Body } from '../Body/Body'
import tokens from '@digdir/ds-tokens/build/tokens'
import { dataIcons } from '../../utils/dataIcons'

export interface BreadcrumbsProps {
  linkList: LinkItem[]
}

export interface LinkItem {
  text: string
  url: string
}

const StyledBreadcrumbs = styled.div(
  () => css`
    display: inline-flex;
    align-items: center;
  `,
)

const StyledLink = styled(Link)`
  color: inherit;
  display: inline-flex;
  align-items: center;

  &:after {
    content: '';
    display: inline-block;
    box-sizing: border-box;
    align-self: center;
    width: 0.75rem;
    height: 0.75rem;
    background-image: ${dataIcons.chevronRight};
    background-repeat: no-repeat;
    background-position: 50%;
    margin: 0 0.75rem;
  }

  :last-child {
    :after {
      display: none;
    }
  }

  p {
    display: flex;
    align-items: center;
    font-weight: 500;
  }

  svg {
    stroke: ${tokens.color.neutral.grey['600']};
    margin: 0 8px;
  }
`

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ linkList }) => {
  return (
    <StyledBreadcrumbs>
      {linkList.map((item, index: number) => (
        <>
          {index !== linkList.length - 1 && (
            <StyledLink size="300" href={item.url}>
              {item.text}
            </StyledLink>
          )}
          {index === linkList.length - 1 && <Body size="300">{item.text}</Body>}
        </>
      ))}
    </StyledBreadcrumbs>
  )
}
