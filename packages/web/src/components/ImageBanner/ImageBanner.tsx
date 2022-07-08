import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'
import { Container, Row, Col } from 'react-bootstrap'
import { Breadcrumbs, LinkItem, Heading, Body } from '@digdir/ds-core-react'

export interface ImageBannerProps {
  title: string
  desc: string
  backgroundColor: 'white' | 'first' | 'second' | 'third'
  breadcrumbs: LinkItem[]
  imgPath: string
}

interface BannerProps {
  backgroundColor: 'white' | 'first' | 'second' | 'third'
}

const Banner = styled.div<BannerProps>(
  (props) => css`
    background-color: ${tokens.color.brand.second['300']};
    box-sizing: border-box;
    width: 100%;
    min-height: 27rem;

    ${props.backgroundColor === 'first' &&
    css`
      background-color: ${tokens.color.brand.first['300']};
    `}
    ${props.backgroundColor === 'white' &&
    css`
      background-color: white;
    `}
    ${props.backgroundColor === 'third' &&
    css`
      background-color: ${tokens.color.brand.third['300']};
    `}
  `,
)

const BreadcrumbsContainer = styled.div`
  padding-top: 32px;
  margin-bottom: -16px;
`

const ImageContainer = styled.div`
  display: grid;
  padding: 72px 0;
`

const Image = styled.img`
  display: block;
  align-self: center;
  justify-self: center;
  width: auto;
  max-height: 16.25rem;
  height: auto;
  max-width: 100%;
  border-radius: 4px;
`

const TextContainer = styled.div`
  box-sizing: border-box;
  color: #1e2b3c;
  padding: 56px 0;
`

export const ImageBanner: FC<ImageBannerProps> = ({
  title,
  desc,
  breadcrumbs,
  imgPath,
  backgroundColor,
}) => {
  return (
    <Banner backgroundColor={backgroundColor}>
      <Container>
        {breadcrumbs && (
          <BreadcrumbsContainer>
            <Breadcrumbs
              linkList={[
                { text: 'Hjem', url: '#' },
                { text: 'Sammenhengende tjenester', url: '#' },
                { text: 'Tjeneste 1', url: '#' },
              ]}
            />
          </BreadcrumbsContainer>
        )}
        <Row className="align-items-center">
          <Col md={6}>
            <TextContainer>
              <Heading mb={3}>{title}</Heading>
              <Body>{desc}</Body>
            </TextContainer>
          </Col>
          <Col md={6}>
            <ImageContainer>
              <Image src={imgPath}></Image>
            </ImageContainer>
          </Col>
        </Row>
      </Container>
    </Banner>
  )
}
