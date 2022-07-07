import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'
import { TitleIcon, Body } from '@digdir/ds-core-react'

export interface TeaserCardProps {
  title?: string
  subTitle?: string
  desc?: string
  imageSrc?: string
  metaItems?: string[]
  direction?: 'vertical' | 'horizontal'
  colorDetail?: 'red' | 'yellow' | 'blue'
}

interface CardProps {
  direction?: 'vertical' | 'horizontal'
}

interface LinkProps {
  direction?: 'vertical' | 'horizontal'
}

interface ImageContainerProps {
  direction?: 'vertical' | 'horizontal'
}

interface ImageProps {
  direction?: 'vertical' | 'horizontal'
}

interface TextContainerProps {
  colorDetail?: 'red' | 'yellow' | 'blue'
  imageSrc?: string
}

const defaultTitle: string = 'Her er tittelen'
const defaultDesc: string =
  'I august blir det klart hvem som har gjennomført det aller beste digitaliseringsprosjektet i offentlig sektor. Nå er de tre finalistene til Digitaliseringsprisen 2022 klare.'

const Card = styled.div<CardProps>`
  box-shadow: 0 0 0 1px ${tokens.color.neutral.grey['400']};
  border-radius: 8px;
  display: flex;
  height: 100%;
  transition: 0.15s all;

  ${(props) => css`
    flex-direction: ${props.direction === 'vertical' ? 'column' : 'row'};
    max-width: ${props.direction === 'vertical' ? '600px' : '1320px'};
  `}

  &:hover {
    box-shadow: 0 0 0 2px ${tokens.color.neutral.grey['800']};
  }
`

const Link = styled.a<LinkProps>`
  background-color: white;
  border-radius: 8px;
  transition: 0.15s all;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  margin-bottom: 0;

  &:hover {
    color: inherit;
    background-color: ${tokens.color.brand.third['200']};
  }

  &:active {
    color: inherit;
    background-color: ${tokens.color.brand.third['300']};
  }

  ${(props) => css`
    flex-direction: ${props.direction === 'vertical' ? 'column' : 'row'};
  `}
`

const ImageContainer = styled.div<ImageContainerProps>`
  flex: ${(props) => (props.direction === 'vertical' ? 'auto' : '0 0 50%')};
`

const Image = styled.img<ImageProps>`
  width: 100%;
  border-radius: ${(props) =>
    props.direction === 'vertical' ? '8px 8px 0 0' : '8px 0 0 8px'};
  display: block;
`

const TextContainer = styled.div<TextContainerProps>(
  (props) => css`
    padding: 32px;
    flex: 1 1 50%;
    position: relative;
    overflow: hidden;
    border-radius: ${props.imageSrc ? '0 0 8px 8px' : '8px'};

    p {
      margin-bottom: 0;
    }

    ${props.colorDetail &&
    css`
      padding: 54px 32px 32px 32px;
      :before {
        content: '';
        height: 88px;
        width: 88px;
        position: absolute;
        left: -44px;
        top: -44px;
        border-radius: 50%;
        background-color: ${tokens.color.brand.third['600']};
      }
    `}

    ${props.colorDetail === 'red' &&
    css`
      :before {
        background-color: ${tokens.color.brand.first['600']};
      }
    `}

    ${props.colorDetail === 'yellow' &&
    css`
      :before {
        background-color: ${tokens.color.brand.second['600']};
      }
    `}
  `,
)

const MetaContainer = styled.div`
  display: flex;
`

const MetaItem = styled(Body)`
  margin-right: 16px;
  margin-top: -8px;
  margin-bottom: 0;

  &:last-child {
    margin-right: 0;
  }
`

export const TeaserCard: FC<TeaserCardProps> = ({
  title = defaultTitle,
  subTitle,
  desc = defaultDesc,
  imageSrc,
  direction = 'vertical',
  metaItems = [],
  colorDetail,
}) => {
  const getMetaItems = metaItems.map((item) => (
    <MetaItem key={item} size="200">
      {item}
    </MetaItem>
  ))
  return (
    <Card direction={direction}>
      <Link direction={direction}>
        {imageSrc && (
          <ImageContainer direction={direction}>
            <Image direction={direction} src={imageSrc} alt="" />
          </ImageContainer>
        )}
        <TextContainer colorDetail={colorDetail} imageSrc={imageSrc}>
          <TitleIcon mb={2} size="500" subTitle={subTitle}>
            {title}
          </TitleIcon>
          {metaItems.length > 0 && (
            <MetaContainer>{getMetaItems}</MetaContainer>
          )}
          <Body size={direction === 'vertical' ? '300' : '400'}>{desc}</Body>
        </TextContainer>
      </Link>
    </Card>
  )
}
