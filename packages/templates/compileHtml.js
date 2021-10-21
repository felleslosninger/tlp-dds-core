import fs from 'fs'
import { createBaseLayout } from './src/baseLayout.js'

// Create necessary HTML
const layout = createBaseLayout({ title: 'Tittel' })
// Output path
const layoutDest = 'html/baseLayout.html'
// Write to file
fs.writeFile(layoutDest, layout, (err) => {
  if (err) throw err
  else console.log(`Template successfully written to ${layoutDest}`)
})
