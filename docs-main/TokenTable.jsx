import React from 'react'
import './TokenTable.scss'
import tokens from '@digdir/ds-tokens/build/tokens.js'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

/**
 * Flatten object structure
 *
 * Example input:
 * {
 *   "spacing": {
 *     "one": "0.5rem",
 *     "base": {
 *       "one": "0.25rem",
 *     }
 *   }
 * }
 *
 * Example output:
 * {
 *  'spacing-one': '0.5rem',
 *  'spacing-base-one': '0.25rem'
 * }
 *
 *  @param {Object} jsonObject
 *  @param {string} prefix
 *  @param {Object} name
 *
 */
const flattenObject = (jsonObject = {}, prefix = '', result = {}) => {
  for (const key in jsonObject) {
    if (typeof jsonObject[key] !== 'object') {
      result[prefix + key] = jsonObject[key]
    } else {
      flattenObject(jsonObject[key], `${prefix}${key}-`, result)
    }
  }
  return result
}

const SpacingPreview = ({ value }) => {
  const boxStyling = {
    backgroundColor: tokens.color.brand.third['400'],
    height: value,
    width: value,
  }

  return <div style={boxStyling}></div>
}

const ColorPreview = ({ value }) => {
  const boxStyling = {
    backgroundColor: value,
    height: tokens.spacing['4'],
    width: '100%',
  }

  return <div style={boxStyling}></div>
}

/**
 * Table row displaying spacing design token ( name | value | example ).
 *
 * @param {string} name
 * @param {string} value: unit in rem, e.g. "1rem"
 * @param {React.ReactNode} children: preview of token
 */
const TokenRow = ({ name, value, children }) => {
  const scssVariable = `$${name}`
  let displayedValue = value

  // Display pixel value
  if (value.substr(value.length - 3) === 'rem') {
    const pixelValue = parseFloat(value) * 16
    displayedValue = `${value} (${pixelValue}px)`
  }

  return (
    <tr className="ddsdocs-table__row">
      <td className="ddsdocs-table__data-cell">
        <Tippy placement="right" content="Kopier til utklippstavle">
          <button
            type="button"
            className="dds-button dds-button--secondary dds-button--small dds-button--icon-right"
            onClick={() => navigator.clipboard.writeText(scssVariable)}
          >
            {scssVariable}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
            </svg>
          </button>
        </Tippy>
      </td>
      <td className="ddsdocs-table__data-cell">
        <code>{displayedValue}</code>
      </td>
      {children && <td className="ddsdocs-table__data-cell">{children}</td>}
    </tr>
  )
}

/**
 * Table displaying design tokens ( name | value | example ).
 *
 * @param {string} category: spacing, color
 */
const TokenTable = ({ category = '' }) => {
  const spacingTokens = tokens[category]
  const tokensMap = flattenObject(spacingTokens, `${category}-`)

  return (
    <table className="ddsdocs-table">
      <thead className="ddsdocs-table__header">
        <tr className="ddsdocs-table__row">
          <td className="ddsdocs-table__header-cell">Navn</td>
          <td className="ddsdocs-table__header-cell">Verdi</td>
          <td className="ddsdocs-table__header-cell">Eksempel</td>
        </tr>
      </thead>
      <tbody className="ddsdocs-table__body">
        {Object.entries(tokensMap).map(([key, value]) => (
          <TokenRow name={key} value={value} key={key}>
            {category === 'spacing' && <SpacingPreview value={value} />}
            {category === 'color' && <ColorPreview value={value} />}
          </TokenRow>
        ))}
      </tbody>
    </table>
  )
}

export default TokenTable
