import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { TitleIcon } from '@digdir/ds-core-react'
import { Clock, Tag, MapPin } from 'react-feather'
import tokens from '@digdir/ds-tokens/build/tokens'

export interface CourseCardProps {
  title: string
  desc?: string
  time?: string
  place?: string
  tags?: string[]
  color?: 'first' | 'second' | 'third'
}

const Card = styled.div(
  () => css`
    min-width: 768px;
  `,
)
const Link = styled.a(
  (props) => css`
    display: flex;
    box-sizing: border-box;
    position: relative;
    height: 100%;
    text-decoration: none;
    background-color: #fff;
    color: #1e2b3c;
    transition: all 0.2s;
    border-radius: 8px;
    box-shadow: 0 0 0 1px ${tokens.color.neutral.grey['400']};
    cursor: pointer;

    :hover {
      background-color: ${tokens.color.brand.second['200']};
      box-shadow: 0 0 0 2px ${tokens.color.neutral.grey['800']};

      ${Banner} {
        background-color: ${tokens.color.brand.second['400']};
      }
    }

    :active {
      background-color: ${tokens.color.brand.second['300']};
      ${Banner} {
        background-color: ${tokens.color.brand.second['500']};
      }
    }

    ${props.color === 'first' &&
    css`
      ${Banner} {
        background-color: ${tokens.color.brand.first['300']};
      }

      :hover {
        background-color: ${tokens.color.brand.first['200']};
        ${Banner} {
          background-color: ${tokens.color.brand.first['400']};
        }
      }
      :active {
        background-color: ${tokens.color.brand.first['300']};
        ${Banner} {
          background-color: ${tokens.color.brand.first['500']};
        }
      }
    `}

    ${props.color === 'third' &&
    css`
      ${Banner} {
        background-color: ${tokens.color.brand.third['300']};
      }

      :hover {
        background-color: ${tokens.color.brand.third['200']};
        ${Banner} {
          background-color: ${tokens.color.brand.third['400']};
        }
      }
      :active {
        background-color: ${tokens.color.brand.third['300']};
        ${Banner} {
          background-color: ${tokens.color.brand.third['500']};
        }
      }
    `}
  `,
)

const Banner = styled.div(
  () => css`
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5;
    background-color: ${tokens.color.brand.second['300']};
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0 0 150px;
    width: 150px;
    min-height: 150px;
    border-radius: 8px 0 0 8px;
    transition: all 0.2s;
  `,
)
const TextContainer = styled.div(
  () => css`
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  `,
)
const Day = styled.div(
  () => css`
    font-size: 2rem;
    font-weight: 500;
  `,
)
const Month = styled.div(
  () => css`
    font-size: 1.25rem;
    margin-top: -5px;
    margin-bottom: 3px;
  `,
)
const Year = styled.div(
  () => css`
    font-size: 1.125rem;
  `,
)

const Meta = styled.div(
  () => css`
    display: flex;
    row-gap: 1rem;
    flex-wrap: wrap;
  `,
)

const Item = styled.div(
  () => css`
    display: flex;
    align-items: center;
    margin-right: 24px;

    svg {
      margin-right: 8px;
    }

    div {
      :after {
        content: ', ';
        margin-right: 4px;
      }

      :last-child {
        :after {
          display: none;
          margin-right: 0;
        }
      }
    }
  `,
)

export const CourseCard: FC<CourseCardProps> = ({
  title,
  color,
  time,
  place,
  tags,
}) => {
  return (
    <Card>
      <Link color={color}>
        <Banner>
          <Day>17</Day>
          <Month>august</Month>
          <Year>2022</Year>
        </Banner>
        <TextContainer>
          <TitleIcon size="600" mb={3}>
            {title}
          </TitleIcon>
          <Meta>
            {time && (
              <Item>
                <Clock size={17}></Clock>
                {time}
              </Item>
            )}
            {place && (
              <Item>
                <MapPin size={17}></MapPin>
                {place}
              </Item>
            )}
            {tags && tags.length > 0 && (
              <Item>
                <Tag size={17}></Tag>
                {tags.map((item) => (
                  <div>{item}</div>
                ))}
              </Item>
            )}
          </Meta>
        </TextContainer>
      </Link>
    </Card>
  )
}
