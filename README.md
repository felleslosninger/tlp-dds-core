# DigDir Designsystem

Dette monorepoet inneholder pakker relatert til implementasjon av et designsystem for generell bruk i DigDir, og noen deler mer spesifikt rettet mot bruk i DigDir admin-applikasjoner.

### Kom i gang med utvikling

Sørg for at `node` er installert. Dette kan sjekkes ved å kjøre:

`node --version`

Installer nødvendige pakker:

`yarn install`

Server dokumentasjonssiden på localhost:

`yarn start`

_(Hvis dette gir feilmelding prøv `yarn start:clean`. Storybook kan feile dersom man har slettet og installert node_modules på nytt.)_

---

### Bygging

For å bygge filer til distribusjon:

`yarn build` i root mappen, eller `lerna run build` generelt

_(kjører alle build-script i [packages/](packages/) sub-mapper)_

Bygging og deployment av dokumentasjon skjer automatisk ved hjelp av [Github Actions](.github/workflows/deploy-storybook.yml).
Når noe blir pushet/merget til `main`-branchen vil scriptet bygge Storybook til `github-pages-deployment`-branchen, som Github Pages hoster siden fra.

For å bygge dokumentasjon manuelt (til `./docs/`):

`yarn build:docs`

---

Yarn er brukt for å benytte komboen Lerna + Yarn workspaces til enklere vedlikehold av endringslogg, versjonering og publisering av pakkene. Noen `npm` script er laget for arbeidsflyt med lerna.

### Versjonering og publisering

#### Stegvis

1️⃣ For å klargjøre en ny versjon:

`yarn version:changed [major|minor|patch]`

Dette vil lage en commit med ny versjon. `major`, `minor` eller `patch` brukes etter [semver](https://semver.org/) konvensjonen.

(Alle commits gjort i respektive pakker med [Conventional Commits](https://conventionalcommits.org) (f.eks. starter med 'feat:'),
vil bli lagt til i `CHANGELOG.md` i den/de oppdaterte pakken(e). Disse burde derfor med fordel være deskriptive og relevante for den nye versjonen som skal publiseres - for å unngå senere ekstraarbeid.)

2️⃣ Helst **merge/push til main-branchen** før du publiserer.

Sjekk evnt. at filene som blir publisert er riktige (`/build`-mappene til pakkene som er versjonert).

3️⃣ For å publisere:

`yarn publish:changed`

Dette vil publisere pakken(e) tagget i nåværende commit 🚀

---
