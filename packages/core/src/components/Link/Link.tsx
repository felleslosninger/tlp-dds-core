import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'
import { ArrowRight, ChevronRight, ExternalLink } from 'react-feather'
import { Body } from '../Body/Body'

export interface LinkProps {
  children: React.ReactNode
  size?: '300' | '400'
  type?: 'inline' | 'shortcut' | 'regular' | 'external'
  href: string
  className?: string
}

interface ContainerProps {
  size?: '300' | '400'
  type?: 'inline' | 'shortcut' | 'regular' | 'external'
}

const StyledLink = styled.a<LinkProps>(
  (props) => css`
    font-size: ${tokens.font.size['400']};
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
    text-decoration-color: ${tokens.color.neutral.grey['600']};
    transition: 0.15s all;
    position: relative;
    color: inherit;

    :hover {
      text-decoration-thickness: 2px;
      color: ${tokens.color.interface.interaction};
    }

    :visited {
      color: inherit;
    }

    ${props.type === 'shortcut' &&
    css`
      padding-left: ${tokens.spacing['3']};
    `}

    ${props.type === 'inline' &&
    css`
      color: ${tokens.color.interface.interaction};

      :visited {
        color: ${tokens.color.interface.visited};
      }
    `}

    ${props.size === '300' &&
    css`
      font-size: ${tokens.font.size['300']};
    `}
  `,
)

const Text = styled(Body)(
  () => css`
    display: inline;
  `,
)
const LeftIconContainer = styled.span<ContainerProps>(
  (props) => css`
    margin-right: 2px;
    vertical-align: middle;

    ${props.type === 'shortcut' &&
    css`
      position: absolute;
      margin-left: -28px;
      margin-top: 3px;

      svg {
        height: 22px;
        width: 22px;
      }
    `}

    ${props.size === '300' &&
    css`
      margin-top: 2px;

      svg {
        height: 20px;
        width: 20px;
      }
    `}
  `,
)
const RightIconContainer = styled.span<ContainerProps>(
  (props) => css`
    margin-left: 4px;
    vertical-align: middle;

    svg {
      height: 22px;
      width: 22px;
    }

    ${props.size === '300' &&
    css`
      svg {
        margin-top: 1px;
        height: 20px;
        width: 20px;
      }
    `}

    ${props.type === 'external' &&
    css`
      svg {
        margin-left: 4px;
        height: 20px;
        width: 20px;
      }
    `}

    ${props.size === '300' &&
    props.type === 'external' &&
    css`
      svg {
        height: 18px;
        width: 18px;
      }
    `}
  `,
)

export const Link: FC<LinkProps> = ({
  children,
  size,
  type = 'inline',
  href,
  className,
}) => {
  return (
    <StyledLink size={size} type={type} href={href} className={className}>
      {type === 'shortcut' && (
        <LeftIconContainer type={type} size={size}>
          <ChevronRight />
        </LeftIconContainer>
      )}
      <Text size={size}>{children}</Text>
      {type !== 'shortcut' && type !== 'inline' && (
        <RightIconContainer size={size} type={type}>
          {type === 'regular' && <ArrowRight />}
          {type === 'external' && <ExternalLink size={20} />}
        </RightIconContainer>
      )}
    </StyledLink>
  )
}
