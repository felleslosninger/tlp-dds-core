const fs = require('fs')
const ssri = require('ssri')

function getSriHash(file) {
  const text = fs.readFileSync(file, 'utf-8')

  const integrityObj = ssri.fromData(text, {
    algorithms: ['sha512'],
  })
  return integrityObj.toString()
}

/**
 * Generate Subresource integrity hashes of distributed files
 * relevant for inclusion in <script> or <link> elements
 */
function generateSri() {
  let outputObj = {}
  const outputFile = 'docs-main/generated-sri.json'
  // Files to generate SRI hash for
  const files = [
    'packages/css/build/index.css',
    'packages/js/build/index.js',
    'packages/js/build/index.iife.js',
    'packages/tokens/build/tokens.css',
  ]

  for (const file of files) {
    const sriHash = getSriHash(file)
    outputObj[file] = sriHash
  }
  fs.writeFileSync(outputFile, JSON.stringify(outputObj, null, 2), 'utf-8')
}

generateSri()
