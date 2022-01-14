# Digdir Designsystem

Dette monorepoet inneholder pakker relatert til implementasjon av et designsystem for generell bruk i Digdir.

### Kom i gang med utvikling

Sørg for at `node` er installert. Dette kan sjekkes ved å kjøre:

`node --version`

Installer nødvendige pakker:

`yarn install`

Server dokumentasjonssiden på localhost:

`yarn start`

_(Hvis dette gir feilmelding prøv `yarn start:clean`. Storybook kan feile dersom man har slettet og installert node_modules på nytt.)_

---

### Commit ✍️

Start commits med `fix:`, `feat:`, eller `BREAKING CHANGE:` for å få de med i endringsloggen (`CHANGELOG.md`) som **automatisk** oppdateres på Storybook når nye versjoner publiseres. Dette burde gjøres på commits som endrer innholdet i det som publiseres (filene som bygges).

Ved neste versjonering/publisering vil `fix:` trigge en patch (0.0.x), `feat:` en minor update (0.x.0), `BREAKING CHANGE:` eller `!` etter fix/feat en major update (x.0.0).

Commit-teksten blir automatisk lagt til i endringsloggen i pakken til der commiten gjør en endring. Legg til et scope med parantes, f.eks.

```
feat(button): add secondary variant style

Longer Description in a paragraph here.
```

Les mer om Conventional Commits på https://conventionalcommits.org.

---

### Bygging 🛠

For å bygge filer til distribusjon:

`yarn build` i root mappen, eller `lerna run build` generelt

_(kjører alle build-script i [packages/](packages/) sub-mapper)_

Bygging og deployment av dokumentasjon skjer automatisk ved hjelp av [Github Actions](.github/workflows/deploy-storybook.yml).
Når noe blir pushet/merget til `main`-branchen vil scriptet bygge Storybook til `github-pages-deployment`-branchen, som Github Pages hoster siden fra.

For å bygge dokumentasjon manuelt (til `./docs/`):

`yarn build:docs`

---

Yarn er brukt for å benytte komboen Lerna + Yarn workspaces til enklere vedlikehold av endringslogg, versjonering og publisering av pakkene. Noen `npm` script er laget for arbeidsflyt med lerna.

### Versjonering og publisering 🚀

#### Stegvis

1️⃣ For å klargjøre en ny versjon (og committe en versjon-tag):

`yarn version:changed`

Hva slags type versjon-bump det blir bestemmes automatisk fra commitloggen.

Hvis man trenger å sette versjon eksplisitt, bruk:

`yarn version:changed [major|minor|patch]`

Dette vil lage en commit med ny versjon. `major`, `minor` eller `patch` brukes etter [semver](https://semver.org/) konvensjonen.

2️⃣ Helst **merge/push til main-branchen** før du publiserer.

Sjekk evnt. at filene som blir publisert er riktige (`/build`-mappene til pakkene som er versjonert).

3️⃣ For å publisere:

`yarn publish:changed`

Dette vil publisere pakken(e) tagget i nåværende commit 🚀

---
