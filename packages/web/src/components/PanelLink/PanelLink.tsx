import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'
import { Heading } from '@digdir/ds-core-react'
import { ArrowRight } from 'react-feather'

export interface PanelLinkProps {
  children: React.ReactNode
  color?: 'first' | 'second' | 'third'
}

const Link = styled.a(
  (props) => css`
    background-color: white;
    padding: 38px 38px 38px 32px;
    height: 100%;
    box-shadow: 0 0 0 1px ${tokens.color.neutral.grey['400']};
    border-radius: ${tokens.border.radius.small};
    position: relative;
    overflow: hidden;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    transition: 0.15s all;
    text-decoration: none;
    color: inherit;

    :hover {
      box-shadow: 0 0 0 2px ${tokens.color.neutral.grey['800']};
      background-color: ${tokens.color.brand.first['200']};

      :before {
        background-color: ${tokens.color.brand.first['500']};
      }
    }

    :active {
      background-color: ${tokens.color.brand.first['300']};
      :before {
        background-color: ${tokens.color.brand.first['600']};
      }
    }

    :before {
      content: '';
      display: block;
      height: 150px;
      width: 150px;
      border-radius: 50%;
      background-color: ${tokens.color.brand.first['400']};
      position: absolute;
      left: -50px;
      transition: 0.2s all;
    }

    ${props.color === 'second' &&
    css`
      :hover {
        background-color: ${tokens.color.brand.second['200']};
        :before {
          background-color: ${tokens.color.brand.second['500']};
        }
      }

      :active {
        background-color: ${tokens.color.brand.second['300']};
        :before {
          background-color: ${tokens.color.brand.second['600']};
        }
      }

      :before {
        background-color: ${tokens.color.brand.second['400']};
      }
    `}

    ${props.color === 'third' &&
    css`
      :hover {
        background-color: ${tokens.color.brand.third['200']};
        :before {
          background-color: ${tokens.color.brand.third['500']};
        }
      }

      :active {
        background-color: ${tokens.color.brand.third['300']};
        :before {
          background-color: ${tokens.color.brand.third['600']};
        }
      }

      :before {
        background-color: ${tokens.color.brand.third['400']};
      }
    `}

    svg {
      position: relative;
      margin-right: 64px;
    }
  `,
)

export const PanelLink: FC<PanelLinkProps> = ({ children, color }) => {
  return (
    <Link color={color}>
      <ArrowRight size={32}></ArrowRight>
      <Heading size="500" level={2}>
        {children}
      </Heading>
    </Link>
  )
}
