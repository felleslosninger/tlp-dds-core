# Digdir Designsystem

Dette monorepoet inneholder pakker relatert til implementasjon av et designsystem for generell bruk i Digdir.

## Kom i gang med utvikling

Sørg for at `node` og `yarn` er installert. Dette kan sjekkes ved å kjøre:

`node --version && yarn --version`

Installer nødvendige pakker:

`yarn install`

Kjør bygg:

_(Dette trengs for referanser/importeringer gjort mellom lokale pakker. Det skal i prinsippet kun være nødvendig å gjøre dette første gang, siden bygget kjører automatisk når man versjonerer/publiserer nye versjoner av pakkene.)_

`yarn build`

Server dokumentasjonssiden (Storybook) på localhost:

`yarn start`

_Problemer? Se [Feilsøking](#feilsøking-🔍)._

---

## Commit ✍️

Start commits med `fix:`, `feat:`, eller `BREAKING CHANGE:` for å få de med i endringsloggen (se `CHANGELOG.md` i pakkene) som **automatisk** oppdateres på Storybook når nye versjoner publiseres. Dette burde gjøres på commits som endrer innholdet i det som publiseres (filene som bygges).

Ved neste versjonering/publisering vil `fix:` trigge en patch (0.0.x), `feat:` en minor update (0.x.0), og `BREAKING CHANGE:` alene eller etter fix:/feat: vil trigge en major update (x.0.0).

Første linje (og eventuelt det etter BREAKING CHANGE:) i commit-teksten blir automatisk lagt til i endringsloggen i pakken til der commiten gjør en endring. Legg til et scope med parantes, se eksempel under:

```
fix(button): short description of what commit does (e.g. add secondary variant style)

Longer in-depth description in a paragraph here, if needed.

BREAKING CHANGE: Explanation of things that break with this commit and what users need to do to migrate, if needed.
In this case it could be that a fix in the button changes the HTML structure of the button component, 
which requires the users to modify their implementation using the @digdir/ds-core-css package.
```

Les mer om Conventional Commits på https://conventionalcommits.org.

---

## Bygging 🛠

For å bygge filer til distribusjon:

`yarn build` i root mappen, eller `lerna run build` generelt

_(kjører alle build-script i [packages/](packages/) sub-mapper, og genererer SRI hash (https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) til bruk i dokumentasjon)_

Bygging og deployment av dokumentasjon skjer automatisk ved hjelp av [Github Actions](.github/workflows/deploy-storybook.yml).
Når noe blir pushet/merget til `main`-branchen vil scriptet bygge Storybook til `github-pages-deployment` branchen, som Github Pages hoster siden fra.

For å bygge dokumentasjon manuelt (til `./docs/`):

`yarn build:docs`

---


## Versjonering og publisering 🚀

Yarn er brukt for å benytte komboen Lerna + Yarn workspaces til enklere vedlikehold av endringslogg, versjonering og publisering av pakkene. Noen `npm` script er laget for arbeidsflyt med lerna.
### Stegvis

1️⃣ For å klargjøre en ny versjon:

`yarn version:changed`

- Kjører bygg-steget
- Foreslår nye versjoner (yes/no prompt)
- Committer en versjon-tag

Hva slags type versjon-bump det blir bestemmes automatisk fra commitloggen.

Hvis man trenger å sette versjon eksplisitt, bruk:

`yarn version:changed [patch|minor|major]`

Dette vil lage en commit med ny versjon. `major`, `minor` eller `patch` brukes etter [semver](https://semver.org/) konvensjonen.

2️⃣ Helst **merge/push til main-branchen** før du publiserer.

Sjekk evnt. at filene som blir publisert er riktige (`/build`-mappene til pakkene som er versjonert).

`git push`

3️⃣ For å publisere:

`yarn publish:changed`

Dette vil publisere pakken(e) tagget i nåværende commit 🚀

### Kombinert

For å eventuelt kjøre alle disse stegene i et, for eksempel hvis man ikke trenger å velge versjon manuelt og trenger en raskere måte å publisere på.

**(⚠️ Vær sikker på at alt er riktig hvis denne brukes ⚠️)**

`yarn version-publish-push`

- Kjører bygg-steget
- Committer en versjon-tag
- Publiserer til NPM
- Pusher til Github

---

## Feilsøking 🔍

### Yarn start funker ikke

Hvis `yarn start` gir feilmelding prøv `yarn start:clean`, som kjører uten Storybook sin manager cache. Storybook kan noen ganger feile dersom man har slettet og installert node_modules på nytt.
### Feil i produksjon?

Hvis man oppdager ulikheter mellom utvikling-, og produksjonsmiljø kan det være nyttig å teste dokumentasjonen som bygges lokalt:

`yarn build:docs`
### Lerna klager på at versjon allerede eksisterer

Lignende feilmelding: `lerna ERR! Error: Command failed with exit code 128: git tag ...`. 
Hvis dette skjer kan det hende man har en konflikterende versjon tag lokalt i git-loggen et sted (f.eks. i en lokal branch). En løsning på dette kan være å klone repo'et på nytt med `git clone` og så prøve på nytt i denne nye klonen. NB: husk å sjekk at lokale brancher man bruker/trenger enten blir pushet opp til origin eller beholdt før man eventuelt sletter den gamle klonen.

