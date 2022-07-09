import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'
import { Heading, Ingress } from '@digdir/ds-core-react'
import { Container, Row, Col } from 'react-bootstrap'

export interface SectionProps {
  title?: string
  desc?: string
  backgroundColor?: 'grey' | 'white'
  lineColor?: 'grey' | 'first' | 'second' | 'third'
  children?: React.ReactNode
  footer?: React.ReactNode
}

const defaultTitle: string =
  'Mostly her there my his he of train world assisted'
const S = {
  StyleSection: styled.section<SectionProps>`
    background-color: ${({ backgroundColor }) =>
      backgroundColor === 'grey' ? tokens.color.neutral.grey['100'] : 'white'};
    padding: ${tokens.spacing['9']} 0;
  `,

  SectionHeading: styled(Heading)`
    margin-bottom: ${tokens.spacing['3']};
  `,

  Header: styled.div`
    text-align: center;
    margin-bottom: ${tokens.spacing['6']};
  `,

  Ingress: styled(Ingress)`
    margin-bottom: 0;
    margin-top: 24px;
  `,
  Content: styled.div``,
  Footer: styled.div`
    margin-top: ${tokens.spacing['5']};
  `,
}

const Line = styled.div<SectionProps>(
  (props) => css`
    height: 4px;
    width: 40px;
    border-radius: 40px;
    margin: 0 auto;
    background-color: ${tokens.color.neutral.grey['500']};

    ${props.lineColor === 'first' &&
    css`
      background-color: ${tokens.color.brand.first['600']};
    `}

    ${props.lineColor === 'second' &&
    css`
      background-color: ${tokens.color.brand.second['600']};
    `}

  ${props.lineColor === 'third' &&
    css`
      background-color: ${tokens.color.brand.third['600']};
    `}
  `,
)

export const Section: FC<SectionProps> = ({
  title = defaultTitle,
  desc,
  children,
  backgroundColor = 'white',
  lineColor = 'grey',
  footer,
}) => {
  return (
    <S.StyleSection backgroundColor={backgroundColor}>
      <S.Header>
        <Container>
          <Row className="justify-content-center">
            <Col xl={7}>
              <S.SectionHeading size="800">{title}</S.SectionHeading>
              <Line lineColor={lineColor} />
              {desc && <S.Ingress size="500">{desc}</S.Ingress>}
            </Col>
          </Row>
        </Container>
      </S.Header>
      <S.Content>{children}</S.Content>
      {footer && (
        <S.Footer>
          <Container>
            <Row className="justify-content-center">{footer}</Row>
          </Container>
        </S.Footer>
      )}
    </S.StyleSection>
  )
}
