# DigDir Designsystem

Dette monorepoet inneholder pakker til for generell bruk i DigDir, og mer rettet mot bruk i DigDir admin.

### Kom i gang med utvikling

Sørg for at `node` er installert. Dette kan sjekkes ved å kjøre:

`node --version`

Installer nødvendige pakker:

`yarn install`

Server dokumentasjonssiden på localhost:

`yarn start`

---

### Bygging

For å bygge filer til distribusjon:

`yarn build` i root mappen, eller `lerna run build`

_(kjører alle build-script i [packages/](packages/) sub-mapper)_

For å bygge dokumentasjon (til [docs/](docs/)):

`yarn build:docs`

---

Yarn er brukt for å benytte komboen Lerna + Yarn workspaces til enklere vedlikehold av endringslogg, versjonering og publisering av pakkene.
