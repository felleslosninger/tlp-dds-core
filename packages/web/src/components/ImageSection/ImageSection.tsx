import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'
import { Container, Row, Col } from 'react-bootstrap'
import { Heading, Body, Link } from '@digdir/ds-core-react'

export interface ImageSectionProps {
  title: string
  desc: string
  linkText?: string
  imgDirection?: 'left' | 'right'
  backgroundColor?: 'white' | 'grey'
  imgPath: string
}

interface SectionProps {
  backgroundColor?: 'white' | 'grey'
}

const Section = styled.div<SectionProps>(
  (props) => css`
    background-color: white;
    padding: 72px 0;

    ${props.backgroundColor === 'grey' &&
    css`
      background-color: ${tokens.color.neutral.grey['100']};
    `}
  `,
)

const ImageContainer = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
)

const Image = styled.img(
  () => css`
    max-height: 290px;
    max-width: 100%;
    border-radius: 4px;
  `,
)

export const ImageSection: FC<ImageSectionProps> = ({
  title,
  desc,
  linkText,
  imgDirection,
  imgPath,
  backgroundColor,
}) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container>
        <Row className="row gy-3 justify-content-center align-items-center">
          {imgDirection === 'left' && (
            <>
              <Col md={12} lg={5}>
                <ImageContainer>
                  <Image src={imgPath} />
                </ImageContainer>
              </Col>
              <Col md={0} lg={1} className="d-lg-block d-none"></Col>
            </>
          )}

          <Col md={12} lg={6}>
            <Heading level={2} size="800" mb={3}>
              {title}
            </Heading>
            <Body mb={3}>{desc}</Body>
            {linkText && (
              <Link href="#" type="shortcut">
                {linkText}
              </Link>
            )}
          </Col>

          {imgDirection === 'right' && (
            <>
              <Col md={0} lg={1} className="d-lg-block d-none"></Col>
              <Col md={12} lg={5}>
                <ImageContainer>
                  <Image src={imgPath} />
                </ImageContainer>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </Section>
  )
}
