import React, { FC } from 'react'
import styled from 'styled-components'
import tokens from '@digdir/ds-tokens/build/tokens'
import { Heading, Ingress } from '@digdir/ds-core-react'
import { Container, Row, Col } from 'react-bootstrap'

export interface SectionProps {
  title?: string
  desc?: string
  backgroundColor?: 'grey' | 'white'
  lineColor?: 'grey' | 'yellow' | 'blue' | 'red'
  children?: React.ReactNode
}

const defaultTitle: string =
  'Mostly her there my his he of train world assisted'
const defaultDesc: string =
  "Children's founding found a slight communicated. Tone some the forest would up there managers to the as unprofitable my the ran an essay spot. As steadily being to be might into have the covered easy in and post should, their back that her the not four hesitated tower, same state."
const defaultChildren: React.ReactNode = <div>Insert content here!!!!!!!</div>
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

  Line: styled.div<SectionProps>`
    height: 4px;
    width: 40px;
    border-radius: 40px;
    background-color: ${(props) => getLineColor(props.lineColor)};
    margin: 0 auto;
  `,

  Content: styled.div``,
  Footer: styled.div`
    margin-top: ${tokens.spacing['5']};
  `,
}

const getLineColor = (lineColor: SectionProps['lineColor']) => {
  if (lineColor === 'grey') {
    return `${tokens.color.neutral.grey['600']}`
  } else if (lineColor === 'red') {
    return `${tokens.color.brand.first['600']}`
  } else if (lineColor === 'yellow') {
    return `${tokens.color.brand.second['600']}`
  } else {
    return `${tokens.color.brand.third['600']}`
  }
}

export const Section: FC<SectionProps> = ({
  children = defaultChildren,
  title = defaultTitle,
  desc = defaultDesc,
  backgroundColor = 'white',
  lineColor = 'grey',
}) => {
  return (
    <S.StyleSection backgroundColor={backgroundColor}>
      <S.Header>
        <Container>
          <Row className="justify-content-center">
            <Col xl={7}>
              <S.SectionHeading size="800">{title}</S.SectionHeading>
              <S.Line lineColor={lineColor} />
              <S.Ingress size="500">{desc}</S.Ingress>
            </Col>
          </Row>
        </Container>
      </S.Header>
      <S.Content>
        <Container>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </S.Content>
      <S.Footer>
        <Container>
          <Row>
            <Col>Footer</Col>
          </Row>
        </Container>
      </S.Footer>
    </S.StyleSection>
  )
}
