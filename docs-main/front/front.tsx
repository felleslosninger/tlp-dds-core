import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
  Section,
  NavigationCard,
  TeaserCard,
  Header,
  Footer,
  CourseCard,
  ImageSection,
  ImageBanner,
  PanelLink,
} from '../../packages/web/.'
import { Button, GlobalStyle } from '../../packages/core/.'
import { Briefcase, Sun, Coffee } from 'react-feather'

export const Landing = ({}) => {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <ImageBanner
        title="Sammenhengende tjenester"
        desc="Godt samarbeid og god organisering er veien til sammenhengende, sømløse digitale tjenester. Livshendelser setter brukerens behov i sentrum når vi lager sammenhengende tjenester.'"
        imgPath="img/svg/two.svg"
        breadcrumbs={[{ text: 'dd', url: '#' }]}
        backgroundColor="third"
      ></ImageBanner>

      <Section backgroundColor="grey" title="Viktige lenker" lineColor="grey">
        <Container>
          <Row className="gy-4">
            <Col xl={6}>
              <PanelLink>Here is a panel link</PanelLink>
            </Col>
            <Col xl={6}>
              <PanelLink color="second">Here is a panel link</PanelLink>
            </Col>
            <Col xl={6}>
              <PanelLink color="third">Here is a panel link</PanelLink>
            </Col>
            <Col xl={6}>
              <PanelLink>Here is a panel link</PanelLink>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section
        title="Våre fellesløsninger"
        lineColor="second"
        desc="Not may its must necessary really and the attribute derivative he events by leave just after it review, guest had interaction given sighed."
      >
        <Container>
          <Row>
            <Col>
              <NavigationCard
                backgroundColor="second"
                icon={<Briefcase size={48} />}
                iconBackgroundColor="second"
              ></NavigationCard>
            </Col>
            <Col>
              <NavigationCard
                backgroundColor="second"
                icon={<Sun size={48} />}
                iconBackgroundColor="second"
              ></NavigationCard>
            </Col>
            <Col>
              <NavigationCard
                backgroundColor="second"
                icon={<Coffee size={48} />}
                iconBackgroundColor="second"
              ></NavigationCard>
            </Col>
          </Row>
        </Container>
      </Section>

      <ImageSection
        imgPath="img/svg/two.svg"
        backgroundColor="grey"
        title="Her finner du Stifinneren"
        desc="Behovskatalogen kan du melde inn ditt eget behov, se hva andre har meldt inn, kommentere på andres bidrag og diskutere behovene med andre i Datalandsbyen. Ved å abonnere på oppdateringer kan du følge med på hva som skjer med behovet."
        imgDirection="left"
        linkText="Her finner du stifinneren"
      ></ImageSection>

      <Section
        backgroundColor="white"
        title="Arrangementer"
        lineColor="second"
        footer={
          <Button variant="secondary" size="lg">
            Se alle arrangementer
          </Button>
        }
      >
        <Container>
          <Row className="justify-content-center gy-4">
            <Col xl={9}>
              <CourseCard
                title="Hva skal til for å lykkes i offentlig sektor?"
                time="09:45"
                place="Arendal"
                tags={['Digitalisering og samordning']}
              ></CourseCard>
            </Col>
            <Col xl={9}>
              <CourseCard
                title="Hvor mange personer fins det i verden nå?"
                time="12:00"
                place="Lørenskop"
                tags={['Informasjonssikkerhet', 'Vern']}
              ></CourseCard>
            </Col>
            <Col xl={9}>
              <CourseCard
                title="Her er tittelen til kursset som starter snart"
                time="08:00"
                place="Sogndal"
                tags={['Skole og utdanning']}
              ></CourseCard>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section backgroundColor="grey" title="Bli god på digitalisering">
        <Container>
          <Row>
            <Col>
              <NavigationCard
                icon={<Briefcase size={48} />}
                iconBackgroundColor="first"
              ></NavigationCard>
            </Col>
            <Col>
              <NavigationCard
                icon={<Sun size={48} />}
                iconBackgroundColor="second"
              ></NavigationCard>
            </Col>
            <Col>
              <NavigationCard
                icon={<Coffee size={48} />}
                iconBackgroundColor="third"
              ></NavigationCard>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section
        backgroundColor="white"
        title="Rapporter"
        lineColor="second"
        footer={
          <Button variant="secondary" size="lg">
            Se alle rapporter
          </Button>
        }
      >
        <Container>
          <Row className="justify-content-center gy-4">
            <Col>
              <TeaserCard
                colorDetail="second"
                subTitle="Her er en subtitle"
              ></TeaserCard>
            </Col>
            <Col>
              <TeaserCard
                colorDetail="second"
                subTitle="Her er en subtitle"
              ></TeaserCard>
            </Col>
            <Col>
              <TeaserCard
                colorDetail="second"
                subTitle="Her er en subtitle"
              ></TeaserCard>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section
        backgroundColor="grey"
        title="Ting i tiden"
        lineColor="third"
        desc="Not may its must necessary really and the attribute derivative he events by leave just after it review, guest had interaction given sighed."
      >
        <Container>
          <Row>
            <Col>
              <TeaserCard imageSrc="img/png/five.jpg"></TeaserCard>
            </Col>
            <Col>
              <TeaserCard imageSrc="img/png/three.jpg"></TeaserCard>
            </Col>
            <Col>
              <TeaserCard imageSrc="img/png/two.jpg"></TeaserCard>
            </Col>
          </Row>
        </Container>
      </Section>

      <ImageSection
        imgPath="img/svg/three.svg"
        title="Her finner du Stifinneren"
        desc="Behovskatalogen kan du melde inn ditt eget behov, se hva andre har meldt inn, kommentere på andres bidrag og diskutere behovene med andre i Datalandsbyen. Ved å abonnere på oppdateringer kan du følge med på hva som skjer med behovet."
        imgDirection="right"
        linkText="Her finner du stifinneren"
      ></ImageSection>

      <Section
        backgroundColor="grey"
        title="Siste nyheter"
        lineColor="first"
        footer={
          <Button variant="secondary" size="lg">
            Se alle nyheter
          </Button>
        }
      >
        <Container>
          <Row className="justify-content-center gy-4">
            <Col>
              <TeaserCard
                colorDetail="first"
                metaItems={['21. mars 2022']}
              ></TeaserCard>
            </Col>
            <Col>
              <TeaserCard
                colorDetail="first"
                metaItems={['21. mars 2022']}
              ></TeaserCard>
            </Col>
            <Col>
              <TeaserCard
                colorDetail="first"
                metaItems={['21. mars 2022']}
              ></TeaserCard>
            </Col>
          </Row>
        </Container>
      </Section>

      <Footer />
    </div>
  )
}
