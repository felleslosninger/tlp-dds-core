import React, { useState } from 'react'
import './CodeSnippet.scss'
// Syntax highlighting
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
// Import more language support here as needed e.g.:
// import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
SyntaxHighlighter.registerLanguage('markup', markup)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('scss', scss)
SyntaxHighlighter.registerLanguage('javascript', javascript)
// Formatting
import prettier from 'prettier/standalone.js'
import parserJs from 'prettier/parser-flow.js'
import parserHtml from 'prettier/parser-html.js'
import parserCss from 'prettier/parser-postcss.js'
// Tooltip
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import packageCss from '../packages/css/package.json'
import packageJs from '../packages/js/package.json'
import packageTokens from '@digdir/ds-tokens/package'
import sriHashes from './generated-sri.json'

/**
 * Generate HTML resource inclusion element <link> or <script>.
 * The CDN link and the SRI hash is generated from the given file.
 *
 * @property {string} absoluteFilepath - filepath relative to project root: e.g. packages/css/build/index.css
 * @property {string} linkFormat
 * @returns {string} code snippet as string
 */
const getCdnLinkElement = ({ absoluteFilepath, linkFormat }) => {
  let packageJson = {}
  // Find correct package.json based on package folder in absolute path
  switch (absoluteFilepath.split('/')[1]) {
    case 'css':
      packageJson = packageCss
      break
    case 'js':
      packageJson = packageJs
      break
    case 'tokens':
      packageJson = packageTokens
      break
    default:
      throw 'No valid package directory name found in absoluteFilepath.'
  }

  const relativePath =
    packageJson.files + absoluteFilepath.split(packageJson.files)[1]

  const cdnLinkJsDelivr = `https://cdn.jsdelivr.net/npm/${packageJson.name}@${packageJson.version}${relativePath}`
  const sriHash = sriHashes[absoluteFilepath]

  let codeString = ''
  switch (linkFormat) {
    case 'css':
      codeString = `<link rel="stylesheet" href="${cdnLinkJsDelivr}" integrity="${sriHash}" crossorigin="anonymous">`
      break
    case 'js':
      codeString = `<script type="module" src="${cdnLinkJsDelivr}" integrity="${sriHash}" crossorigin="anonymous"></script>`
      break
    case 'iife':
      codeString = `<script nomodule defer src="${cdnLinkJsDelivr}" integrity="${sriHash}" crossorigin="anonymous"></script>`
      break
    default:
      throw 'Invalid format value given.'
  }

  return codeString
}

/**
 * Code snippet block with syntax highlighting
 *
 * @property {string} children - string of code to be included in code snippet
 * @property {string} language - options: markup | css | scss | javascript
 */
const CodeSnippet = ({ children = '', language = 'markup' }) => {
  const [tooltipText, setTooltipText] = useState('Kopier til utklippstavle')

  const handleHoverOff = () => {
    setTimeout(() => setTooltipText('Kopier til utklippstavle'), 200)
  }
  const handleClick = () => {
    navigator.clipboard.writeText(children)
    setTooltipText('Kopiert!')
  }

  if (language === 'css' || language === 'scss') {
    children = prettier.format(children, {
      parser: 'css',
      plugins: [parserCss],
    })
  }
  if (language === 'markup') {
    children = prettier.format(children, {
      parser: 'html',
      plugins: [parserHtml],
    })
  }
  if (language === 'javascript') {
    children = prettier.format(children, {
      parser: 'flow',
      plugins: [parserJs],
    })
  }

  return (
    <Tippy placement="top-end" content={tooltipText} hideOnClick={false}>
      <button
        onClick={handleClick}
        onMouseLeave={handleHoverOff}
        className="ddsdocs-cdn-snippet"
      >
        <SyntaxHighlighter
          language={language}
          style={prism}
          customStyle={{
            fontSize: '14px',
            margin: 0,
          }}
        >
          {children}
        </SyntaxHighlighter>
      </button>
    </Tippy>
  )
}

/**
 * Code snippet with HTML resource inclusion element (with CDN link + SRI hash).
 *
 * @property {string} absoluteFilepath - filepath relative to project root: e.g. packages/css/build/index.css
 * @property {string} linkFormat - options: css | js | iife
 */
const CdnSnippet = ({ absoluteFilepath, linkFormat, ...props }) => {
  let codeString = getCdnLinkElement({ absoluteFilepath, linkFormat })

  return <CodeSnippet {...props}>{codeString}</CodeSnippet>
}

export { CodeSnippet, CdnSnippet }
