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

/**
 * Token preview cell block
 *
 * @param {string} value
 */
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
const FontSizePreview = ({ value }) => {
  const boxStyling = {
    fontSize: value,
  }

  return <div style={boxStyling}>Lorem ipsum</div>
}
const FontWeightPreview = ({ value }) => {
  const boxStyling = {
    fontWeight: value,
  }

  return <div style={boxStyling}>Lorem ipsum</div>
}

const FontLineHeightPreview = ({ value }) => {
  const boxStyling = {
    lineHeight: value,
    maxWidth: '150px',
  }

  return (
    <div style={boxStyling}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam veniam eum
      dicta.
    </div>
  )
}

/**
 * Table row displaying spacing design token ( |-name-|-value-|-preview-| ).
 *
 * @param {string} name
 * @param {string} value
 * @param {React.ReactNode} children: element to be displayed as preview of token
 * @param {boolean} preview: display preview of token
 */
const TokenRow = ({ name, value, children, preview = true }) => {
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
      {preview && <td className="ddsdocs-table__data-cell">{children}</td>}
    </tr>
  )
}

/**
 * Table displaying design tokens ( |-name-|-value-|-preview-| ).
 *
 * @param {string} category: spacing | color | font-size | font-weight | font-line-height
 * @param {boolean} preview: display preview of token
 */
const TokenTable = ({ category = '', preview = true }) => {
  let tokenSubset = tokens[category]

  if (category.startsWith('font')) {
    const subcategory = category.split('-')[1]
    tokenSubset = tokens['font'][subcategory]
  }

  let tokensMap = {}
  // Check edge case where category has one value
  if (typeof tokenSubset !== 'object') {
    tokensMap = { [category]: tokenSubset }
  } else {
    tokensMap = flattenObject(tokenSubset, `${category}-`)
  }

  return (
    <table className="ddsdocs-table">
      <thead className="ddsdocs-table__header">
        <tr className="ddsdocs-table__row">
          <td className="ddsdocs-table__header-cell">Navn</td>
          <td className="ddsdocs-table__header-cell">Verdi</td>
          {preview && <td className="ddsdocs-table__header-cell">Eksempel</td>}
        </tr>
      </thead>
      <tbody className="ddsdocs-table__body">
        {Object.entries(tokensMap).map(([key, value]) => (
          <TokenRow name={key} value={value} key={key} preview={preview}>
            {category === 'spacing' && <SpacingPreview value={value} />}
            {category === 'color' && <ColorPreview value={value} />}
            {category === 'font-size' && <FontSizePreview value={value} />}
            {category === 'font-weight' && <FontWeightPreview value={value} />}
            {category === 'font-line-height' && (
              <FontLineHeightPreview value={value} />
            )}
          </TokenRow>
        ))}
      </tbody>
    </table>
  )
}

export default TokenTable
