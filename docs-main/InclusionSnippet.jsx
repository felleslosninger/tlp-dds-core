import React, { useState } from 'react'
import './InclusionSnippet.scss'
// Syntax highlighting
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
SyntaxHighlighter.registerLanguage('jsx', jsx)
// Tooltip
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { formatHtml } from '../packages/html/src/utils.js'
import packageCss from '../packages/css/package.json'
import packageJs from '../packages/js/package.json'
import packageTokens from '../packages/tokens/package.json'
import sriHashes from './generated-sri.json'

const InclusionSnippet = ({ absoluteFilepath, format }) => {
  const [tooltipText, setTooltipText] = useState('Kopier til utklippstavle')
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
  switch (format) {
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

  const handleHoverOff = () => {
    setTimeout(() => setTooltipText('Kopier til utklippstavle'), 200)
  }
  const handleClick = () => {
    navigator.clipboard.writeText(codeString)
    setTooltipText('Kopiert!')
  }

  return (
    <Tippy placement="top-end" content={tooltipText} hideOnClick={false}>
      <button
        onClick={handleClick}
        onMouseLeave={handleHoverOff}
        className="ddsdocs-inclusion-snippet"
      >
        <SyntaxHighlighter
          language="jsx"
          style={prism}
          customStyle={{
            fontSize: '14px',
            margin: 0,
          }}
        >
          {formatHtml(codeString)}
        </SyntaxHighlighter>
      </button>
    </Tippy>
  )
}

export default InclusionSnippet
